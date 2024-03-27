import { setRegion } from '../features/contriesSlice';
import { useDispatch } from 'react-redux';

export default function Filter() {
    const dispatch = useDispatch();
    const handleFilter = (event) => {
        dispatch(setRegion(event.target.value));
        console.log(event.target.value);
    }

  return (
    <div>
      <select onChange={handleFilter} className='p-2 border border-0 shadow bg-body-tertiary rounded fw-lighter'>
        <option value="">Filter by  Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}