import React from "react";

const Table = (props) => {
  const titles = ["Name", "Gender", "Phone", "Birthday", "Actions"];
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="text-left bg-blue-100">
          {titles.map((title) => (
            <th className="px-4 py-2" key={title}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {props.contacts.length > 0 ? (
          props.contacts.map((contact) => (
            <tr key={contact.id} className="border-b">
              <td
                className="flex items-center gap-2 px-4 py-2 cursor-pointer"
                onClick={() => {
                  props.navigate(`/detail/${contact.id}`);
                  props.editContact(contact);
                }}
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full" />{" "}
                {contact.name}
              </td>
              <td className="px-4">{contact.gender}</td>
              <td className="px-4">{contact.phone}</td>
              <td className="px-4">
                {new Date(contact.birthday).toLocaleDateString("en-US")}
              </td>
              <td className="flex gap-3 px-4 py-2">
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full"
                  onClick={() => {
                    props.editContact(contact);
                  }}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full"
                  onClick={() => props.deleteContact(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              No contacts
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
