import React from 'react';
import ScheduleIcon from '../../../assets/svg/schedule';
import PhoneIcon from '../../../assets/svg/phoneCall';
import Mail from '../../../assets/svg/email';
import LocationIcon from '../../../assets/svg/location';

export const Message = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
        <div className="flex-1 flex justify-center items-center  md:pt-8">
            <div className="flex-col space-y-4 bg-gray-50 px-12 py-16 rounded-lg shadow-lg">
                <h2 className="text-5xl font-semibold text-gray-800">Send us a message</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-whitek-500"
                        />
                        </div>
                        <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Enter your phone number"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-whitek-500"
                        />
                        </div>
                        <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-whitek-500"
                        />
                        </div>
                        <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Enter the subject"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-whitek-500"
                        />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Message
                        </label>
                        <textarea
                        id="message"
                        rows="5"
                        placeholder="Type your message here"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-whitek-500"
                        ></textarea>
                    </div>
                    <div className="mt-6">
                        <button
                        type="submit"
                        className="w-full  text-white py-3 rounded-md bg-whitek-600 hover:bg-whitek-900  focus:outline-none bg-yellow-300"
                        >
                        SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </div>
      <div className="flex-1 flex justify-center items-center shadow-xl rounded-2xl">
        <div className=" flex-col space-y-4 p-6  max-w-4xl">
            <h2 className="text-whitek-500 font-semibold">GET IN TOUCH</h2>
            <h1 className="text-5xl font-semibold text-gray-800">
                Feel free to reach out for additional property details and insights.
            </h1>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-2">
                    <LocationIcon fill="gray" className='w-10 h-10' />
                    <div>
                        <h3 className="font-semibold text-gray-800">ADDRESS</h3>
                        <p className="text-gray-600">
                            Jl. Cempaka Wangi No 22<br />Jakarta - Indonesia
                        </p>
                    </div>
                </div>
            <div className="flex items-center space-x-2">
                <Mail fill="gray" className='w-10 h-10' />
                <div>
                <h3 className="font-semibold text-gray-800">EMAIL SUPPORT</h3>
                <p className="text-gray-600">
                    hello@yourdomain.tld<br />support@yourdomain.tld
                </p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <PhoneIcon fill="gray" className='w-10 h-10' />
                <div>
                <h3 className="font-semibold text-gray-800">PHONE</h3>
                <p className="text-gray-600">
                    Phone: +6221.2002.2012<br />Fax: +6221.2002.2013
                </p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                 <ScheduleIcon fill="gray"  className='w-10 h-10' />
                <div>
                    <h3 className="font-semibold text-gray-800">OFFICE HOURS</h3>
                    <p className="text-gray-600">
                        Mon-Fri: 09am-07pm<br />Sat-Sun: Closed
                    </p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  );
};
