import { useSelector } from 'react-redux';

import { selectContacts } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import { deleteContact } from '../../redux/contacts/contactsSlice';
import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  return (
    <>
      <ul className={styles.list}>
        {getVisibleContacts().map(({ name, number, id }) => (
          <li className={styles.item} key={id}>
            <Contact
              name={name}
              number={number}
              id={id}
              deleteContact={deleteContact}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
