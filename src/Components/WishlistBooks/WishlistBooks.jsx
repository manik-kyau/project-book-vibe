import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishBooks } from "../../Utility/localstorage";
import WishingBookList from "../WishingBookList/WishingBookList";

const WishlistBooks = () => {
    const books = useLoaderData();
    const [booksData, setBooksData] = useState([]);

    useEffect(()=>{
        const getStoredBooks = getStoredWishBooks();
        if(books.length > 0 ){
            const clickedBook = [];
            for(const id of getStoredBooks){
                const wishBook = books.find(book => book.id == id);
                if(wishBook){
                    clickedBook.push(wishBook);
                }
                setBooksData(clickedBook);
            }
        }
    },[])
    return (
        <div className="space-y-10 mb-12">
            {
                booksData.map((book,idx)=><WishingBookList key={idx} book={book}></WishingBookList>)
            }
        </div>
    );
};

export default WishlistBooks;