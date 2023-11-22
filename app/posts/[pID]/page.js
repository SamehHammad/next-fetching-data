import React from "react";
import styles from "../../Card.module.css";
export default async function PostDetals({ params }) {
  const pID = params.pID;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${pID}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();

  return (
    <div>
      <h1 className={styles.id}>{post.id}</h1>
      <h1 className={styles.title}>{post.title}</h1>
      <h6 className={styles.body}>{post.body}</h6>
    </div>
  );
}
