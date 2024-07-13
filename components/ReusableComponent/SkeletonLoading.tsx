
const SkeletonLoading = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-52 border-1 border-[#E5E6E6] rounded-md p-2">
            <div className="skeleton h-20  rounded-full w-20"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    );
};

export default SkeletonLoading;