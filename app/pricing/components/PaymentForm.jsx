import React from 'react'

export default function PaymentForm({ plan }) {
    return (
        <form>
            <h3 className="font-bold text-lg">{plan?.name}</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
        </form>
    )
}
