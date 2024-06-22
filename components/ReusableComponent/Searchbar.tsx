
interface setInput{
    searchInput: (value: string) => void;
    placeholderText?:string;
}

const SearchBar = ({ searchInput,placeholderText='Find donner by District, Name or phone...' }:setInput) => {
    return (
        <div className='w-auto mx-auto border-primary-text focus-within:border-primary-red border-opacity-35 rounded-md border-1 '>
            <div className="flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                    onChange={(e) => searchInput(e.target.value)}
                    className="peer h-full w-full outline-none text-sm text-gray-700 px-2"
                    type="text"
                    id="search"
                    placeholder={placeholderText} />

            </div>
        </div>
    );
};

export default SearchBar;