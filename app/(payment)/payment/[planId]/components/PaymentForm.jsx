'use client'
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, User, Building2, CreditCard, TicketPercent, ChevronDown } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import Addons from "@/app/(main)/pricing/components/Addons";
import CONSTANT from '@/configs/constant.config'


export default function PaymentForm({ plan, addons }) {
    if (!plan) return null;


    // console.log(addons)


    const coupons = [
        {
            code: "WELCOME101",
            discount: 10,
            validFrom: "2025-01-01",
            validTo: "2025-11-18",
            planId: "cmfts8g9c0004u5l0e1e7mv9v",
            limitUsage: 100
        },
        {
            code: "SAVE20",
            discount: 20,
            validFrom: "2025-02-01",
            validTo: "2025-11-30",
            planId: "cmfts8g9c0004u5l0e1e7mv9v",
            limitUsage: 50
        },
        {
            code: "MEGA50",
            discount: 50,
            validFrom: "2025-03-10",
            validTo: "2025-03-20",
            planId: "premium_plan",
            limitUsage: 10
        }
    ];


    const baseAmount = Number(plan?.priceOfferBDT) || Number(plan?.priceRegularBDT);
    // console.log("planID", plan.id)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        businessName: "",
        number: "",
        coupon: "",
        discountPercent: 0,

    });



    const [selectedAddons, setSelectedAddons] = useState([]); // array of addon objects
    const [dropdownOpen, setDropdownOpen] = useState(false);

    console.log("selectedAdons", selectedAddons)

    const dropdownRef = useRef();

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    console.log("form data", formData)

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            businessName: "",
            number: "",
            coupon: "",
            discountPercent: 0,
        });
    };

    const applyCoupon = () => {
        // const userPlanId = formData.planId; // your selected plan ID
        const inputCouponCode = formData.coupon.trim().toLowerCase();
        // console.log("inputCouponCode",inputCouponCode)

        const found = coupons.find(
            (c) => c.code.toLowerCase() === inputCouponCode
        );

        // console.log("found",found)

        // If coupon not found
        if (!found) {
            setFormData((prev) => ({
                ...prev,
                discountPercent: 0,
                couponError: "Invalid coupon code",
            }));
            return;
        }

        // Check plan match
        if (found.planId !== plan.id) {
            setFormData((prev) => ({
                ...prev,
                discountPercent: 0,
                couponError: "This coupon is not valid for your selected plan",
            }));
            return;
        }

        // Check date validity
        const today = new Date();
        const start = new Date(found.validFrom);
        const end = new Date(found.validTo);

        if (today < start) {
            setFormData((prev) => ({
                ...prev,
                discountPercent: 0,
                couponError: "This coupon is not active yet",
            }));
            return;
        }

        if (today > end) {
            setFormData((prev) => ({
                ...prev,
                discountPercent: 0,
                couponError: "This coupon has expired",
            }));
            return;
        }

        // All good → Apply coupon
        setFormData((prev) => ({
            ...prev,
            discountPercent: found.discount,
            couponError: "",
        }));
    };




    //  ADDON LOGIC
    const toggleAddon = (addon) => {
        const exists = selectedAddons.find((a) => a.id === addon.id);

        if (exists) {
            setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
        } else {
            setSelectedAddons([...selectedAddons, addon]);
        }
    };

    const addonTotal = selectedAddons.reduce((sum, a) => sum + Number(a.price), 0);


    const discounted = formData.discountPercent
        ? Math.floor(baseAmount - (baseAmount * formData.discountPercent) / 100)
        : baseAmount;

    const finalAmount = discounted + addonTotal;





    const handlePayment = async (e) => {
        e.preventDefault();

        const submittedData = {
            ...formData,
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
            selectedAddons: selectedAddons
        };

        console.log("Submitted:", submittedData);

        try {
            const response = await fetch(`https://payapi.watheta.com/api/postByDefaultAbandoned`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submittedData),
            });

            if (response.ok) {
                handleReset();
                const paymentUrl = `https://payment.watheta.com/?name=${submittedData.name}&email=${submittedData.email}&businessName=${submittedData.businessName}&contactNumber=${submittedData.number}&packageName=${submittedData.packageName}&amount=${submittedData.amount}&addons=${submittedData.selectedAddons}&currency=৳&currency=৳`;
                window.location.href = paymentUrl;
            } else {
                console.error("❌ Payment API failed");
            }
        } catch (error) {
            console.error("❌ Error:", error);
        }
    };

    return (
        <section>
            <form
                onSubmit={handlePayment}
                className="w-full max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100 space-y-6"
            >
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-800">Complete Your Payment</h2>
                    <p className="text-gray-500 text-sm">
                        Please fill in your details to proceed with payment for{" "}
                        <span className="font-medium text-gray-800">{plan?.name}</span>.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition"
                            />
                        </div>
                    </div>

                    {/* Business Name */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Business Name</label>
                        <div className="relative">
                            <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                required
                                placeholder="My Company Ltd."
                                className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                                type="tel"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                required
                                placeholder="+8801XXXXXXXXX"
                                className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="example@email.com"
                                className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition"
                            />
                        </div>
                    </div>


                    {/* Coupon Field */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Coupon Code</label>
                        <div className="relative flex gap-2">
                            <div className="relative w-full">
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

                        {formData.discountPercent > 0 ? (
                            <p className="text-green-600 mt-1">
                                Coupon applied! ({formData.discountPercent}% OFF)
                            </p>
                        ) : formData.couponError ? (
                            <p className="text-red-600 mt-1">{formData.couponError}</p>
                        ) : null}

                    </div>
                </div>




                {/* MULTIPLE ADDON SELECT DROPDOWN */}
                <div className="mt-5">
                    <label className="font-medium">
                        Select Additional Services (Optional Add-ons). You can select more than one.
                    </label>

                    <div className="flex flex-wrap gap-3 mt-2">
                        {addons.map((addon) => {
                            const isActive = selectedAddons.some((a) => a.id === addon.id);

                            return (
                                <div
                                    key={addon.id}
                                    onClick={() => toggleAddon(addon)}
                                    className={`
                        cursor-pointer p-3 rounded-xl border w-full sm:w-[48%]
                        transition shadow-sm flex items-center gap-4
                        ${isActive
                                            ? "bg-blue-600 border-blue-700 text-white"
                                            : "bg-red-100 border-blue-700 text-gray-800"
                                        }
                    `}
                                >

                                    {/* Checkbox */}
                                    <div
                                        className={`
                            w-5 h-5 rounded border flex items-center justify-center bg-white
                            ${isActive ? "bg-white border-white" : "border-gray-400 bg-transparent"}
                        `}
                                    >
                                        {isActive && (
                                            <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                                        )}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-10 h-10 flex-shrink-0">
                                        <img
                                            className="w-full h-full object-contain"
                                            src={CONSTANT?.API_URL + addon?.icon}
                                            alt=""
                                        />
                                    </div>

                                    {/* Title + Price */}
                                    <div className="flex-1">
                                        <div className="font-semibold">{addon.title}</div>
                                        <div className="text-sm font-semibold opacity-80">
                                            ৳{addon.price}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* selected tags */}
                    {selectedAddons.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {selectedAddons.map((item) => (
                                <span
                                    key={item.id}
                                    className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                                >
                                    {item.title} — ৳{item.price}
                                </span>
                            ))}
                        </div>
                    )}
                </div>






                {/* Summary */}

                <div className="mt-6 bg-blue-50 rounded p-4">
                    <p>Base price: ৳{baseAmount}</p>
                    <p>Discount: - ৳{baseAmount - discounted}</p>
                    <p>Add-ons: + ৳{addonTotal}</p>

                    <h3 className="mt-2 text-xl font-bold text-blue-700">
                        Payable Amount: ৳{finalAmount}
                    </h3>
                </div>



                {/* Buttons */}
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

            {/* <Addons addons={addons} /> */}
        </section>
    );
}