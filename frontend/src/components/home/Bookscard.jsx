import React from 'react';
import BooksSingleCard from './BooksSingleCard';

const Bookscard = ({books}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
     {books.map((item) =>(
     <BooksSingleCard key={item.id} book={item} />       
     ))}
    </div>

  )
}

export default Bookscard