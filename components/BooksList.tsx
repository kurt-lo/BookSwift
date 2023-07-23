import React from 'react'
import BooksPage from './BooksPage'
import { BooksListProps } from '@/types';

const BooksList = ({ books }: BooksListProps) => {
  
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Books</th>
            <th>Author</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {books.map((book) => (
            <BooksPage key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BooksList