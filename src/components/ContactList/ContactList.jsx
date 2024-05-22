// ContactList.jsx
import Contact from "../Contact/Contact";
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
}