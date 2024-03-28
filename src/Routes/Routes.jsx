import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import PageToRead from "../Components/PageToRead/PageToRead";
import BookDetails from "../Components/BookDetails/BookDetails";
import ReadBooks from "../Components/ReadBooks/ReadBooks";
import WishlistBooks from "../Components/WishlistBooks/WishlistBooks";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Contact from "../Components/Contact/Contact";
import Faq from "../Components/FAQ/Faq";

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
              index: true,
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
          element: <PageToRead></PageToRead>,
          loader:()=> fetch('/data.json'),
        },
        {
            path: '/bookcard/:id',
            element: <BookDetails></BookDetails>,
            loader: ()=> fetch('/data.json'),
        },
        {
          path: '/faq',
          element: <Faq></Faq>,
        },
        {
          path: '/contact-us',
          element:<Contact></Contact>
        }
      ]
    },
  ]);

  export default router;