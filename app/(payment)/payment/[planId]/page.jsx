import apiConfig from '@/configs/api.config'
import { fetchDataAsServer } from '@/utils/axiosServer'
import PaymentForm from './components/PaymentForm'

export default async function PaymentPage({ params }) {
    const { planId } = await params
    const plan = await fetchDataAsServer(apiConfig?.GET_PRICING_BY_ID + planId)
    if (!plan) {
        return (
            <div>
                Something went wrong
            </div>
        )
    }
    return (
        <div className='w-full min-h-screen space-y-10 p-10'>
            {/* {plan && JSON.stringify(plan, null, 2)} */}

            <div className='text-center'>
                <h3 className="text-xs text-gray-800">Payment For</h3>
                <h3 className="font-bold text-2xl text-center text-gray-800">{plan?.name}</h3>
                <p className='max-w-xl mx-auto text-xs'>{plan?.description}</p>
            </div>
            <div className="max-w-7xl mx-auto space-y-10 flex flex-col border-b text-gray-600">
                <div className='flex items-center justify-between'>
                    <p>
                        Price:{" "}
                        {plan?.priceRegularBDT}৳ / {plan?.priceRegularUSD}$
                    </p>
                    <p>Duration: {plan?.duration} {plan?.durationType}</p>
                </div>
                <PaymentForm plan={plan} />
            </div>
        </div>
    )
}
