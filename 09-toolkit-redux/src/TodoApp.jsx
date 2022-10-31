import { useState } from 'react';
import {
  useGetTodosQuery,
  useGetTodosByIdQuery,
} from './store/apis/todosApi';

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todo = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodosByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  console.log(todo, todoId);
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'} </h4>
      <button onClick={prevTodo}> Prev </button>
      <button onClick={nextTodo}> Next </button>
      <p>{JSON.stringify(todo)}</p>

      {/*
            <ul>
                { todos.map( todo => (
                    <li key={ todo.id }>
                        <strong> { todo.completed ? 'DONE' : 'Pending' } </strong>
                        { todo.title }
                    </li>
                ) ) }
            </ul> */}
    </>
  );
};
