import { Metadata } from "next";
import LoginPage from "../../../components/Authentication/Login/Login";

export const metadata: Metadata = {
    title: "Donate-box | Login",
};

const Login = () => {


    return (
        <div>
            <LoginPage />
        </div>
    );
};

export default Login;