import React, { useEffect, useState } from "react";

const EditForm = (props) => {
  const [form, setForm] = useState(props.currentContact);

  console.log(form);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    setForm(props.currentContact);
  }, [props]);

  return (
    <form
      className="relative flex flex-col gap-3 p-4 bg-blue-100"
      onSubmit={(e) => {
        e.preventDefault();
        props.updateContact(form.id, form);
      }}
    >
      <label className="font-bold">Name</label>
      <input
        className="flex items-center w-full h-full px-4 py-2 placeholder-current bg-gray-100 rounded-full outline-none cursor-pointer"
        type="text"
        name="name"
        value={form.name}
        onChange={handleInputChange}
      />
      <label className="font-bold">Phone</label>
      <input
        className="flex items-center w-full h-full px-4 py-2 placeholder-current bg-gray-100 rounded-full outline-none cursor-pointer"
        type="number"
        name="phone"
        value={form.phone}
        onChange={handleInputChange}
      />
      <div className="flex gap-4 mx-auto">
        <button className="px-4 py-2 mt-6 text-sm font-medium text-white bg-blue-500 rounded-full">
          Update contact
        </button>
      </div>
    </form>
  );
};

export default EditForm;
