import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../Utility/localstorage";
import ReadBooksList from "../ReadBooksList/ReadBooksList";

const ReadBooks = () => {
    const books = useLoaderData();
    const [booksData, setBooksData] = useState([]);

    useEffect(()=>{
        const getStoredBooks = getStoredData();
        if(books.length > 0){
            const storedBooks = books.filter(book => getStoredBooks.includes(book.id));
            setBooksData(storedBooks);
        }
    },[])
    return (
        <div className="space-y-10 mb-12">
            {
                booksData.map((books,idx) => <ReadBooksList key ={idx} books = {books}></ReadBooksList>)
            }
        </div>
    );
};

export default ReadBooks;