
const LoginPageHeader = ({ header }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center mb-3 ">
            <h3 className="text-center font-semibold text-xl ">{header}</h3>
            <div className="w-20 h-1 bg-primary-red animate-rotate-y animate-once "></div>
        </div>
    );
};

export default LoginPageHeader;