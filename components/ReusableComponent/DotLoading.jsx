
const DotLoading = ({ size = "md", text = "white-text" }) => {
    return (
        // flex items-center gap-1.5 capitalize
        <div className=''>
            {/* <p>Loading</p> */}
            <span className={`loading loading-dots text-${text} loading-${size} -mb-1`}></span>
        </div>
    );
};

export default DotLoading;