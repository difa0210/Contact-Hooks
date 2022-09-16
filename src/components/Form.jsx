import React, { useEffect, useState } from "react";

const Form = (props) => {
  const [contact, setContact] = useState(props.initialContactsState);
  const [form, setForm] = useState(props.currentContact);

  const handleInputChangeAdd = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleInputChangeUpdate = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    setForm(props.currentContact);
  }, [props]);

  return (
    <form
      className="relative flex flex-col items-start p-4 bg-blue-100"
      onSubmit={(e) => {
        e.preventDefault();
        props.updateContact(form.id, form);

        if (!contact.name || !contact.phone) return;
        props.addContact(contact);
        setContact(props.initialContactsState);
      }}
    >
      <label className="mb-2 font-bold">Name</label>
      <input
        className="flex items-center w-full h-full px-4 py-2 mb-4 placeholder-current bg-gray-100 rounded-full outline-none cursor-pointer"
        type="text"
        name="name"
        value={props.edit ? form?.name : contact?.name}
        onChange={props.edit ? handleInputChangeUpdate : handleInputChangeAdd}
      />
      <label className="mb-2 font-bold">Phone</label>
      <input
        className="flex items-center w-full h-full px-4 py-2 placeholder-current bg-gray-100 rounded-full outline-none cursor-pointer"
        type="number"
        name="phone"
        value={props.edit ? form?.phone : contact?.phone}
        onChange={props.edit ? handleInputChangeUpdate : handleInputChangeAdd}
      />
      <div className="flex gap-3">
        <button
          className="px-4 py-2 mt-6 text-sm font-medium text-white bg-blue-500 rounded-full"
          onClick={() => {
            props.params ? props.setEdit(true) : props.setEdit(false);
          }}
        >
          {props.edit ? "Update contact" : "Add contact"}
        </button>
        {props.edit ? (
          <button
            className="px-4 py-2 mt-6 text-sm font-medium text-white bg-red-500 rounded-full"
            onClick={() => props.setEdit(false)}
          >
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default Form;
