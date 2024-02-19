import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const Bookmodal = ({book,onClose}) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
    onclick={onClose} >
      <div
        onClick={(event)=>event.stopPropagation()}
        className='w-[600px] max-w-full h-[-400px] bg-white rounded-xl p-4 flex flex-col relative'>
            <AiOutlineClose
            className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
            onClick={onClose}/>
            <h2 className='w-fit right-1 px-4 py-1 bg-red-300 rounded-lg'>
                {book.publishYear}
            </h2>
            <h4 className='my-2 text-gray-700'>
        
               {book._id}
            </h4>
            <div className='flex justify-start items-center gap-x-2'>
            <PiBookOpenTextLight className='text-red-300 text-2xl'/>
            <h2 className='my-1'>{book.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
            <BiUserCircle className='text-red-300 text-2xl'/>
            <h2 className='my-1'>{book.author}</h2>
            </div>
         <p className='mt-4'>Description</p>   
         <p className='my-2'>
         The Book Store Management System is an advanced platform designed to revolutionize the way book stores operate. With a user-friendly interface, it caters to both customers and administrators, facilitating smooth interactions and efficient book-related processes. Customers can easily navigate an extensive catalog, searching for their favorite books by title, author, genre, and more. The system ensures a secure and seamless shopping experience, allowing users to add, manage, and track their selected books through a convenient shopping cart. Administrators benefit from a robust dashboard that simplifies the management of books, orders, and customer accounts. Real-time inventory tracking ensures accurate stock information, while order processing and tracking provide customers with a transparent view of their purchases.
         </p>

      </div>
        </div>
  )
}

export default Bookmodal