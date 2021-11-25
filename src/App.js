import { useState, useEffect } from "react";
import ContactForm from "./Components/ContactForm/Form";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import "./App.css";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const newContacts = JSON.parse(localStorage.getItem("contacts"));
    setContacts(newContacts ? newContacts : initialState);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitForm = (data) => {
    const _c = contacts.some((contact) =>
      contact.name.toLowerCase().includes(data.name.toLowerCase())
    );

    if (_c) {
      return alert(`${data.name} is already in contacts`);
    }
    setContacts([data, ...contacts]);
  };

  const onDeleteContact = (id) => {
    setContacts([...contacts.filter((contact) => contact.id !== id)]);
  };

  const handleFilteredInput = (e) => {
    setFilter(e.target.value);
  };

  const onFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase().trim();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().trim().includes(normalizedFilter)
    );
  };

  return (
    <div className="App">
      <div>
        <ContactForm onSubmit={handleSubmitForm} />
        <h2>Contacts</h2>
        <Filter value={filter} filteredValue={handleFilteredInput} />
      </div>

      <div>
        <ContactList
          title="Contacts"
          deleteContact={onDeleteContact}
          contacts={onFilteredContacts()}
        ></ContactList>
      </div>
    </div>
  );
}

export default App;
