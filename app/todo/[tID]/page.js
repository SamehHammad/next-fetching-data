import React from "react";
import styles from "../../Card.module.css";
export default async function PostDetals({ params }) {
  const tID = params.tID;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${tID}`,
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
      {post.body ? (
        <h6 className={styles.body}></h6>
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <h3 className={styles.id}>Completed :</h3>
          <input type="checkbox" checked={post.completed} readOnly />
        </div>
      )}
    </div>
  );
}
