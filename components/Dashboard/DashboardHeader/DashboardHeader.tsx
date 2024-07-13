import Link from "next/link";
import { useLoginUserDataQuery } from "../../../redux/api/authApi";
import { getUserId, getUserInfo, isLoggedIn } from "../../../services/auth.service";
import { RiArrowDropRightLine, RiHome3Line } from "react-icons/ri";
import { usePathname } from "next/navigation";

const DashboardHeader = () => {
  const path = usePathname()
  const loginCheck = isLoggedIn()

  let id: string
  // && !item.startsWith('manage')
  const routeSlice = path?.split("/").filter(item => item !== '' && item !== "dashboard")

  const userInfo: any = getUserInfo()
  const { data, isLoading, isError }: any = useLoginUserDataQuery(getUserId(userInfo))

  return (
    <div className="p-2 shadow-md w-full rounded-md">
      <div className=" flex justify-between items-center gap-2 px-4">
        <div className="text-lg flex items-center">
          <Link href="/dashboard"> <RiHome3Line /> </Link>
          {routeSlice?.map((route: string, i: number) => (
            <p key={i} className="capitalize flex items-center text-sm cursor-pointer" >
              <RiArrowDropRightLine className="text-lg" />
              <span className="hover:text-primary-red duration-200">{route}</span>
            </p>))}
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