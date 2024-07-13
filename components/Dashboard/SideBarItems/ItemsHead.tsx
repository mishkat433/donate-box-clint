import { RiArrowDownSFill } from "react-icons/ri";

const ItemsHead = ({header="not set"}:{header:string}) => {
    return (
        <>
             <span className="nav-text ml-5 capitalize">{header}</span>
             <RiArrowDownSFill className="text-xl  group-hover:rotate-180 duration-300" />
        </>
    );
};

export default ItemsHead;