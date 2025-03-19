import React from 'react'
import contact from '../../../assets/images/contact-us.jpg'

export const Main = () => {
  return (
    <div className="flex flex-col md:flex-row md:mt-32 items-center md:justify-between shadow-xl rounded-2xl overflow-hidden">
        <div className="flex-1 flex items-center justify-center">
            <div className="text-center md:text-left text-gray-800 p-8 max-w-xl">
                <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-2xl">
                Start the conversation to establish a good relationship and business.
                </p>
            </div>
        </div>
        <div className="flex-1 flex justify-center">
            <img
                src={contact}
                alt="Placeholder"
                className="max-w-full h-auto shadow-lg"
            />
        </div>
    </div>
  )
}
