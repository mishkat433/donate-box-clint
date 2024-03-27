import Logo from "../../ReusableComponent/Logo";
import SocialMedia from "../../ReusableComponent/SocialMedia";
import FooterProduct from "../../../Data/Footer/FooterProduct.json";
import FooterCompany from "../../../Data/Footer/FooterCompany.json";
import FooterDevelopers from "../../../Data/Footer/FooterDevelopers.json";

const Footer = () => {
    return (
        <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100 bg-primary-red text-white-text font-mulish">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <Logo donate={'text-white-text'} box={'text-primary-text'} />
                    <p className="text-md w-full lg:w-4/5 mt-2.5 font-sunrise ">Volunteer opportunities include supporting blood donations and delivering much-needed services to your community.</p>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50 font-bold">Product</h3>
                        <ul className="space-y-1">
                            {FooterProduct.map((pr, index) => (<li key={index}> <a rel="noopener noreferrer" href="#">{pr}</a> </li>))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50 font-bold">Company</h3>
                        <ul className="space-y-1">
                            {FooterCompany.map((co, index) => (<li key={index}> <a rel="noopener noreferrer" href="#">{co}</a> </li>))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-50 font-bold">Developers </h3>
                        <ul className="space-y-1">
                            {FooterDevelopers.map((dev, index) => (<li key={index}> <a rel="noopener noreferrer" href="#">{dev}</a> </li>))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-50 font-bold">Social media</div>
                        <div className="text-lg flex items-center gap-2.5">
                            <SocialMedia></SocialMedia>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-400">Copyright &copy; All rights reserved by Mishkat - {new Date().getFullYear()}</div>
        </footer >
    );
};

export default Footer;