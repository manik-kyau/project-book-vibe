import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../Utility/localstorage";

const WishlistBooks = () => {
    const books = useLoaderData();
    // console.log(books)
    const [booksData, setBooksData] = useState([]);

    useEffect(()=>{
        const getStoredBooks = getStoredData();
        if(books.length > 0){
            const storedBooks = books.filter(book => getStoredBooks.includes(book.id));
            setBooksData(storedBooks);
            console.log(storedBooks,books,getStoredBooks);
        }
    },[])
    return (
        <div>
            
        </div>
    );
};

export default WishlistBooks;