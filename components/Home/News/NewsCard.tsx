import Image from "next/image";

const NewsCard = ({ image }) => {
    return (
        <div className="card  mx-1.5  relative rounded-md group ">
            <figure className="h-[170px]">
                <Image src={image} alt="news" width={500} height={500} className="w-full h-full" />
            </figure>
            <div className="  card-body p-0">
                <div className=" h-[110px]" >
                    <div className=" text-lg my-2 absolute -bottom-[90px] group-hover:bottom-0 duration-500 bg-redis-text h-[230px] rounded-sm">
                        <div className="flex justify-center items-center  ">
                            <h4 className=" py-0.5 px-2 rounded-md absolute -top-3 bg-primary-red text-white-text text-base font-oswald">The Daily Star</h4>
                        </div>
                        <h2 className="font-bold text-base text-center mt-7 px-1 text-primary-text">Bangladesh Tea Board donate one-day salary to support flood victims. </h2>
                        <p className="text-redis-text group-hover:text-primary-text px-1 py-4 text-sm duration-300 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A hic ut alias ratione molestiae quas  eos impedit officia deserunt! <a className="underline text-primary-red" href="#">read more...</a> </p>
                    </div>
                </div>
                <p className="card-actions justify-center bg-primary-red  text-white-text text-xs p-0.5 z-10 rounded-b-md">01-jan-2024 </p>
            </div>
        </div>
    );
};

export default NewsCard;



