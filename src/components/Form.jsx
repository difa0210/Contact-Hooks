import React, { useEffect, useState } from "react";

const Form = (props) => {
  const initialFormState = { id: null, name: "", phone: "" };
  const [contact, setContact] = useState(initialFormState);
  const [form, setForm] = useState(props.currentContact);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleInputChange2 = (e) => {
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
        setContact(initialFormState);
      }}
    >
      <label className="mb-2 font-bold">Name</label>
      <input
        className="flex items-center w-full h-full px-4 py-2 mb-4 placeholder-current bg-gray-100 rounded-full outline-none cursor-pointer"
        type="text"
        name="name"
        value={props.edit ? form.name : contact.name}
        onChange={props.edit ? handleInputChange2 : handleInputChange}
      />
      <label className="mb-2 font-bold">Phone</label>
      <input
        className="flex items-center w-full h-full px-4 py-2 placeholder-current bg-gray-100 rounded-full outline-none cursor-pointer"
        type="number"
        name="phone"
        value={props.edit ? form.phone : contact.phone}
        onChange={props.edit ? handleInputChange2 : handleInputChange}
      />
      <div className="flex gap-3">
        <button
          className="px-4 py-2 mt-6 text-sm font-medium text-white bg-blue-500 rounded-full"
          onClick={() => {
            if (props.edit === true) {
              props.setEdit(false);
            }
          }}
        >
          {props.edit ? "Update contact" : "Add contact"}
        </button>
        {props.edit ? (
          <button
            className="px-4 py-2 mt-6 text-sm font-medium text-white bg-red-500 rounded-full"
            onClick={() => props.setEditing(false)}
          >
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default Form;