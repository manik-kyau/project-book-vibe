import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import PageToRead from "../Components/PageToRead/PageToRead";
import BookDetails from "../Components/BookDetails/BookDetails";
import ReadBooks from "../Components/ReadBooks/ReadBooks";
import WishlistBooks from "../Components/WishlistBooks/WishlistBooks";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/listedbooks',
          element: <ListedBooks></ListedBooks>,
          children:[
            {
              path: 'readbooks',
              element: <ReadBooks></ReadBooks>,
              loader:()=> fetch('/data.json'),
            },
            {
              path: 'wishlistbooks',
              element:<WishlistBooks></WishlistBooks>,
              loader:()=> fetch('/data.json'),
            }
          ]
        },
        {
          path: '/pagestoread',
          element: <PageToRead></PageToRead>
        },
        {
            path: '/bookcard/:id',
            element: <BookDetails></BookDetails>,
            loader: ()=> fetch('/data.json'),
        },
      ]
    },
  ]);

  export default router;