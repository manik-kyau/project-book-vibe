import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className=" min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-[#131313] mb-3">Oops!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div> 
                    <h1 className="text-center text base font-normal text-[#131313cc] WorkSans">Page Not Found</h1>
                    <p className="text-center text base font-normal text-[#131313cc] WorkSans">Go Back Where ou from</p>
                </div>

            }
        </div>
    );
};

export default ErrorPage;