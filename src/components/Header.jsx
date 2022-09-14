import React from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-6 py-3 mt-4 mb-8 bg-blue-100">
      <button
        onClick={() => {
          navigate("/");
          props.clearSearch();
        }}
        className="flex items-center gap-2 px-4 text-2xl font-medium rounded-full"
      >
        Contact App
      </button>
      <div>
        <form className="relative flex items-center md:w-[22rem]">
          <input
            className="flex items-center w-full h-full px-4 py-2 placeholder-current bg-gray-100 rounded-full outline-none cursor-pointer"
            type="text"
            placeholder="Search Contacts"
            value={props.search}
            onChange={props.handleSearch}
          />
          <div className="absolute flex items-center h-10 p-2 right-1">
            <IoSearch className="" />
          </div>
        </form>
        <div
          className={`absolute left-22 top-22 p-2 overflow-y-auto ${
            (props.filteredContacts?.length > 0 || props.search !== "") &&
            "bg-white shadow-xl"
          } md:w-[22rem] max-h-[20rem] top-20 rounded-xl`}
        >
          {props.filteredContacts?.length > 0
            ? props.filteredContacts?.map((contact) => (
                <div
                  className="flex items-center gap-2 p-2 mb-3 cursor-pointer rounded-xl hover:bg-gray-200"
                  key={contact.id}
                  onClick={() => {
                    navigate(`/detail/${contact.id}`);
                    props.clearSearch();
                  }}
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="flex flex-col">
                    <p className="font-bold">{contact.name}</p>
                    <p>{contact.phone}</p>
                  </div>
                </div>
              ))
            : props.search !== "" && (
                <div className="flex items-center justify-center h-full p-2">
                  <p className="font-bold">No Contact Found</p>
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default Header;
