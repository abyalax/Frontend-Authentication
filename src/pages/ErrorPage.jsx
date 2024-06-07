import { useRouteError } from "react-router-dom";
const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className=" text-6xl font-bold">Oops!</h1>
            <p className="my-5 text-3xl">Sorry, an unexpected error has occurred</p>
            <p className="text-red-500 text-3xl">{error.statusText || error.message}</p>
        </div>
    )
}
export default ErrorPage