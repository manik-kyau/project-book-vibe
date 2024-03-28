import { toast } from "react-toastify";
// Local Storage for read books
const getStoredData = () =>{
    const storedData = localStorage.getItem('books');
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}

const saveDataToLS = (id) =>{
    const storedBooks = getStoredData();
    const isExist = storedBooks.find(data => data == id)
    if(!isExist){
        storedBooks.push(id);
        localStorage.setItem('books',JSON.stringify(storedBooks));
        toast.success('Book Added to Readlist Successfully');

        return storedBooks;
    }
    else{
        toast.error('You Have Already Read This Book');
    }
}

// Local storage for Wish Books
const getStoredWishBooks = () =>{
    
    const storedWishBook = localStorage.getItem('wish-book');
    if(storedWishBook){
        return JSON.parse(storedWishBook);
    }
    return [];
}

const savedWishBook = (id) =>{
    const booksData = getStoredWishBooks();
    const isExist = booksData.find(bookData => bookData == id);
    if(!isExist){
        booksData.push(id);
        localStorage.setItem('wish-book',JSON.stringify(booksData));
        toast.success('Book Added to WishList Successfully');
    }
    else{
        toast.error('You Have Already WishList This Book');
    }
}

export { getStoredData,saveDataToLS,getStoredWishBooks,savedWishBook };