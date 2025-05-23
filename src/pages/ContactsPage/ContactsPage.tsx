import AddMessageModalOpen from '../../components/AddMessageModalOpen/AddMessageModalOpen';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import DeleteConfirmModal from '../../components/DeleteConfirmModal/DeleteConfirmModal';
import DeleteMessageModal from '../../components/DeleteMessageModal/DeleteMessageModal';
import EditModal from '../../components/EditModal/EditModal';
import SearchBox from '../../components/SearchBox/SearchBox';
import UpdateMessageModal from '../../components/UpdateMessageModal/UpdateMessageModal';
import styles from './ContactsPage.module.css';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { useMediaQuery } from 'react-responsive';
import { selectUser } from '../../redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const ContactsPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const isTablet = useMediaQuery({ maxWidth: 1200 });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contactFormContainer}>
      {isTablet && user && <p className={styles.name}>Welcome, {user.name}</p>}

      <ContactForm />
      <SearchBox />
      <ContactList />

      <AddMessageModalOpen />
      <DeleteMessageModal />
      <UpdateMessageModal />

      <EditModal />
      <DeleteConfirmModal />
    </div>
  );
};

export default ContactsPage;
