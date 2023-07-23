export interface BookTypes {
    id: number;
    title: string;
    author: string;
}

export interface BooksListProps {
     books: BookTypes[];

    // books: {
    //     id: number,
    //     title: string,
    //     author: string,
    // }[];

    // ANY OF THE TWO WILL DO
}

export interface BooksProps {
    book: BookTypes;
    setOpenBooks?: (isOpen: boolean) => void;
    // book: {
    //     id: number;
    //     title: string;
    //     author: string;
    // }    

    // ANY OF THE TWO WILL DO
}

export interface ChangesProps {
    changesOpen: boolean;
    setChangeOpen: (isOpen: boolean) => void;
    children: React.ReactNode;
}