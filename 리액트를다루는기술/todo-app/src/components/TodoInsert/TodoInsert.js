import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { useCallback, useState } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    // onSubmit은 enter 눌렀을 때도 반응함
    // onClick은 클릭했을 때만 가능, enter 눌렀을 때 이벤트 주고 싶으면 onKeyPress를 줘야 됨
    <form className="TodoInsert" onSubmit={onSubmit}>
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
