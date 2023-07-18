import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { useCallback, useState } from 'react';

const TodoInsert = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하시오"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
