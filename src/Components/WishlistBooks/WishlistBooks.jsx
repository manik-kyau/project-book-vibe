import { useLoaderData } from "react-router-dom";

const WishlistBooks = () => {
    const books = useLoaderData();
    console.log(books)
    return (
        <div>
            Wishlist Books
        </div>
    );
};

export default WishlistBooks;