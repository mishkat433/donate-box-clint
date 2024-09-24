
import { Metadata } from 'next';
import DonateNowMain from './../../../components/DonateNow/DonateNowMain';

export const metadata: Metadata = {
    title: "Donate-box | Donate",
    description: "Donate to the cause you care about",
};

const page = () => {
    return (
        <section className="font-mulish">
            <DonateNowMain />
        </section>
    );
};

export default page;