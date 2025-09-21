'use client'
import { BadgeInfo, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react'
import OldPricing from './OldPricing';
import PaymentForm from './PaymentForm';
import { v4 as uuidv4 } from 'uuid';

export default function PricingPlan({ plans }) {
    const [isToggle, setIsToggle] = useState("month");
    const [isHideOld, setHideOld] = useState(true);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessName: '',
        number: '',
        amount: '',
        packageName: '',
        paymentStatus: '',
        date: '',
        paymentType: '',
        invoiceNumber: '',
        paymentNumber: '',
        paymentID: '',
        trxID: '',
        userId: '',
        refund: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRest = () => {
        setFormData({
            name: '',
            email: '',
            businessName: '',
            number: '',
            amount: '',
            packageName: '',
            paymentStatus: '',
            date: '',
            paymentType: '',
            invoiceNumber: '',
            paymentNumber: '',
            paymentID: '',
            trxID: '',
            userId: '',
            refund: '',
        });
    }

    const openPaymentForm = (plan) => {
        setSelectedPlan(plan);
        document.getElementById('payment_modal').showModal();
    };

    const handlePayment = async (e) => {
        e.preventDefault();

        const submittedData = {
            ...formData,
            amount: selectedPlan?.priceOfferBDT || selectedPlan?.priceRegularBDT,
            packageName: selectedPlan?.name,
            paymentStatus: "abandoned",
            date: new Date().toLocaleDateString(),
            paymentType: "N/A",
            invoiceNumber: "N/A",
            paymentNumber: "N/A",
            paymentID: uuidv4(),
            trxID: "N/A",
            userId: Math.floor(Math.random() * 10000),
        };

        try {
            // const response = await fetch(`https://payapi.watheta.com/api/postByDefaultAbandoned`, {
            const response = await fetch(`http://localhost:5000/api/postByDefaultAbandoned`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submittedData),
            });

            if (response.ok) {
                // ✅ Close modal
                document.getElementById("payment_modal").close();

                // ✅ Reset form data
                handleRest()

                // ✅ Redirect to payment page
                const paymentUrl = `https://payment.watheta.com/?name=${submittedData?.name}&email=${submittedData?.email}&businessName=${submittedData?.businessName}&contactNumber=${submittedData?.number}&packageName=${submittedData?.packageName}&amount=${submittedData?.amount}&currency=৳`;
                window.location.href = paymentUrl;
            } else {
                console.error("❌ Payment API failed");
            }
        } catch (error) {
            console.error("❌ Error:", error);
        }
    };

    return (
        <div className='h-auto'>
            <div className="mx-3 lg:mx-60 xl:mx-96 pt-6">
                <div className="lmitedBgDiv p-1 mx-5">
                    <h1 className="text-center text-sm text-white blink-background">
                        Limited Period Offer - Price Can Increase Anytime!
                    </h1>
                </div>
            </div>
            <section className="bg-gray-50 py-16 px-6 h-auto">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Pricing Plans
                    </h2>
                    <p className="mt-3 text-lg text-gray-600">
                        Choose the right plan that fits your needs.
                    </p>
                    <div className='w-full flex item-center justify-center'>
                        <button onClick={() => setHideOld(p => !p)} className={`cursor-pointer text-sm ${isHideOld ? 'text-amber-500' : 'text-teal-500'}`}>
                            Show {isHideOld ? 'Previous' : 'Current'} Pricing
                        </button>
                    </div>
                    <div className="flex justify-center py-10">
                        <div className="pricingButtonTaggoleDiv ps-1 pe-1 py-1 space-x-1 rounded-full ">
                            <button
                                onClick={() => setIsToggle("month")}
                                className={` px-5 py-1 rounded-full cursor-pointer ${isToggle === "month" && "pricingToggoleButton"}`}
                            >
                                BDT
                            </button>
                            <button
                                onClick={() => setIsToggle("year")}
                                className={`px-5 py-1 rounded-full cursor-pointer ${isToggle === "year" && "pricingToggoleButton"}`}
                            >
                                USD
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                {isHideOld ? (
                    <div className="grid grid-cols-1 md:flex md:items-center md:justify-around gap-8 max-w-7xl mx-auto">
                        {plans?.data.map((plan) => (
                            <div
                                key={plan.id}
                                className={`rounded-2xl w-full shadow-md border bg-white flex flex-col transition hover:shadow-xl ${plan.isRecommended
                                    ? "border-blue-500 ring-2 ring-blue-300"
                                    : "border-gray-200"
                                    }`}
                            >
                                {/* Header */}
                                <div className="p-6 border-b border-gray-400">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-gray-900 mt-2">
                                            {plan.name}
                                        </h3>
                                        {plan.isPopular && (
                                            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
                                                Popular
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600">{plan.description}</p>

                                    {/* Price */}
                                    <div className="mt-4">
                                        <span className="text-3xl font-extrabold text-gray-900">
                                            {isToggle === "month"
                                                ? `৳${plan.priceOfferBDT}`
                                                : `$${plan?.priceOfferUSD}`}
                                        </span>
                                        <span className="ml-2 line-through text-gray-400 text-lg">
                                            {isToggle === "month"
                                                ? `৳${plan.priceRegularBDT}`
                                                : `$${plan?.priceRegularUSD}`}
                                        </span>
                                        <span className="block text-sm text-gray-500">
                                            per {plan.duration} {plan.durationType.toLowerCase()}
                                        </span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="p-6 flex-1 overflow-visible">
                                    {Object.entries(plan.featureGroups || {}).map(
                                        ([groupName, features]) => (
                                            <div key={groupName} className="mb-5">
                                                <h4 className="text-sm font-semibold text-gray-700 mb-2 border-b border-gray-400 pb-1">
                                                    {groupName}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {features.map((feature) => (
                                                        <li key={feature.id} className="flex items-start text-sm">
                                                            {feature.included ? (
                                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                                            ) : (
                                                                <XCircle className="h-4 w-4 text-red-400 mr-2 mt-0.5" />
                                                            )}
                                                            <div>
                                                                <div
                                                                    className={`${feature.included
                                                                        ? "text-gray-700"
                                                                        : "text-gray-400 line-through"
                                                                        } flex items-center space-x-1`}
                                                                >
                                                                    <p>{feature.name}</p>
                                                                    <div className="relative flex items-center group">
                                                                        <BadgeInfo className="w-4 h-4 text-gray-500 cursor-pointer" />
                                                                        <span
                                                                            className="absolute left-6 top-1/2 -translate-y-1/2
                                        w-52 text-xs text-white bg-gray-800 rounded-md shadow-lg px-3 py-2
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                        pointer-events-none z-50"
                                                                        >
                                                                            {feature.description}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                {feature.planDescription && (
                                                                    <p className="text-xs text-gray-500">{feature.planDescription}</p>
                                                                )}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    )}
                                </div>

                                {/* CTA */}
                                <div className="p-6 border-t border-gray-400">
                                    <button
                                        onClick={() => openPaymentForm(plan)}
                                        className={`w-full py-3 px-4 rounded-xl font-semibold transition ${plan.isRecommended
                                            ? "bg-blue-600 text-white hover:bg-blue-700"
                                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                            }`}
                                    >
                                        {plan.isRecommended ? "Get Started" : "Choose Plan"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <OldPricing isToggle={isToggle} />
                )}

                {/* Modal (only once) */}
                <dialog id="payment_modal" className="modal">
                    <form onSubmit={handlePayment} className="modal-box bg-white">
                        <PaymentForm plan={selectedPlan} formData={formData} handleChange={handleChange} />
                        <div className="modal-action flex items-center space-x-2">
                            <form method="dialog">
                                <button onClick={handleRest} className="btn bg-[#46ba85]">Close</button>
                            </form>
                            <button type="submit" className="btn bg-blue-600 text-white">
                                Proceed to Payment
                            </button>
                        </div>
                    </form>
                </dialog>
            </section>
        </div>
    );
}
