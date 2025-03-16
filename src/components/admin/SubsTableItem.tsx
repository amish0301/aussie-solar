import { TAdminEmail } from "@/app/admin/subscriptions/page";
import React from "react";

interface propsType {
    email: string,
    mongoId: string,
    deleteEmail: (mongoId: string) => void,
    date: string
}

const SubsTableItem = ({ email, mongoId, deleteEmail, date }: propsType) => {
  const emailDate = new Date(date);

  return (
    <tr className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "No Email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>
      <td
        className="px-6 py-4 cursor-pointer"
        onClick={() => deleteEmail(mongoId)}
      >
        x
      </td>
    </tr>
  );
};

export default SubsTableItem;
