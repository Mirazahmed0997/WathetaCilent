'use client'
import React from 'react'
import { Rocket } from 'lucide-react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PaymentForm from './PaymentForm';
import PricePlanCard from './PricePlanCard';

export default function Start({ data }) {
    const selectedPlan = {
        name: "Social Package",
        amount: 5000,
        packageName: "Social Package",
        duration: "1 Month",
    }

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

    const openPaymentForm = () => {
        document.getElementById('payment_modal').showModal();
    };

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
        <section id='start' className="scroll-mt-40 my-10 ">

            <div className="relative flex flex-col items-center px-6">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                    Automate your business now
                </h2>

                <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {data && data?.map((plan) => (
                        <PricePlanCard key={plan.id} plan={plan} />
                    ))}
                </div>
                {/* <button onClick={() => openPaymentForm()} className="px-8 py-3 flex items-center space-x-2 cursor-pointer bg-white text-blue-600 font-semibold rounded-full shadow-md hover:tracking-widest transition-all duration-200 hover:bg-blue-50 hover:shadow-lg">
                    <Rocket />
                    <span>Start</span>
                </button> */}
            </div>
            {/* Modal (only once) */}
            <dialog id="payment_modal" className="modal">
                <form onSubmit={handlePayment} className="modal-box bg-white">
                    <PaymentForm plan={selectedPlan} formData={formData} handleChange={handleChange} />
                    <div className="modal-action flex items-center space-x-2">
                        <form method="dialog">
                            <button onClick={handleRest} className="btn border-0 bg-[#ba4646] hover:bg-[#c05f5f] rounded-full">Close</button>
                        </form>
                        <button type="submit" className="btn border-0 bg-[#46ba85] hover:bg-[#6ccea2] rounded-full">
                            Proceed to Payment
                        </button>
                    </div>
                </form>
            </dialog>
        </section>
    )
}
