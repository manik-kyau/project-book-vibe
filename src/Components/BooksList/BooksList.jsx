import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const BooksList = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(response => response.json())
        .then( data => setBooks(data))
    },[])
    return (
        <div className="my-12">
            <h1 className="text-[40px] font-bold text-center playfair">Books</h1>
            <div className="grid lg:grid-cols-3 gap-6 mt-10">
                {
                    books.map((book,idx)=><BookCard key = {idx} book= {book}></BookCard>)
                }
            </div>

        </div>
    );
};

export default BooksList;