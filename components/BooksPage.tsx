"use client";
import { BooksProps } from '@/types'
import React, { FormEvent, useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import Changes from './Changes';
import { deleteBooksApi, editBooksApi } from '@/api';
import { useRouter } from 'next/navigation';

const BooksPage = ({ book }: BooksProps) => {

  const router = useRouter();

  //para to sa form ng edit
  const [editBooksForm, setEditBooksForm] = useState(false);
  //para sa pag update ng title ng books
  const [editedTitle, setEditedTitle] = useState(book.title);
  //para sa pag update ng author ng books
  const [editedAuthor, setEditedAuthor] = useState(book.author);
  //pag delete ng book
  const [deleteBook, setDeleteBook] = useState(false);

  //PWEDE RIN GANITO SA ONCLICK THEN TATAWAGIN NA LANG YUNG HANDLE BOOKS NG GANITO onClick={handleEditBooks}
  // const handleEditBooks = () => {
  //   setOpenEditBooks(true)
  //   console.log('books page edit clicked')
  // }

  //FUNCTION FOR EDIT
  const handleSubmitEdit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await editBooksApi({
      edit: {
        id: book.id,
        title: editedTitle,
        author: editedAuthor,
      }
    })
    setEditBooksForm(false);

    router.refresh();
  }

  //FUNCTION FOR DELETE
  const setDeleteBookFunc = async (id: number) => {
    console.log('detele clicked')
    await deleteBooksApi(id);
    setDeleteBook(true);
    router.refresh();
  }
  //para makuha yung id
  // const setDeleteBookFuncId = async () => {
  //   await setDeleteBookFunc(book.id);
  //   console.log('Books Deleted')
  // }

  return (
    <tr className='bg-base-200' key={book.id}>
      <td>
        {book.title}
      </td>
      <td>
        {book.author}
      </td>
      <td className='flex cursor-pointer gap-2'>
        <BiEdit
          size={20}
          className='text-green-400 hover:text-green-600'
          onClick={() => setEditBooksForm(true)}
        />
        {/* FOR EDIT FORMS */}
        <Changes
          changesOpen={editBooksForm}
          setChangeOpen={setEditBooksForm}
        >
          <form onSubmit={handleSubmitEdit}>
            <div className='flex justify-center mb-7'>
              <h4 className='text-lg font-bold'>You can now edit the book</h4>
            </div>
            <div className='flex flex-col gap-2'>
              <input
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                type="text"
                className="input input-bordered w-full max-w-full text-sm"
                placeholder='Type the title book here'
              />
              <input
                value={editedAuthor}
                onChange={(e) => setEditedAuthor(e.target.value)}
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
        <MdDelete size={20} className='text-red-400 hover:text-red-600' 
          onClick={() => setDeleteBook(true)}
        />
        {/* FOR DELETION OF BOOKS*/}
        <Changes
          changesOpen={deleteBook}
          setChangeOpen={setDeleteBook}
        >
          <h3 className='font-bold text-lg text-center'>Do you really want to delete it?</h3>
          <div className='modal-action justify-center'>
            <button
              className='btn btn-primary w-4/5'
              onClick={() => setDeleteBookFunc(book.id)}
            >
              Yes
            </button>
          </div>
        </Changes>
      </td>
    </tr>
  )
}

export default BooksPage