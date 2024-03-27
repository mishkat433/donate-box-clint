// "use client"

import donateOrGetData from "../../../Data/DonateOrGet/DonateOrGet"
import DonateGetCard from "./DonateGetCard"


const DonateOrGet = () => {

    return (
        <div className="py-10">
            <div className="  py-5  bg-no-repeat bg-center bg-cover ">
                <div className="container mx-auto ">
                    <h1 className="text-center text-4xl font-oswald text-primary-red font-bold mb-10 ">Donate or Get Blood</h1>
                    <div>
                        {donateOrGetData?.map((el, i) =>
                            <div className=" border-1 border-error-color rounded my-2" key={i}>
                                <div key={i} className="grid grid-cols-5 gap-3 justify-center items-center">
                                    <div className="col-span-1 flex justify-center items-center">
                                        <strong className="text-xl font-mono uppercase">{el.location}</strong>
                                    </div>
                                    <div className={`col-span-4 grid grid-cols-3 gap-3`}>
                                        {el?.donner?.map((dr, i) => <DonateGetCard key={i} donner={dr} />)}
                                    </div>
                                </div>
                                {/* <hr className="my-2" /> */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DonateOrGet;