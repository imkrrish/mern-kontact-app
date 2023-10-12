import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import moment from "moment";

const TableRow = ({ _id, name, phone, email, createdAt, sno, handleDelete, handleUpdate }: any) => {
  const formData = { _id, name, phone, email };
  return (
    <tr className="bg-table-row-color text-center text-txt-primary-color border-y-4 border-y-primary-color hover:bg-table-row-hover-color rounded-lg">
      <td className="px-4 py-2 text-left font-semibold rounded-l-lg">
        <span>{sno || "Unknown"}</span>
      </td>
      <td className="px-4 py-2 text-left font-semibold capitalize">
        <span>{name || "Unknown"}</span>
      </td>
      <td className="px-4 py-2 text-left font-semibold">
        <span>{phone || "Unknown"}</span>
      </td>
      <td className="px-4 py-2 text-left font-semibold">
        <span>{email || "Unknown"}</span>
      </td>
      <td className="px-4 py-2 text-left font-semibold">
        <span>{moment(createdAt).format("ll") || "Unknown"}</span>
      </td>
      <td className="px-4 py-2 text-left rounded-r-lg">
        <button className="cursor mr-2" onClick={() => handleUpdate(formData)}>
          <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
        </button>
        <button className="cursor" onClick={() => handleDelete(_id)}>
          <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
