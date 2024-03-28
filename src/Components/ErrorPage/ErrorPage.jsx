import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-4 lg:mb-8 font-extrabold text-6xl lg:text-9xl dark:text-gray-400">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to='/' className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 bg-[#23BE0A] text-white text-lg">Back to homepage</Link>
                </div>
            </div>
        </section>
        // <div className=" min-h-screen flex flex-col justify-center items-center">
        //     <h1 className="text-4xl font-bold text-[#131313] mb-3">Oops!</h1>
        //     <p>{error.statusText || error.message}</p>
        //     <div className="mb-4">
        //         {
        //             error.status === 404 && <div> 
        //                 <h1 className="text-center text base font-normal text-[#131313cc] WorkSans">Page Not Found</h1>
        //                 <p className="text-center text base font-normal text-[#131313cc] WorkSans">Go Back Where ou from</p>
        //             </div>

        //         }
        //     </div>
        //     <Link to='/'><button className="btn bg-[#23BE0A] text-base text-white"> Go Back</button></Link>
        // </div>
    );
};

export default ErrorPage;