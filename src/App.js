import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const initialContacts = [
    {
      id: 1,
      name: "John Doe",
      phone: "088464216545",
    },
    {
      id: 2,
      name: "Jane Doe",
      phone: "088464216545",
    },
  ];

  const initialContactsState = {
    id: null,
    name: "",
    phone: "",
  };

  const [contacts, setContacts] = useState(initialContacts);
  const [edit, setEdit] = useState(false);
  const [currentContact, setCurrentContact] = useState(initialContactsState);
  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  const addContact = (contact) => {
    contact.id = contacts.length + 1;
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (contact) => {
    setEdit(true);
    setCurrentContact({
      id: contact.id,
      name: contact.name,
      phone: contact.phone,
    });
  };

  const updateContact = (id, updatedContact) => {
    setEdit(false);
    setContacts(
      contacts.map((contact) => (contact.id === id ? updatedContact : contact))
    );
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredContacts(
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    if (e.target.value === "") {
      setFilteredContacts([]);
    }
  };

  const clearSearch = () => {
    setSearch("");
    setFilteredContacts([]);
  };

  return (
    <Router>
      <div className="container mx-auto">
        <Header
          search={search}
          handleSearch={handleSearch}
          clearSearch={clearSearch}
          filteredContacts={filteredContacts}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                contacts={contacts}
                deleteContact={deleteContact}
                editContact={editContact}
                edit={edit}
                setEdit={setEdit}
                currentContact={currentContact}
                updateContact={updateContact}
                addContact={addContact}
                initialContactsState={initialContactsState}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Detail contacts={contacts} updateContact={updateContact} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
