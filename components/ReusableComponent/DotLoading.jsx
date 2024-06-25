
const DotLoading = ({ size = "md", text = "white-text", height = "h-[10vh]" }) => {
    return (
        // flex items-center gap-1.5 capitalize
        <div className={`flex justify-center items-center ${height}`}>
            <span ></span>
            <span className={`loading loading-infinity loading-lg text-${text} loading-${size} `}></span>
        </div>
    );
};

export default DotLoading;