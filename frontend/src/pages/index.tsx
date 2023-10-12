import { useEffect, useState } from "react";
import { fetchContacts, addContact, deleteContact, updateContact } from "./api";
import Layout from "@/components/layout";
import Table from "@/components/Table";
import Model from "@/components/Model";
import AddContactForm from "@/components/AddContactForm";
import UpdateContactForm from "@/components/UpdateContactForm";
import { DefaultSeo } from "@/components/Seo";
import { debounce } from "@utils/helper";
import { ToastContainer, toast } from "react-toastify";
import ContactCard from "@/components/ContactCard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [addContactFormToggle, setAddContactFormToggle] = useState(false);
  const [updateFormToggle, setUpdateFormToggle] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({});
  const [queryParams, setQueryParams] = useState({
    sortBy: "name",
    sortOrder: "DESC",
    name: "",
  });

  const errorOptions: any = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const successOptions: any = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const handleSort = () => {
    setQueryParams({
      ...queryParams,
      sortBy: "name",
      sortOrder: queryParams.sortOrder === "ASC" ? "DESC" : "ASC",
    });
  };

  const handleSearch = (e: any) => {
    debouncedHandleSearch(e.target.value);
  };

  const debouncedHandleSearch = debounce((value) => {
    setQueryParams({ ...queryParams, name: value });
  }, 1000);

  const handleAddContact = (formData: any) => {
    addContact(formData)
      .then((res) => {
        fetchAndUpdateContacts();
        setAddContactFormToggle(false);
        toast.success("Contact Added!", successOptions);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error!", errorOptions);
      });
  };

  const handleUpdateContact = (_id: any, formData: any) => {
    updateContact(_id, formData)
      .then((res) => {
        setUpdateFormToggle(false);
        fetchAndUpdateContacts();
        toast.success("Contact Updated!", successOptions);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error!", errorOptions);
      });
  };

  const handleUpdate = (formData: any) => {
    setUpdateFormToggle(true);
    setUpdateFormData(formData);
  };

  const handleDelete = (_id: any) => {
    deleteContact(_id)
      .then(() => {
        fetchAndUpdateContacts();
        toast.success("Contact Deleted!", successOptions);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error!", errorOptions);
      });
  };

  const fetchAndUpdateContacts = () => {
    setLoading(true);
    fetchContacts(queryParams)
      .then((res) => {
        setContacts(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setContacts([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAndUpdateContacts();
  }, [queryParams]);

  return (
    <>
      <DefaultSeo />
      <Layout handleSearch={handleSearch} addContactFormToggle={setAddContactFormToggle}>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        <Model isVisible={addContactFormToggle} title="Add Contact" onClose={() => setAddContactFormToggle(false)}>
          <AddContactForm handleAddContact={handleAddContact} />
        </Model>
        <Model isVisible={updateFormToggle} title="Update Contact" onClose={() => setUpdateFormToggle(false)}>
          <UpdateContactForm handleUpdateContact={handleUpdateContact} updateFormData={updateFormData} />
        </Model>
        <ContactCard loading={loading} contacts={contacts} handleSort={handleSort} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        <Table loading={loading} contacts={contacts} handleSort={handleSort} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      </Layout>
    </>
  );
}
