"use client";
import Link from "next/link";

const AccountNav = () => {
  return (
    <aside className="bg-white w-3/12 rounded-sm overflow-clip">
      <ul>
        <li>
          <Link
            href={""}
            className={`p-3 pl-5 duration-100 block hover:bg-gray-200/50`}
          >
            Edit Details
          </Link>
        </li>
        <li>
          <Link
            href={""}
            className={`text-red-600 p-3 pl-5 duration-100 block hover:bg-gray-200/50`}
          >
            Delete Account
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AccountNav;
