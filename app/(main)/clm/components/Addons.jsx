import CONSTANT from '@/configs/constant.config'
import React from 'react'

export default function Addons({ addons }) {
    const list = Array.isArray(addons?.data) ? addons.data : (Array.isArray(addons) ? addons : []);
    return (
        <section className="additionalbg py-16">
            <div className="mx-5 lg:mx-28 xl:mx-36 md:mx-16">
                {/* headline */}
                <div className="text-center">
                    <h1 className="additonalText text-center">Additional Services</h1>
                    <p className="additonalPera pt-1">
                        Customize your plan with these add-ons
                    </p>
                </div>
                {/* card  */}
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 lg:gap-8 xl:gap-8 pt-10">
                    {list.map(addon => (<AddonsCard key={addon?.id} addon={addon} />))}
                </div>
            </div>
        </section>
    )
}


function AddonsCard({addon}) {
    return (
        <div className="cardBgColor py-5 px-6 border rounded-lg">
            {/* icon */}
            <div className="additonalCardIconDiv pt-2">
                <img
                    className="additonalCardIcon"
                    src={CONSTANT?.API_URL + addon?.icon}
                    alt=""
                />
            </div>
            <div className="py-4">
                <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                    {addon?.title}
                </h1>
                <p className="aditionlCardPera pt-1">
                    {addon?.description}
                </p>
                <p className="pt-2 aditionalPrice">
                    ${addon?.price} <span className="aditonalpermaoth">/{addon?.billingCycle}</span>
                </p>
            </div>
        </div>
    )
}