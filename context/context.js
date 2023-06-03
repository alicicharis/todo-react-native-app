import React, { useState } from "react";

export const MyContext = React.createContext();

const DUMMY_DATA = [{ id: 1, name: "This is todo text", done: false }];
const MyProvider = ({ children }) => {
  const [allTodos, setAllTodos] = useState(DUMMY_DATA);
  const [todoList, setTodoList] = useState(DUMMY_DATA);

  const handleInputValue = (value) => {
    setTodoList((prevState) => [value, ...prevState]);
    setAllTodos((prevState) => [value, ...prevState]);
  };

  const handleRemoveTodo = (todoId) => {
    const filteredTodos = todoList.filter((todo) => todo.id !== todoId);
    const allFilteredTodos = allTodos.map((todo) => {
      if (todo.id === todoId) todo.done = true;
      return todo;
    });
    console.log(allFilteredTodos);
    setTodoList(filteredTodos);
  };

  const resetList = () => {
    setTodoList([]);
  };

  const sharedData = {
    handleInputValue,
    todoList,
    allTodos,
    resetList,
    handleRemoveTodo,
  };

  return <MyContext.Provider value={sharedData}>{children}</MyContext.Provider>;
};

export default MyProvider;
