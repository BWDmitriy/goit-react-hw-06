// Searchbox.jsx
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function Searchbox() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
}