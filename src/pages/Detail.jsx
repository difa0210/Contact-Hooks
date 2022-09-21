/* eslint-disable eqeqeq */
import React from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

const Detail = (props) => {
  const { id } = useParams();
  const contact = props.contacts.find((contact) => contact.id == id);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-1/3 gap-6 mb-6">
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          <p className="text-2xl font-bold">{contact.name}</p>
          <p>{contact.phone}</p>
        </div>
      </div>
      <Form
        edit={props.edit}
        setEdit={props.setEdit}
        currentContact={contact}
        updateContact={props.updateContact}
        params={id}
        initialContactsState={props.initialContactsState}
      />
    </div>
  );
};

export default Detail;
