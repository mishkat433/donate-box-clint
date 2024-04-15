import DotLoading from '../../components/ReusableComponent/DotLoading';


import Sidebar from '../../components/Dashboard/Sidebar';

const Layout = ({ children }) => {

    return (
        <section className="flex gap-8">

            <aside className="flex-[1] border-r-1 border-[#E2E3E4] h-[calc(100vh-105px)] ">
                <Sidebar />
            </aside>
            <div className="bg-gray-100 flex-[9] p-4 rounded min-h-[300px]">
                {children}
            </div>
            s
        </section>
    );
};

export default Layout;