
import Footer from "../../components/Common/Footer/Footer";
import Header from "../../components/Common/Header/Header";

export default function HomeLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
