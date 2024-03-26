import { useEffect, useState } from "react";
import Book from "../Book/Book";

const BooksList = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(response => response.json())
        .then( data => setBooks(data))
    },[])
    return (
        <div>
            <h1 className="text-[40px] font-bold text-center m">Books</h1>
            <div className="grid grid-cols-3 gap-6 mt-10">
                {
                    books.map((book,idx)=><Book key = {idx} book= {book}></Book>)
                }
            </div>

        </div>
    );
};

export default BooksList;