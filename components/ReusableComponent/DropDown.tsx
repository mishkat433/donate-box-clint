import { RiArrowDownSFill } from "react-icons/ri";

 type dropdownType={
    buttons:any,
    mainBtnName:string,
    defaultValue?:string | boolean | number,
    height?:string,
    width?:string,
    others?:any,
    customStyle?:string,
    parentStyle?:string,
 }

const DropDown = ({buttons,mainBtnName,defaultValue, others,parentStyle, customStyle, height="58px"}:dropdownType) => {

    return (
        <div className=" text-sm relative group text-white-text ">
            <button className={`flex items-center ${parentStyle} p-1 rounded-md`} >{mainBtnName} <RiArrowDownSFill className="text-xl text-redis-text" /><span>{others}</span></button>
            <div className={`flex flex-col gap-[2px] text-primary-text absolute bg-redis-text ${customStyle?customStyle:"w-full"} rounded-md overflow-hidden duration-300 z-[1] h-0 group-hover:h-[${height}]  `}>                
                {buttons?.map((but:any,i:number)=> <button key={i} onClick={()=>but?.setter(but?.name)} className={`hover:bg-primary-red hover:text-white-text duration-300 p-1 ${defaultValue===but?.name && "text-primary-red"}`}>{but?.name}</button>)}
            </div>
        </div>
    );
};

export default DropDown;