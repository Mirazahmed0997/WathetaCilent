
'use client';
import { useState } from "react";
import { Mail, Phone, User, Building2, CreditCard, TicketPercent } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import CONSTANT from '@/configs/constant.config';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// -------------------- Yup Validation Schema --------------------
const schema = yup.object().shape({
    name: yup
        .string()
        .required("Full name is required")
        .min(2, "Name must be at least 3 characters"),
    businessName: yup
        .string()
        .required("Business name is required")
        .min(2, "Must be at least 2 characters"),
    number: yup
        .string()
        .required("Contact number is required")
        .matches(/^(\+?8801|01)[3-9]\d{8}$/, "Enter a valid Bangladeshi phone number"),
    email: yup
        .string()
        .required("Email address is required")
        .email("Invalid email address"),
});

export default function PaymentForm({ plan, addons, coupons }) {
    if (!plan) return null;

    const baseAmount = Number(plan?.priceOfferBDT) || Number(plan?.priceRegularBDT);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        businessName: "",
        number: "",
        coupon: "",
        discountedValue: 0,
        discountType: "",
        couponError: "",
    });

    const [selectedAddons, setSelectedAddons] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            businessName: "",
            number: "",
            coupon: "",
            discountedValue: 0,
            discountType: "",
            couponError: "",
        });
        setSelectedAddons([]);
    };

    // -------------------------- APPLY COUPON --------------------------
    const applyCoupon = () => {
        const inputCode = formData.coupon.trim().toLowerCase();
        const found = coupons.find((c) => c.code.toLowerCase() === inputCode);

        if (!found) {
            setFormData((prev) => ({
                ...prev,
                discountedValue: 0,
                discountType: "",
                couponError: "Invalid coupon code",
            }));
            return;
        }

        const today = new Date();
        const start = new Date(found.validFrom);
        const end = new Date(found.validTo);

        if (today < start) {
            setFormData((prev) => ({
                ...prev,
                discountedValue: 0,
                couponError: "This coupon is not active yet",
            }));
            return;
        }

        if (today > end) {
            setFormData((prev) => ({
                ...prev,
                discountedValue: 0,
                couponError: "This coupon has expired",
            }));
            return;
        }

        const validPlanIds = found.planCoupons.map((p) => p.plan.id);

        if (!validPlanIds.includes(plan.id)) {
            setFormData((prev) => ({
                ...prev,
                discountedValue: 0,
                couponError: "This coupon is not valid for your selected plan",
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            discountedValue: found.discountValue,
            discountType: found.discountType,
            couponError: "",
        }));
    };

    // -------------------------- ADDON LOGIC --------------------------
    const toggleAddon = (addon) => {
        const exists = selectedAddons.find((a) => a.id === addon.id);
        if (exists) {
            setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
        } else {
            setSelectedAddons([...selectedAddons, { ...addon, qty: 1 }]);
        }
    };

    const changeQty = (id, delta) => {
        setSelectedAddons((prev) =>
            prev.map((a) =>
                a.id === id ? { ...a, qty: Math.max(1, a.qty + delta) } : a
            )
        );
    };

    let addonTotal = selectedAddons.reduce(
        (sum, a) => sum + Number(a.priceBDT) * a.qty,
        0
    );

    if (plan.durationType === "MONTH") {
        addonTotal = addonTotal * Number(plan.duration);
    } else if (plan.durationType === "YEAR") {
        addonTotal = addonTotal * 12 * Number(plan.duration);
    }

    // -------------------------- FINAL AMOUNT --------------------------
    let discounted = baseAmount;

    if (formData.discountType === "PERCENT") {
        discounted = Math.floor(
            baseAmount - (baseAmount * formData.discountedValue) / 100
        );
    }

    if (formData.discountType === "AMOUNT") {
        discounted = Math.floor(baseAmount - formData.discountedValue);
    }

    if (discounted < 0) discounted = 0;

    const finalAmount = discounted + addonTotal;

    // -------------------------- SUBMIT / PAYMENT --------------------------

    // const handlePayment = async (data, e) => {
    //     e.preventDefault();

    //     const submittedData = {
    //         ...formData,
    //         // ...data, // validated values from react-hook-form
    //         amount: finalAmount,
    //         packageName: plan?.name,
    //         paymentStatus: "abandoned",
    //         date: new Date().toLocaleDateString(),
    //         paymentType: "N/A",
    //         invoiceNumber: "N/A",
    //         paymentNumber: "N/A",
    //         paymentID: uuidv4(),
    //         trxID: "N/A",
    //         userId: Math.floor(Math.random() * 10000),
    //         refund: "",
    //         // selectedAddons: selectedAddons,
    //     };

    //     // console.log("Submitted:", submittedData);


    //     // ✅ FIXED: Working createOrder function
    //     async function createOrder(submittedData) {
    //         console.log(JSON.stringify(submittedData))
    //         try {
    //             const response = await fetch("http://localhost:3000/api/v1/payment/order", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },

    //                 // ❗ FIXED: orderData → submittedData
    //                 body: JSON.stringify(submittedData),
    //             });

    //             if (!response.ok) {
    //                 console.error("❌ Order creation failed");
    //                 return null;
    //             }

    //             const data = await response.json();
    //             console.log("✅ Order created successfully:", data);
    //             return data;

    //         } catch (error) {
    //             console.error("❌ Error creating order:", error);
    //             return null;
    //         }
    //     }

    //     // 👉 Now call the createOrder function
    //     const result = await createOrder(submittedData);

    //     if (result) {
    //         console.log("🎉 Order saved in DB!");
    //     }
    // };


      const handlePayment = async (data, e) => {
        e.preventDefault();

        const submittedData = {
          ...formData,
          ...data, // validated values from react-hook-form
          amount: finalAmount,
          packageName: plan?.name,
          paymentStatus: "abandoned",
          date: new Date().toLocaleDateString(),
          paymentType: "N/A",
          invoiceNumber: "N/A",
          paymentNumber: "N/A",
          paymentID: uuidv4(),
          trxID: "N/A",
          userId: Math.floor(Math.random() * 10000),
          refund: "",
          selectedAddons: selectedAddons,
        };

        console.log("Submitted:", submittedData);

        try {
        //   const response = await fetch(
        //     `https://payapi.watheta.com/api/postByDefaultAbandoned`,
        //     {
        //       method: "POST",
        //       headers: { "Content-Type": "application/json" },
        //       body: JSON.stringify(submittedData),
        //     }
        //   );


          const response = await fetch(
            `https://websiteapi.watheta.com/api/v1/payment/order`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(submittedData),
            }
          );

          if (response.ok) {
            handleReset();
            const paymentUrl = `https://payment.watheta.com/?name=${submittedData.name}&email=${submittedData.email}&businessName=${submittedData.businessName}&contactNumber=${submittedData.number}&packageName=${submittedData.packageName}&amount=${submittedData.amount}&addons=${submittedData.selectedAddons}&currency=৳`;
            window.location.href = paymentUrl;
          } else {
            console.error("❌ Payment API failed");
          }
        } catch (error) {
          console.error("❌ Error:", error);
        }
      };

    // ----------------------------------------------------------------



    return (
        <section>
            <form
                onSubmit={handleSubmit(handlePayment)} // yup‑validated submit
                className="w-full max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100 space-y-6"
            >
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Complete Your Payment
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Please fill in your details to proceed with payment for{" "}
                        <span className="font-medium text-gray-800">{plan?.name}</span>.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                {...register("name")}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className={`w-full pl-10 p-2.5 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"
                                    } focus:ring-2 focus:ring-blue-400 transition`}
                            />
                        </div>
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Business Name */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Business Name
                        </label>
                        <div className="relative">
                            <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                {...register("businessName")}
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                placeholder="My Company Ltd."
                                className={`w-full pl-10 p-2.5 rounded-lg border ${errors.businessName ? "border-red-500" : "border-gray-300"
                                    } focus:ring-2 focus:ring-blue-400 transition`}
                            />
                        </div>
                        {errors.businessName && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.businessName.message}
                            </p>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Contact Number
                        </label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                                type="tel"
                                {...register("number")}
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                placeholder="+8801XXXXXXXXX"
                                className={`w-full pl-10 p-2.5 rounded-lg border ${errors.number ? "border-red-500" : "border-gray-300"
                                    } focus:ring-2 focus:ring-blue-400 transition`}
                            />
                        </div>
                        {errors.number && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.number.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                                type="email"
                                {...register("email")}
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                                className={`w-full pl-10 p-2.5 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"
                                    } focus:ring-2 focus:ring-blue-400 transition`}
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Coupon */}
                    <div className="flex flex-col sm:col-span-2">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Coupon Code
                        </label>
                        <div className="relative flex gap-2">
                            <div className="relative">
                                <TicketPercent className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    name="coupon"
                                    value={formData.coupon}
                                    onChange={handleChange}
                                    placeholder="Enter coupon (optional)"
                                    className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={applyCoupon}
                                className="px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                Apply
                            </button>
                        </div>
                        {formData.discountedValue > 0 ? (
                            <p className="text-green-600 mt-1">Coupon applied!</p>
                        ) : formData.couponError ? (
                            <p className="text-red-600 mt-1">{formData.couponError}</p>
                        ) : null}
                    </div>
                </div>

                {/* ADDONS LIST */}
                <div className="flex flex-wrap gap-3 mt-2">
                    {addons.map((addon) => {
                        const selectedItem = selectedAddons.find((a) => a.id === addon.id);
                        const isActive = Boolean(selectedItem);

                        return (
                            <div
                                key={addon.id}
                                className={`p-3 rounded-xl border w-full sm:w-[48%]
                            transition shadow-sm flex items-center justify-between gap-4
                            ${isActive
                                        ? "bg-blue-600 border-blue-700 text-white"
                                        : "bg-red-100 border-blue-700 text-gray-800"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={isActive}
                                        onChange={() => toggleAddon(addon)}
                                        className="h-5 w-5 accent-blue-600 border-gray-300 rounded cursor-pointer"
                                    />
                                    <div className="w-10 h-10 flex-shrink-0">
                                        <img
                                            className="w-full h-full object-contain"
                                            src={CONSTANT?.API_URL + addon?.icon}
                                            alt={addon.title}
                                        />
                                    </div>
                                    <div>
                                        <div className="font-semibold">{addon.title}</div>
                                        <div className="text-sm font-semibold opacity-80">
                                            ৳{addon.priceBDT} / ${addon.priceUSD} PER MONTH
                                        </div>
                                    </div>
                                </div>

                                {isActive && (
                                    <div
                                        className="flex items-center gap-1"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => changeQty(addon.id, -1)}
                                            className="px-2 py-1 bg-white/20 rounded font-bold"
                                        >
                                            −
                                        </button>
                                        <span className="font-semibold">{selectedItem?.qty ?? 1}</span>
                                        <button
                                            type="button"
                                            onClick={() => changeQty(addon.id, 1)}
                                            className="px-2 py-1 bg-white/20 rounded font-bold"
                                        >
                                            +
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* SUMMARY */}
                <div className="mt-6 bg-blue-50 rounded p-4">
                    <p className="text-green-500 font-semibold">Base price: ৳{baseAmount}</p>
                    <p className="text-green-500 font-semibold">
                        Discount: - ৳{baseAmount - discounted}
                    </p>
                    <p className="text-green-500 font-semibold">Add-ons: + ৳{addonTotal}</p>

                    <h3 className="mt-2 text-xl font-bold text-blue-700">
                        Payable Amount: ৳{finalAmount}
                    </h3>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex items-center justify-end gap-3 pt-4">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="px-5 py-2.5 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2.5 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition shadow-sm"
                    >
                        Proceed to Payment (৳{finalAmount})
                    </button>
                </div>
            </form>
        </section>
    );
}













//  const baseAmount = Number(plan?.priceOfferBDT) || Number(plan?.priceRegularBDT);
//     // console.log("planID", plan.id)
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         businessName: "",
//         number: "",
//         coupon: "",
//         discountPercent: 0,
//     });



//     const [selectedAddons, setSelectedAddons] = useState([]); // array of addon objects

//     // console.log("selectedAdons", selectedAddons)

//     const dropdownRef = useRef();

//     useEffect(() => {
//         function handleClickOutside(e) {
//             if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//                 setDropdownOpen(false);
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);



//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     // console.log("form data", formData)

//     const handleReset = () => {
//         setFormData({
//             name: "",
//             email: "",
//             businessName: "",
//             number: "",
//             coupon: "",
//             discountPercent: 0,
//         });
//     };

//     const applyCoupon = () => {
//         // const userPlanId = formData.planId; // your selected plan ID
//         const inputCouponCode = formData.coupon.trim().toLowerCase();
//         // console.log("inputCouponCode",inputCouponCode)

//         const found = coupons.find(
//             (c) => c.code.toLowerCase() === inputCouponCode
//         );

//         // console.log("found",found)

//         // If coupon not found
//         if (!found) {
//             setFormData((prev) => ({
//                 ...prev,
//                 discountPercent: 0,
//                 couponError: "Invalid coupon code",
//             }));
//             return;
//         }


//         // Check date validity
//         const today = new Date();
//         const start = new Date(found.validFrom);
//         const end = new Date(found.validTo);

//         if (today < start) {
//             setFormData((prev) => ({
//                 ...prev,
//                 discountPercent: 0,
//                 couponError: "This coupon is not active yet",
//             }));
//             return;
//         }

//         if (today > end) {
//             setFormData((prev) => ({
//                 ...prev,
//                 discountPercent: 0,
//                 couponError: "This coupon has expired",
//             }));
//             return;
//         }


//         // Check plan match
//         const validPlanIds = found.planCoupons.map((p) => p.plan.id);

//         const isInclude = validPlanIds.includes(plan.id)

//         console.log(isInclude)

//         if (!validPlanIds.includes(plan.id)) {
//             setFormData((prev) => ({
//                 ...prev,
//                 discountPercent: 0,
//                 couponError: "This coupon is not valid for your selected plan",
//             }));
//             return;
//         }



//         // All good → Apply coupon
//         setFormData((prev) => ({
//             ...prev,
//             discountedValue: found.discountValue,
//             couponError: "",
//         }));
//     };




//     //  ADDON LOGIC
//     const toggleAddon = (addon) => {
//         const exists = selectedAddons.find((a) => a.id === addon.id);

//         if (exists) {
//             setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
//         } else {
//             setSelectedAddons([...selectedAddons, addon]);
//         }
//     };

//     const addonTotal = selectedAddons.reduce((sum, a) => sum + Number(a.priceBDT), 0);


//     const inputCouponCode = formData.coupon.trim().toLowerCase();
//     // console.log("inputCouponCode",inputCouponCode)

//     const found = coupons.find(
//         (c) => c.code.toLowerCase() === inputCouponCode
//     );

//     console.log("founded",found)

//     let discounted 




//     if (found?.discountType === "PERCENT") {
//         discounted = formData.discountedValue
//             ? Math.floor(baseAmount - (baseAmount * formData.discountedValue) / 100)
//             : baseAmount;

//     }

//     else if((found?.discountType === "AMOUNT")){
//         discounted = formData.discountedValue
//             ? Math.floor(baseAmount - formData.discountedValue)
//             : baseAmount;

//     }




//     const finalAmount = discounted + addonTotal;










// 'use client'
// import { useState } from "react";
// import { Mail, Phone, User, Building2, CreditCard } from "lucide-react";
// import { v4 as uuidv4 } from "uuid";

// export default function PaymentForm({ plan }) {
//     if (!plan) return null;
//     console.log("plan",plan)
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         businessName: "",
//         number: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleReset = () => {
//         setFormData({
//             name: "",
//             email: "",
//             businessName: "",
//             number: "",
//         });
//     };

//     const handlePayment = async (e) => {
//         e.preventDefault();

//         const submittedData = {
//             ...formData,
//             amount: Number(plan?.priceOfferBDT) || Number(plan?.priceRegularBDT),
//             packageName: plan?.name,
//             paymentStatus: "abandoned",
//             date: new Date().toLocaleDateString(),
//             paymentType: "N/A",
//             invoiceNumber: "N/A",
//             paymentNumber: "N/A",
//             paymentID: uuidv4(),
//             trxID: "N/A",
//             userId: Math.floor(Math.random() * 10000),
//             refund: "",
//         };


//         console.log(submittedData)

//         try {
//             const response = await fetch(`https://payapi.watheta.com/api/postByDefaultAbandoned`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(submittedData),
//             });

//             if (response.ok) {
//                 handleReset();
//                 const paymentUrl = `https://payment.watheta.com/?name=${submittedData?.name}&email=${submittedData?.email}&businessName=${submittedData?.businessName}&contactNumber=${submittedData?.number}&packageName=${submittedData?.packageName}&amount=${submittedData?.amount}&currency=৳`;
//                 window.location.href = paymentUrl;
//             } else {
//                 console.error("❌ Payment API failed");
//             }
//         } catch (error) {
//             console.error("❌ Error:", error);
//         }
//     };

//     return (
//         <form
//             onSubmit={handlePayment}
//             className="w-full max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100 space-y-6"
//         >
//             <div className="text-center space-y-2">
//                 <h2 className="text-2xl font-semibold text-gray-800">Complete Your Payment</h2>
//                 <p className="text-gray-500 text-sm">
//                     Please fill in your details to proceed with payment for{" "}
//                     <span className="font-medium text-gray-800">{plan?.name}</span>.
//                 </p>
//             </div>

//             <div className="grid gap-5 sm:grid-cols-2">
//                 {/* Full Name */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                     <div className="relative">
//                         <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="John Doe"
//                             required
//                             className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
//                         />
//                     </div>
//                 </div>

//                 {/* Business Name */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-medium text-gray-700 mb-1">Business Name</label>
//                     <div className="relative">
//                         <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                         <input
//                             type="text"
//                             name="businessName"
//                             value={formData.businessName}
//                             onChange={handleChange}
//                             placeholder="My Company Ltd."
//                             required
//                             className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
//                         />
//                     </div>
//                 </div>

//                 {/* Contact Number */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-medium text-gray-700 mb-1">Contact Number</label>
//                     <div className="relative">
//                         <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                         <input
//                             type="tel"
//                             name="number"
//                             value={formData.number}
//                             onChange={handleChange}
//                             placeholder="+8801XXXXXXXXX"
//                             required
//                             className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
//                         />
//                     </div>
//                 </div>

//                 {/* Email Address */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                     <div className="relative">
//                         <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="example@email.com"
//                             required
//                             className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Summary */}
//             <div className="bg-blue-50 rounded-xl p-4 flex justify-between items-center">
//                 <div>
//                     <p className="text-sm text-gray-600">You are about to pay:</p>
//                     <h3 className="text-xl font-bold text-blue-600">
//                         {plan?.priceOfferBDT || plan?.priceRegularBDT}৳ / {plan?.priceOfferUSD || plan?.priceRegularUSD}$
//                     </h3>
//                 </div>
//                 <CreditCard className="h-8 w-8 text-blue-500" />
//             </div>

//             {/* Buttons */}
//             <div className="flex items-center justify-end gap-3 pt-4">
//                 <button
//                     type="button"
//                     onClick={handleReset}
//                     className="px-5 py-2.5 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
//                 >
//                     Reset
//                 </button>
//                 <button
//                     type="submit"
//                     className="px-6 py-2.5 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition shadow-sm"
//                 >
//                     Proceed to Payment
//                 </button>
//             </div>
//         </form>
//     );
// }
