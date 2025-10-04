import React from 'react'

export default function AdvanceFeature() {
    return (
        <section className="w-full max-w-[70vw] mx-auto px-4 py-12 grid grid-cols-3 gap-6 items-center">
            <div className='w-full h-full p-4 rounded-2xl bg-purple-100'>
                <article className='space-y-2'>
                    <h3 className='text-2xl font-bold'>Multiple Human Live Chat</h3>
                    <p className='text-sm text-gray-600'>Have multiple team members to drive Live Chat Support on the Same WhatsApp Business Number.</p>
                    <p className='text-sm text-gray-600'>Filter Chats according to tags, campaigns and attributes for Smart Agent Chat Routing.</p>
                </article>
                <aside className="w-full h-full flex justify-center items-center">
                    <div className="w-full">
                        <video
                            className="aspect-video"
                            src="/images/Boardsvideo.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-label="Demo video"
                        />
                    </div>
                </aside>
            </div>

            <div className='w-full h-[60dvh] p-4 rounded-2xl bg-indigo-100 col-span-2'>
                <article className='space-y-2'>
                    <h3 className='text-2xl font-bold'>Multiple Human Live Chat</h3>
                    <p className='text-sm text-gray-600'>Have multiple team members to drive Live Chat Support on the Same WhatsApp Business Number.</p>
                    <p className='text-sm text-gray-600'>Filter Chats according to tags, campaigns and attributes for Smart Agent Chat Routing.</p>
                </article>
                <aside className="w-full h-full flex justify-center items-center">
                    <div className="w-full">
                        <video
                            className="aspect-video"
                            src="/images/Boardsvideo.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-label="Demo video"
                        />
                    </div>
                </aside>
            </div>

        </section>
    )
}
