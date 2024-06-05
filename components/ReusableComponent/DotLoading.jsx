
const DotLoading = ({ size = "md", text = "white-text", height = "5" }) => {
    return (
        // flex items-center gap-1.5 capitalize
        <div className={`flex justify-center items-center h-${height}`}>
            {/* <p>Loading</p> */}
            <span className={`loading loading-dots text-${text} loading-${size} `}></span>
        </div>
    );
};

export default DotLoading;