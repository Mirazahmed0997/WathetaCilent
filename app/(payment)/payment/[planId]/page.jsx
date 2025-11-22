import apiConfig from '@/configs/api.config'
import { fetchDataAsServer } from '@/utils/axiosServer'
import PaymentForm from './components/PaymentForm'
import { CheckCircle2, Clock, DollarSign, TicketPercent } from "lucide-react"

export default async function PaymentPage({ params }) {
    const { planId } = await params
    const plan = await fetchDataAsServer(apiConfig?.GET_PRICING_BY_ID + planId)
    const addonsRes = await fetchDataAsServer(apiConfig?.GET_ADDONS);
    const addons = Array.isArray(addonsRes?.data) ? addonsRes.data : (Array.isArray(addonsRes) ? addonsRes : []);

    const couponRes = await fetchDataAsServer(apiConfig?.GET_COUPON_LIST);
    const coupons = Array.isArray(couponRes?.data) ? couponRes.data : (Array.isArray(couponRes) ? couponRes : []);

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
                            <TicketPercent className="h-5 w-5 text-green-500" />
                            <span className="font-semibold text-gray-700">
                                {plan?.priceOfferBDT || plan?.priceRegularBDT}৳ / {plan?.priceOfferUSD || plan?.priceRegularUSD}$
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-blue-500" />
                            <span className="text-gray-700 text-sm">
                                {plan?.duration} {plan?.durationType}
                            </span>
                        </div>
                    </div>
                </div>

                {/* ===== Right Section: Payment Form ===== */}
                <div className="lg:sticky top-10">
                    <PaymentForm plan={plan} addons={addons} coupons={coupons} />
                </div>
            </div>
        </div>
    )
}
