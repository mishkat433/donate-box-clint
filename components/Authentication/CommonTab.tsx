
interface handler {
    loginManage: boolean;
    setLoginManage: (value: boolean) => void;
    button1: string;
    button2: string;
}

const CommonTab = ({ loginManage, setLoginManage, button1, button2 }: handler) => {
    return (
        <div className="w-full relative  flex justify-evenly items-center rounded-md text-white-text overflow-hidden">
            <div className="w-full h-8 bg-secondary-text absolute  -z-10"></div>
            <button onClick={() => setLoginManage(true)} className={`w-1/2  ${loginManage && "bg-primary-red"}  p-1 rounded-md`}>{button1}</button>
            <span className="h-7 w-[1px] bg-white-text mx-[1px]"></span>
            <button onClick={() => setLoginManage(false)} className={`w-1/2  p-1 ${!loginManage && "bg-primary-red"}`}>{button2}</button>
            <div className={`w-1/2 h-8 bg-primary-red rounded-md absolute -z-[5]  ${loginManage ? "left-0 animToLeft" : " animToRight right-0 "}`}></div>
        </div>
    );
};

export default CommonTab;