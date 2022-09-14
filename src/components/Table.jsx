import React from "react";
import { useNavigate } from "react-router-dom";

const Table = (props) => {
  const navigate = useNavigate();

  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="text-left bg-blue-100">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Phone</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.length > 0 ? (
          props.contacts.map((contact) => (
            <tr key={contact.id} className="border-b ">
              <td
                className="px-4 py-2 cursor-pointer"
                onClick={() => {
                  navigate(`/detail/${contact.id}`);
                }}
              >
                {contact.name}
              </td>
              <td className="px-4 py-2">{contact.phone}</td>
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
