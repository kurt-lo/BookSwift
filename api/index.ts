import { BookTypes } from "@/types";

const url = 'http://localhost:3001';

//get books
export const getAll =async () => {
    const response = await fetch(`${url}/books`, { cache: 'no-store' })
    const booksList = await response.json();

    return booksList;
}

//add books
export const addBooksApi = async (addBooks: BookTypes): Promise<BookTypes> => {
    const response = await fetch(`${url}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addBooks)
    })
    const newAddedBooks = await response.json();

    return newAddedBooks;
}

// Assuming 'BookTypes' is defined elsewhere as a type representing the book data structure.
export const editBooksApi = async ({ edit }: { edit: BookTypes }): Promise<BookTypes> => {
    const { id, ...editedBooks } = edit;
    const response = await fetch(`${url}/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedBooks),
    });
  
    const edited = await response.json(); // Note the addition of 'await' here.
  
    return edited;
  };

//NAGANA RIN TO
//edit books
// export const editBooksApi = async (edit: BookTypes): Promise<BookTypes> => {
//     const { id, ...editedBooks } = edit;
//     const response = await fetch(`${url}/books/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedBooks),
//     });
    
//     const edited = response.json();

//     return edited;
// }

export const deleteBooksApi = async (id: number): Promise<void> => {
  await fetch(`${url}/books/${id}`, {
    method: 'DELETE',
  })
}





  