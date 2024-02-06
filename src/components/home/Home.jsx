import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import { signOut } from 'firebase/auth';
import { auth } from "../googlesign/Config";
import { useNavigate} from "react-router-dom";
import { rowdata } from '../../appdata';
import EdittableRow from '../editrow/EdittableRow';
import ReadOnlyRow from '../editrow/ReadOnlyRow';
import Weather from '../weather/Weather'
function Home() {
  const [contacts, setContacts] = useState(rowdata);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  // navigation session
  const history = useNavigate()
  const handleClick =()=>{
    signOut(auth).then((val)=>{
       history("/")
    })
  }

  return (
    <div className="container mx-auto mt-10">

      <Weather/>
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      <div className="tableContainer">
        <form onSubmit={handleEditFormSubmit}>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="p-3 border border-gray-300">Name</th>
                <th className="p-3 border border-gray-300">Address</th>
                <th className="p-3 border border-gray-300">Phone Number</th>
                <th className="p-3 border border-gray-300">Email</th>
                <th className="p-3 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment key={contact.id}>
                  {editContactId === contact.id ? (
                    <EdittableRow
                      contact={contact}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>

        <h2 className="text-2xl text-center font-bold mt-8">Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit} className="mt-4 flex flex-col items-center">
  <input
    type="text"
    name="fullName"
    required
    placeholder="Enter a name..."
    onChange={handleAddFormChange}
    className="w-72 py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
  />
  <input
    type="text"
    name="address"
    required
    placeholder="Enter an address..."
    onChange={handleAddFormChange}
    className="w-72 py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
  />
  <input
    type="text"
    name="phoneNumber"
    required
    placeholder="Enter a phone number..."
    onChange={handleAddFormChange}
    className="w-72 py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
  />
  <input
    type="email"
    name="email"
    required
    placeholder="Enter an email..."
    onChange={handleAddFormChange}
    className="w-72 py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
  />
  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add</button>
</form>

      </div>

    
      {/* signout button */}
      <div className="flex justify-center mt-8">
  <button onClick={handleClick} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Sign out</button>
</div>

    </div>
  );
}

export default Home;
