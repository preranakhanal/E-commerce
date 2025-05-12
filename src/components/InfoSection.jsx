
import React from 'react'
import { FaLock, FaShippingFast } from 'react-icons/fa'
import { FaMoneyBillWave } from 'react-icons/fa6'
import { FaHeadset } from 'react-icons/fa6'
import { FaTag } from 'react-icons/fa6'

const InfoSection = () => {
    const infoItems = [
        { icon: <FaShippingFast className='text-3xl text-red-600' />,
          title: 'Free Shipping', 
          description: 'Get your oders deliverd with no extra cost',
        },
        { icon: <FaHeadset className='text-3xl text-red-600' />,
          title: 'Support 24/7', 
          description: 'We are here to help you 24/7',
        },
        { icon: <FaMoneyBillWave className='text-3xl text-red-600' />,
          title: '100% Money Back',
          description: 'We will refund you if you are not satisfied', 
        },
        { icon: <FaLock className='text-3xl text-red-600' />,
          title: 'Payment Secure', 
            description: 'Your payment is secure with us',
        },
        {
        icon: <FaTag className='text-3xl text-red-600' />,
        title: 'Discount', 
        description: 'Get the best deals and discounts',
        },
    ];
  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-2 lg:grid-cols-5 gap-4'>
            {infoItems.map((item, index) => (
                <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transition-transform transform duration-300 hover:scale-105 cursor-pointer'>
                    {item.icon}
                    <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                    <p className='mt-2 text-gray-600'>{item.description}</p>

                </div>
            ))}
        </div>
    </div>
       
  )
}

export default InfoSection