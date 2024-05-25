// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store'; // Import the default export
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Searchbox from "../Searchbox/Searchbox";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <Searchbox />
        <ContactList />
      </div>
    </Provider>
  );
}

export default App;