import Link from "next/link";
import { useLoginUserDataQuery } from "../../../redux/api/authApi";
import { getUserInfo, isLoggedIn } from "../../../services/auth.service";
import { RiHome3Line } from "react-icons/ri";

const DashboardHeader = () => {

  const userInfo: any = getUserInfo()
  const loginCheck = isLoggedIn()

  let id: string


  if (userInfo?.userId) {
    id = userInfo.userId
  } else {
    id = userInfo.adminId
  }
  const { data, isLoading, isError }: any = useLoginUserDataQuery(id)


  return (
    <div className="p-2 shadow-md w-full rounded-md  ">
      <div className=" md:container mx-auto flex justify-between items-center gap-2 px-4">
        <div className="text-lg flex items-center gap-4">
        <Link href="/dashboard"> <RiHome3Line />  </Link>
        <span>breadcrumb coming</span>
        </div>
        <div className="text-center font-bold">
          <h4 className="text-xs">({data?.data[0]?.role})</h4>
          <h4 className=" "> {data?.data[0]?.fullName}<span></span> </h4>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;