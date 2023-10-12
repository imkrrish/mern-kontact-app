import TableRow from "./TableRow";
import { BiSortAlt2 } from "react-icons/bi";

const Table = ({ contacts, handleSort, handleDelete, handleUpdate, loading }: any) => {
  return (
    <div className="w-[98%] mx-auto px-2 py-4 bg-primary-color rounded-xl mb-8 hidden md:block">
      <table className="w-[98%] table-auto mx-auto">
        <thead className="rounded-lg bg-secondary-color border-b-4 border-b-primary-color">
          <tr>
            <th className="px-4 py-2 tracking-wide font-semibold text-sm text-left rounded-l-lg">
              <span className="text-txt-primary-color">S. No.</span>
            </th>
            <th className="px-4 py-2 tracking-wide font-semibold text-sm text-left">
              <button className="text-txt-primary-color flex items-center gap-2 hover:bg-[#b5d8f6] px-1 rounded-md" onClick={handleSort}>
                Name
                <span className="text-lg">
                  <BiSortAlt2 />
                </span>
              </button>
            </th>
            <th className="px-4 py-2 tracking-wide font-semibold text-sm text-left">
              <span className="text-txt-primary-color">Phone No.</span>
            </th>
            <th className="px-4 py-2 tracking-wide font-semibold text-sm text-left">
              <span className="text-txt-primary-color">Email</span>
            </th>
            <th className="px-4 py-2 tracking-wide font-semibold text-sm text-left">
              <span className="text-txt-primary-color">Created Date</span>
            </th>
            <th className="px-4 py-2 tracking-wide font-semibold text-sm text-left rounded-r-lg">
              <span className="text-txt-primary-color">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-600 ">
          {contacts.length > 0 && !loading && contacts.map((obj: any, i: number) => <TableRow {...obj} sno={i + 1} key={i} handleDelete={handleDelete} handleUpdate={handleUpdate} />)}
        </tbody>
      </table>
      {contacts.length === 0 ? (
        <h1 className="w-full text-center py-2 text-xl my-5 text-txt-primary-color">No Contact Data Found</h1>
      ) : (
        loading && (
          <div aria-label="Loading..." role="status" className="w-full py-4 my-5">
            <svg className="animate-spin w-10 h-10 fill-[#329fff] mx-auto" viewBox="3 3 18 18">
              <path
                className="opacity-20"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              ></path>
              <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
            </svg>
          </div>
        )
      )}
    </div>
  );
};

export default Table;
