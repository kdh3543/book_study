import './App.css';
import TodoInsert from './components/TodoInsert/TodoInsert';
import TodoList from './components/TodoList/TodoList';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';
import { useState, useRef, useCallback } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링하기', checked: true },
    { id: 3, text: '일정 관리 앱 만들기', checked: false },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용해 변수 담기
  const nextId = useRef(4);

  // onInsert는 컴포넌트의 성능을 아끼기 위해 useCallback으로 감싸줌
  // props로 전달할 함수는 useCallback을 사용하여 함수를 감싸주는게 좋음
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
