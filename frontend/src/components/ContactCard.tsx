import moment from "moment";
import { BiEdit, BiSortAlt2, BiTrashAlt } from "react-icons/bi";

const ContactCard = ({ contacts, handleSort, handleDelete, handleUpdate, loading }: any) => {
  return (
    <>
      <div className="w-full md:hidden text-center mt-2">
        <button onClick={handleSort} className="inline-flex gap-2 items-center bg-[#b5d8f6] border-0 py-1 px-3 focus:outline-none rounded text-md font-semibold mt-0 shadow-md">
          Sort by Name
          <BiSortAlt2 className="text-lg" />
        </button>
      </div>

      {contacts.length === 0 ? (
        <h1 className="md:hidden w-full text-center py-2 text-xl my-5 text-txt-primary-color">No Contact Data Found</h1>
      ) : (
        loading && (
          <div aria-label="Loading..." role="status" className="w-full py-4 my-5 md:hidden">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden w-full px-4 mt-4 mb-8">
        {contacts.length > 0 &&
          !loading &&
          contacts.map((obj: any, i: number) => (
            <div className="bg-primary-color space-y-3 p-4 rounded-lg shadow-md capitalize" key={i}>
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <h1 className="text-txt-primary-color font-bold inline">#Created Date: </h1>
                  <p className="text-txt-primary-color inline">{moment(obj.createdAt).format("ll") || "Unknown"}</p>
                </div>
              </div>
              <div className="text-sm text-txt-primary-color">
                <p className="text-txt-primary-color font-bold inline">Name: </p>
                {obj.name}
              </div>
              <div className="text-sm text-txt-primary-color">
                <p className="text-txt-primary-color font-bold inline">Email: </p>
                <p className="lowercase inline">{obj.email}</p>
              </div>
              <div className="text-sm text-txt-primary-color">
                <p className="text-txt-primary-color font-bold inline">Phone: </p>
                {obj.phone}
              </div>
              <div className="text-sm font-medium text-txt-primary-color flex flex-wrap gap-2">
                <button
                  onClick={() => handleUpdate(obj)}
                  className="inline-flex gap-2 items-center bg-[rgb(34,197,94)] border-0 py-1 px-3 focus:outline-none rounded text-md font-semibold mt-0 shadow-md"
                >
                  <BiEdit className="text-lg" />
                  Edit Contact
                </button>
                <button
                  onClick={() => handleDelete(obj._id)}
                  className="inline-flex gap-2 items-center bg-[rgb(244,63,94)] border-0 py-1 px-3 focus:outline-none rounded text-md font-semibold mt-0 shadow-md"
                >
                  <BiTrashAlt className="text-lg" />
                  Delete Contact
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ContactCard;
