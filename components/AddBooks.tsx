"use client";
import React, { FormEvent, useEffect, useState } from 'react'
import Changes from './Changes';
import { addBooksApi } from '@/api';
import { useRouter } from 'next/navigation';

const AddBooks = () => {

  const router = useRouter();

  //state that open the modal for adding books
  const [addBooks, setAddBooks] = useState(false);
  const [inputAddBook, setInputAddBook] = useState('');
  const [inputAddAuthor, setInputAddAuthor] = useState('');

  const generateRandomId = () => {
    // Generate a random integer ID between 1 and 100000 (adjust the range as needed)
    return Math.floor(Math.random() * 100000) + 1;
  };

  const addNewBookFunc = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Generate a random ID for the new book
    const newBookId = generateRandomId();

    await addBooksApi({
      id: newBookId,
      title: inputAddBook,
      author: inputAddAuthor,
    })

    setInputAddBook('');
    setInputAddAuthor('');
    setAddBooks(false);
    router.refresh();
  }

  return (
    <div className='mt-10'>
      <button
        className='btn btn-primary'
        onClick={() => setAddBooks(true)} // pag clinick tong button mag oopen yung changecomponent
      >
        <span className='text-xs'>Add Book</span>
      </button>

      <Changes
        changesOpen={addBooks}
        setChangeOpen={setAddBooks}
      >
        <form onSubmit={addNewBookFunc}>
          <div className='flex justify-center mb-7'>
            <h4 className='text-lg font-bold'>You can type to add some book</h4>
          </div>
          <div className='flex flex-col gap-2'>
            <input
              value={inputAddBook}
              onChange={(e) => setInputAddBook(e.target.value)}
              type="text"
              className="input input-bordered w-full max-w-full text-sm"
              placeholder='Type the title book here'
            />
            <input
              value={inputAddAuthor}
              onChange={(e) => setInputAddAuthor(e.target.value)}
              type="text"
              className="input input-bordered w-full max-w-full text-sm"
              placeholder='Type the author of the book here'
            />
            <button
              type='submit'
              className='btn btn-primary text-xs px-12'
            >
              Add
            </button>
          </div>
        </form>
      </Changes>
    </div>
  )
}

export default AddBooks