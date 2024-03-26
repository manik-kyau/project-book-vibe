import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import PageToRead from "../Components/PageToRead/PageToRead";
import BookDetails from "../Components/BookDetails/BookDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/listedbooks',
          element: <ListedBooks></ListedBooks>
        },
        {
          path: '/pagestoread',
          element: <PageToRead></PageToRead>
        },
        {
            path: '/bookcard/:id',
            element: <BookDetails></BookDetails>,
            loader: ()=> fetch('../data.json'),
        }
      ]
    },
  ]);

  export default router;