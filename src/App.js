import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import Header from "./components/Header";

function Root() {
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
  const navigate = useNavigate();

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

  //HackerRank

  // const simpleArraysum = (ar) => {
  //   let sum = 0;
  //   for (let i = 0; i < ar.length; i++) {
  //     sum += ar[i];
  //   }
  //   return sum;
  // };

  // console.log("simpleArraySum:", simpleArraysum([1, 2, 3, 4, 10, 11]));

  // const solveMeFirst = (a, b) => {
  //   return a + b;
  // };

  // console.log("solveMeFirst:", solveMeFirst(2, 3));

  // const compareTriplets = (a, b) => {
  //   let alice = 0;
  //   let bob = 0;
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i] > b[i]) {
  //       alice++;
  //     } else if (a[i] < b[i]) {
  //       bob++;
  //     }
  //   }
  //   return [alice, bob];
  // };

  // console.log("compareTriplets:", compareTriplets([5, 6, 7], [3, 6, 10]));

  // const aVeryBigSum = (ar) => {
  //   let sum = 0;
  //   for (let i = 0; i < ar.length; i++) {
  //     sum += ar[i];
  //   }
  //   return sum;
  // };

  // console.log(
  //   "aVeryBigSum:",
  //   aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
  // );

  // const diagonalDifference = (arr) => {
  //   let sum1 = 0;
  //   let sum2 = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     sum1 += arr[i][i];
  //     sum2 += arr[i][arr.length - 1 - i];
  //   }
  //   return Math.abs(sum1 - sum2);
  // };

  // console.log(
  //   "diagonalDifference:",
  //   diagonalDifference([
  //     [11, 2, 3],
  //     [4, 5, 6],
  //     [10, 8, -12],
  //   ])
  // );

  // const plusMinus = (arr) => {
  //   let positive = 0;
  //   let negative = 0;
  //   let zero = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > 0) {
  //       positive++;
  //     } else if (arr[i] < 0) {
  //       negative++;
  //     } else {
  //       zero++;
  //     }
  //   }
  //   let positiveRatio = positive / arr.length;
  //   let negativeRatio = negative / arr.length;
  //   let zeroRatio = zero / arr.length;

  //   return { ...[positiveRatio, negativeRatio, zeroRatio] };
  // };

  // console.log("plusMinus:", plusMinus([-4, 3, -9, 0, 4, 1]));

  // const staircase = (n) => {
  //   for (let i = 1; i <= n; i++) {
  //     console.log(" ".repeat(n - i) + "#".repeat(i));
  //   }
  // };

  // console.log("staircase:", staircase(6));

  // const miniMaxSum = (arr) => {
  //   let min = arr[0];
  //   let max = arr[0];
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < min) {
  //       min = arr[i];
  //     }
  //     if (arr[i] > max) {
  //       max = arr[i];
  //     }
  //     sum += arr[i];
  //   }
  //   console.log("min:", min, "max:", max, "sum:", sum, "arr[0]:", arr[0]);
  //   return { ...[sum - max, sum - min] };
  // };

  // console.log("miniMaxSum:", miniMaxSum([1, 2, 3, 4, 5]));

  return (
    <div className="container mx-auto">
      <Header
        search={search}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
        filteredContacts={filteredContacts}
        setEdit={setEdit}
        navigate={navigate}
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
              navigate={navigate}
            />
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Detail
              contacts={contacts}
              updateContact={updateContact}
              edit={edit}
              setEdit={setEdit}
              initialContactsState={initialContactsState}
              navigate={navigate}
            />
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Root />
    </Router>
  );
}

export default App;
