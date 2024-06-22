import { ReactNode } from "react";
import { RiCloseFill } from "react-icons/ri";

interface ModalProps {
  id: string;
  title: string;
  children: ReactNode;
  width?: string;
}

const Modal = ({ id, title, children, width = "max-w-[32rem]" }: ModalProps) => {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className={`modal-box relative p-0 rounded-md ${width} scrollNone` }>
          <div className=" bg-border-color p-2 stickt top-0 left-0">
            <div className="modal-action absolute -top-3 right-3">
              <label htmlFor={id} className="cursor-pointer hover:text-primary-red text-xl  duration-300 border-1  rounded-md"><RiCloseFill /></label>
            </div>
            <h3 className="font-bold text-lg text-primary-text">{title}</h3>
          </div>
          <div className=" px-2 ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;