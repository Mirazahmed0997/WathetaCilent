import apiConfig from '@/configs/api.config'
import { fetchDataAsServer } from '@/utils/axiosServer'
import PaymentForm from './components/PaymentForm'
import { CheckCircle2, Clock, DollarSign } from "lucide-react"

export default async function PaymentPage({ params }) {
    const { planId } = await params
    const plan = await fetchDataAsServer(apiConfig?.GET_PRICING_BY_ID + planId)

    if (!plan) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-700 text-lg">
                Something went wrong 😞
            </div>
        )
    }

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6">
            <div className="max-w-7xl mx-auto grid gap-10 items-start">
                {/* ===== Left Section: Plan Info ===== */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 space-y-6">
                    <div className="text-center space-y-2">
                        <h3 className="text-sm text-blue-600 font-semibold uppercase tracking-wide">Payment For</h3>
                        <h1 className="text-3xl font-bold text-gray-800">{plan?.name}</h1>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                            {plan?.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-6">
                        <div className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-green-500" />
                            <span className="font-semibold text-gray-700">
                                {plan?.priceRegularBDT}৳ / {plan?.priceRegularUSD}$
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-blue-500" />
                            <span className="text-gray-700 text-sm">
                                {plan?.duration} {plan?.durationType}
                            </span>
                        </div>
                    </div>

                    {/* ===== Feature List ===== */}
                    {plan?.featureGroups && (
                        <div className="mt-8">
                            <h4 className="text-gray-800 font-semibold text-lg mb-4 border-b pb-2">Features Included</h4>

                            {Object.entries(plan.featureGroups).map(([groupName, features]) => (
                                <div key={groupName} className="mb-6">
                                    <h5 className="font-medium text-gray-700 mb-3">{groupName}</h5>
                                    <ul className="space-y-2">
                                        {features.map((f) => (
                                            <li
                                                key={f.id}
                                                className="flex items-start gap-2 text-gray-600 text-sm bg-blue-50/40 px-3 py-2 rounded-lg"
                                            >
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                                <div>
                                                    <span className="font-medium">{f.name}</span>
                                                    <p className="text-gray-500 text-xs">{f.planDescription}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* ===== Right Section: Payment Form ===== */}
                <div className="lg:sticky top-10">
                    <PaymentForm plan={plan} />
                </div>
            </div>
        </div>
    )
}
