"use client"

import DonateGetCard from "./DonateGetCard"
import { useDonnerQuery } from "../../../redux/api/donnerApi";
import { useState } from "react";
import { useDebounced } from "../../../redux/hooks";
import SkeletonLoading from "../../ReusableComponent/SkeletonLoading";
import SearchBar from "../../ReusableComponent/Searchbar";


const DonateOrGet = () => {
    const query: Record<string, any> = {};


    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(100);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("asc");
    const [searchTerm, setSearchTerm] = useState<string>("");

    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;

    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });

    if (!!debouncedTerm) {
        query["searchTerm"] = debouncedTerm;
    }

    const { data, isLoading, isError, error }: any = useDonnerQuery({ ...query })

    const groupedData = [];

    data?.donner?.data?.forEach(record => {
        const division = record.division;
        let divisionGroup = groupedData.find(group => group.division === division) ;


        if (!divisionGroup) {
            divisionGroup = { division: division, donner: [] };
            groupedData.push(divisionGroup);
        }
        divisionGroup.donner?.push(record);
    });
 
    return (
        <section className="py-10 bg-color-bg2 bg-no-repeat bg-cover ">
            <div className="  py-5  bg-no-repeat bg-center bg-cover ">
                <div className="container mx-auto ">
                    <h1 className="text-center text-xl md:text2xl lg:text-4xl font-oswald text-primary-red font-bold mb-5">Find a Blood Donner In Your District</h1>
                   <div className="mb-3 md:mb-5 w-full lg:w-3/5 mx-auto px-1">
                        <SearchBar searchInput={setSearchTerm} />
                   </div>
                    <div>
                        {isLoading &&
                            <div className="flex justify-between items-center gap-2 ">
                                {[...Array(5)].map((sk, i) => <div key={i} className="bg-[#f8cfa0] rounded-md" > <SkeletonLoading /></div>)}
                            </div>}
                        {isError && <div className="">{error?.message}</div>}
                        {groupedData.length === 0 && !isLoading && <p className="text-center text-lg text-primary-red">Donner not found</p>}
                        {groupedData?.map((el, i) =>
                            <div className=" border-error-color rounded my-3 p-1 " key={i}>
                                <div key={i} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 justify-center items-center">
                                    <div className="col-span-1 flex justify-center items-center">
                                        <strong className="text-xl font-mono uppercase bg-primary-red md:bg-transparent w-full text-center text-white-text md:text-primary-text">{el?.division}</strong>
                                    </div>
                                    <div className={`md:col-span-2 lg:col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-3 `}>
                                        {el?.donner?.map((dr:any, i:number) => (!dr?.isBanned&& <DonateGetCard key={i} donner={dr} />))}
                                    </div>
                                </div>
                                {/* <div className="flex justify-center items-center w-full py-4"><button className="text-center border-1 p-1 rounded-md">See more</button></div> */}
                                <hr className="my-2 opacity-20" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default DonateOrGet;