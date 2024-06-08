
import Link from "next/link";
import { USER_ROLE } from "./role";
import { RiHomeGearLine, RiProfileLine } from "react-icons/ri";

export const sidebarItems = (role:"ADMIN") => {

  const defaultSidebarItems = <>
    <li>
      <Link className="hover:bg-primary-red duration-200 hover:text-white-text" href="/dashboard">
        <RiProfileLine className="dashboard-icon-style" />
        <span className="nav-text">My Profile</span>
      </Link>
    </li>
    <li>
      <Link className=" hover:bg-primary-red duration-200 hover:text-white-text" href="/dashboard">
        <RiHomeGearLine className="dashboard-icon-style" />
        <span className="nav-text">All Users</span>
      </Link>
    </li>
  </>

  const commonAdminSidebarItems =
    <>
      <li>
        <Link className=" hover:bg-primary-red duration-200 hover:text-white-text" href="/dashboard">
          <RiHomeGearLine className="dashboard-icon-style" />
          <span className="nav-text">All Users</span>
        </Link>
      </li>
    </>

  const adminSidebarItems = <>
    <li>
      <Link className=" hover:bg-primary-red duration-200 hover:text-white-text" href="/dashboard">
        <RiHomeGearLine className="dashboard-icon-style" />
        <span className="nav-text">All Users</span>
      </Link>
    </li>
  </>
  // ]
  // const superAdminSidebarItems: MenuProps["items"] = [
  //   ...defaultSidebarItems,
  //   ...commonAdminSidebarItems,
  //   {
  //     label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
  //     icon: <TableOutlined />,
  //     key: `/${role}/admin`,
  //   },
  //   {
  //     label: <Link href={`/${role}/user`}>Manage User</Link>,
  //     icon: <TableOutlined />,
  //     key: `/${role}/user`,
  //   },
  //   {
  //     label: "Management",
  //     key: "management",
  //     icon: <AppstoreOutlined />,
  //     children: [
  //       {
  //         label: <Link href={`/${role}/department`}>Department</Link>,
  //         key: `/${role}/department`,
  //       },
  //     ],
  //   },
  // ];

  // const facultySidebarItems: MenuProps["items"] = [
  //   ...defaultSidebarItems,
  //   {
  //     label: <Link href={`/${role}/courses`}>Courses</Link>,
  //     icon: <TableOutlined />,
  //     key: `/${role}/courses`,
  //   },
  // ];

  // const studentSidebarItems: MenuProps["items"] = [
  //   ...defaultSidebarItems,
  //   {
  //     label: <Link href={`/${role}/courses`}>Courses</Link>,
  //     icon: <TableOutlined />,
  //     key: `/${role}/courses`,
  //   },
  //   {
  //     label: <Link href={`/${role}/courses/schedule`}>Course schedules</Link>,
  //     icon: <ScheduleOutlined />,
  //     key: `/${role}/courses/schedule`,
  //   },
  //   {
  //     label: <Link href={`/${role}/registration`}>Registration</Link>,
  //     icon: <ThunderboltOutlined />,
  //     key: `/${role}/registration`,
  //   },
  //   {
  //     label: <Link href={`/${role}/payment`}>Payment</Link>,
  //     icon: <CreditCardOutlined />,
  //     key: `/${role}/payment`,
  //   },
  //   {
  //     label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
  //     icon: <FileTextOutlined />,
  //     key: `/${role}/academic-report`,
  //   },
  // ];

  if (role === USER_ROLE.ADMIN) {
    adminSidebarItems;
  }

  //else if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  // else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
  // else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
