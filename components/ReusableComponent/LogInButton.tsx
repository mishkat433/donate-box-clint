import Link from "next/link";

const LogInButton = ({ header }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center mb-3  h-[20vh]">
            <p className="text-primary-red mb-2">Please log in for access this page</p>
            <Link href="/login" className="text-ms bg-primary-red rounded-md py-2 px-5 text-white-text ">Log in</Link>
        </div>
    );
};

export default LogInButton;