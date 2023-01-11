import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);

  const changeInput = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={changeInput} />
    </Label>
  );
}

export default Filter;
