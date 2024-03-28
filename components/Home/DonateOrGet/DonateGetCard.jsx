import Image from "next/image";
import profile from "../../../public/assets/profile.png";
import { MdAddLocation } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";

const DonateGetCard = ({ donner }) => {
    return (
        <div class="card bg-color-bg2 border-1 border-white-text">
            <div class="card-body -my-3 items-center ">
                <Image src={profile} alt="profile" height={70} width={70} />
                <strong class="card-title">{donner?.donnerName}</strong>
                <p className="text-xl">{donner?.phone}</p>
                <address className="text-center"> {donner?.address}</address>

            </div>
        </div>
    );
};

export default DonateGetCard;