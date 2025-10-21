'use client'
import { useState } from "react";

export default function PaymentForm({ plan }) {
    if (!plan) return null; // safeguard if no plan selected

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

    const handlePayment = async (e) => {
        e.preventDefault();

        const submittedData = {
            ...formData,
            amount: selectedPlan?.amount,
            packageName: selectedPlan?.packageName,
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
            const response = await fetch(`https://payapi.watheta.com/api/postByDefaultAbandoned`, {
                // const response = await fetch(`http://localhost:5000/api/postByDefaultAbandoned`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submittedData),
            });

            if (response.ok) {
                // ✅ Close modal
                // document.getElementById("payment_modal").close();

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
        <form className="space-y-4 max-w-3xl w-full mx-auto">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Full Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Business Name
                </label>
                <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Enter your business name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Contact Number
                </label>
                <input
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                    required
                />
            </div>
        </form>
    );
}
