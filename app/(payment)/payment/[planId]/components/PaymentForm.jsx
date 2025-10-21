'use client'
import { useState } from "react";
import { Mail, Phone, User, Building2, CreditCard } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export default function PaymentForm({ plan }) {
    if (!plan) return null;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        businessName: "",
        number: "",
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
        });
    };

    const handlePayment = async (e) => {
        e.preventDefault();

        const submittedData = {
            ...formData,
            amount: plan?.priceRegularBDT,
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
        };

        try {
            const response = await fetch(`https://payapi.watheta.com/api/postByDefaultAbandoned`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submittedData),
            });

            if (response.ok) {
                handleReset();
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
                            placeholder="John Doe"
                            required
                            className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
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
                            placeholder="My Company Ltd."
                            required
                            className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        />
                    </div>
                </div>

                {/* Contact Number */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <input
                            type="tel"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder="+8801XXXXXXXXX"
                            required
                            className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        />
                    </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            required
                            className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        />
                    </div>
                </div>
            </div>

            {/* Summary */}
            <div className="bg-blue-50 rounded-xl p-4 flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-600">You are about to pay:</p>
                    <h3 className="text-xl font-bold text-blue-600">
                        {plan?.priceRegularBDT}৳ / {plan?.priceRegularUSD}$
                    </h3>
                </div>
                <CreditCard className="h-8 w-8 text-blue-500" />
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
                    Proceed to Payment
                </button>
            </div>
        </form>
    );
}
