import React from "react";
import styles from "../Card.module.css";
import Link from "next/link";
const Card = ({ post, btnName, url,bg }) => {
  return (
    <>
      <div
        className={styles.card}
        key={post.id}
        style={{ backgroundColor: post.bg?post.bg:bg }}
      >
        <h1 className={styles.id}>{post.id}</h1>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.body}>
          {post.body
            ? post.body
            : post.completed
            ? "Completed :(True)"
            : "Completed :(False)"}
        </p>
        <Link href={url}>
          <button className={styles.btn}>{btnName}</button>
        </Link>
      </div>
    </>
  );
};

export default Card;
