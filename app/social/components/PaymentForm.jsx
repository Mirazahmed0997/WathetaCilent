export default function PaymentForm({ plan, formData, handleChange }) {
    if (!plan) return null; // safeguard if no plan selected

    return (
        <div className="space-y-4">
            {/* Plan Info */}
            <div>
                <h3 className="text-xs text-center text-gray-800">Payment For</h3>
            <h3 className="font-bold text-2xl text-center text-gray-800">{plan?.name}</h3>
            </div>
            <div className="border-b text-gray-600 flex items-center justify-between">
                <p>
                    Price:{" "}
                    {plan?.amount}
                </p>
                <p>Duration: {plan?.duration}</p>
            </div>

            {/* Input Fields */}
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
        </div>
    );
}
