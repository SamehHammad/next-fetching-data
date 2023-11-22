import Image from "next/image";
import styles from "./page.module.css";
import Card from "./Components/Card";
import  {randomColor} from "./randomColor";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="posts">
        <Card
          post={{
            id: "$$",
            title: "Home Page",
            bg: `${randomColor()}`,
            body: "Home Page Card",
          }}
          url="./"
          btnName="HomePage"
        />
        <Card
          post={{
            id: "$$",
            title: "Home Page",
            bg: `${randomColor()}`,
            body: "Home Page Card",
          }}
          url="./"
          btnName="HomePage"
        />{" "}
        <Card
          post={{
            id: "$$",
            title: "Home Page",
            bg: `${randomColor()}`,
            body: "Home Page Card",
          }}
          url="./"
          btnName="HomePage"
        />{" "}
        <Card
          post={{
            id: "$$",
            title: "Home Page",
            bg: `${randomColor()}`,
            body: "Home Page Card",
          }}
          url="./"
          btnName="HomePage"
        />{" "}
        <Card
          post={{
            id: "$$",
            title: "Home Page",
            bg: `${randomColor()}`,
            body: "Home Page Card",
          }}
          url="./"
          btnName="HomePage"
        />{" "}
        <Card
          post={{
            id: "$$",
            title: "Home Page",
            bg: `${randomColor()}`,
            body: "Home Page Card",
          }}
          url="./"
          btnName="HomePage"
        />{" "}
        <Card
          post={{
            id: "$$",
            title: "Home Page",
            bg: `${randomColor()}`,
            body: "Home Page Card",
          }}
          url="./"
          btnName="HomePage"
        />{" "}
        <Card
          post={{
            id: "$$",
            title: "Home Page",
            bg: `${randomColor()}`,
            body: "Home Page Card",
          }}
          url="./"
          btnName="HomePage"
        />{" "}
        <Card
          post={{
            id: "$$",
            title: "Home Page",
            bg: `${randomColor()}`,
            body: "Home Page Card",
          }}
          url="./"
          btnName="HomePage"
        />
      </div>
    </div>
  );
}
