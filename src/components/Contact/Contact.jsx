import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/contactsSlice';

import styles from './Contact.module.css';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.number}>{number}</p>
        </div>
        <button onClick={handleDelete} className={styles.button} type="button">
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
