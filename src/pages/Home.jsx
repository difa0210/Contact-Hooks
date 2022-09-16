import Table from "../components/Table";
import Form from "../components/Form";

const Home = (props) => {
  return (
    <div className="flex flex-row items-start w-full gap-12">
      <div className="w-2/3">
        <Table
          contacts={props.contacts}
          deleteContact={props.deleteContact}
          editContact={props.editContact}
          navigate={props.navigate}
        />
      </div>
      <div className="flex flex-col w-1/3 gap-6">
        <Form
          addContact={props.addContact}
          edit={props.edit}
          setEdit={props.setEdit}
          currentContact={props.currentContact}
          updateContact={props.updateContact}
          initialContactsState={props.initialContactsState}
        />
      </div>
    </div>
  );
};

export default Home;
