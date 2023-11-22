import React from "react";
import Card from "../Components/Card";
import styles from "../Posts.module.css";
import { randomColor } from "../randomColor";
export default async function posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const postJsx = posts.map((post) => (
    <Card
      post={post}
      btnName="Open Post Details"
      url={`/posts/${post.id} `}
      bg={`#${randomColor()}`}
    />
  ));
  return (
    <>
      <div className={styles.headerStyle}>
        <h1>Posts</h1>
      </div>
      <div className={styles.posts}>{postJsx}</div>
    </>
  );
}
