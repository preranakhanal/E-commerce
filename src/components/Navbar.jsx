import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className= 'bg-white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 py-4 flex justify-between items-center'>
            <div className='text-lg font-bold'>
                <Link to="/">e-SHOP</Link>
            </div>
            <div className='relative flex-1 mx-4'>
                <form>
                    <input type="text" placeholder="Search Product" className='w-full border py-2 px-4' />
                    <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                </form>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to="/cart">
                     <FaShoppingCart className='text-lg'/>
                </Link>
                <button className='block md:hideen px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
                    Login | Register
                </button>
                <button>
                    <FaUser />
                </button>
               
            </div>
        </div>
        <div className='flex items-center justify-center space-x-10 text-sm font-bold py-4'>
            <Link to = "/" className='hover:underline'>
            Home
            </Link>
            <Link to = "/shop" className='hover:underline'>
            Shop
            </Link>
            <Link to = "/" className='hover:underline'>
            Contact
            </Link>
            <Link to = "/" className='hover:underline'>
            Product
            </Link>
        </div>
        
    </nav>
  )
}

export default Navbar