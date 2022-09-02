import React from "react";
import Button from "./button";
import Category from "./category";
import Tag from "./tag";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  body: string;
  completed: boolean;
  category: string;
  tags: string[];
};

function TodoList() {
  const [addList, setAddList] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [todoList, setTodoList] = React.useState<Todo[]>([]);

  function saveHandler() {
    setAddList(false);
    let parsed = input.split("]");
    let category = parsed[0].split("[")[1];
    let [body, ...rest] = parsed[1].split("#");
    let uuid = uuidv4();
    let todo: Todo = { id: uuid, category: category, tags: rest, body: body, completed: false };
    let newList = [...todoList];
    newList.push(todo);
    setTodoList(newList);
  }

  function checkHandler() {}

  function inputHandler(event: any) {
    setInput(event.target.value);
  }

  function plusHandler() {
    setAddList(true);
  }
  function xHandler() {
    setAddList(false);
  }
  function deleteHandler(event: any) {
    let id = event.target.id;
    let newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  }
  return (
    <div>
      <p>TODO LIST</p>
      <table>
        {todoList.map((todo: Todo) => (
          <tr style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <input type="checkbox" onChange={checkHandler} />
            <Category category={todo.category} />
            <span>{todo.body}</span>
            <Tag tags={todo.tags} />
            <Button type="delete" id={todo.id} onClick={deleteHandler} />
          </tr>
        ))}
        {addList && (
          <tr>
            <input type="text" id="addList" onChange={inputHandler} />
            <Button type="save" onClick={saveHandler} />
          </tr>
        )}
      </table>
      <Button type="+" onClick={plusHandler} />
      {addList && <Button type="x" onClick={xHandler} />}
    </div>
  );
}

export default TodoList;
