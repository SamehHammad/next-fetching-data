import React from "react";
import Card from "../Components/Card";
import styles from "../Posts.module.css";
import { randomColor } from "../randomColor";
export default async function posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  const postJsx = todos.map((todo) => (
    <Card post={todo} btnName="Open Todo Details" url={`/todo/${todo.id}`} bg={`#${randomColor()}`} />
  ));
  return (
    <>
      <div className={styles.headerStyle}>
        <h1>To Do</h1>
      </div>
      <div className={styles.posts}>{postJsx}</div>
    </>
  );
}
