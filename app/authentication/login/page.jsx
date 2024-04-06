// import Logo from "../../components/ReusableComponent/Logo.tsx";
import Login from '../../../components/Authentication/Login';

const page = () => {
    return (
        <div>
            {/* <div className="flex justify-center mt-3">
                <Logo donate={'text-primary-red'} box={'text-primary-text'} />
            </div> */}
            <h4 className="text-center text-2xl mt-4 font-bold">Sign in your account</h4>

            <div className="bg-primary-red w-4/12 m-8 rounded-lg hover:-rotate-6 duration-300 mx-auto ">
                <div className="bg-white-text w-full m-8 rounded-md p-2 hover:rotate-6 duration-300 mx-auto drop-shadow-md flex justify-center items-center py-4">
                    <Login />
                </div>
            </div>

        </div>
    );
};

export default page;