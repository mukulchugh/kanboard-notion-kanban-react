import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "To Do",
    desc: "Tasks that need to be done",
    link: "https://kanboard.airtribe.com/todo",
  },
  {
    id: 2,
    title: "In Progress",
    desc: "Tasks that need to be done",
    link: "https://kanboard.airtribe.com/in-progress",
  },
  {
    id: 3,
    title: "Done",
    desc: "Tasks that need to be done",
    link: "https://kanboard.airtribe.com/done",
  },

  {
    id: 4,
    title: "To Do",
    desc: "Tasks that need to be done",
    link: "https://kanboard.airtribe.com/todo",
  },
];
const Boards = () => {
  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <Link href={`${item.link}`} class>
          <div className={styles.card}>
            <h1>{item.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Boards;
