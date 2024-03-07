import { useDispatch, useSelector } from 'react-redux';

import styles from './SearchBox.module.css';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = ({ target: { value } }) => dispatch(setFilter(value));

  return (
    <>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          value={filter}
          onChange={handleChange}
          type="text"
        />
      </label>
    </>
  );
};

export default SearchBox;
