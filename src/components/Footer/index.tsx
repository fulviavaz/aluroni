import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export default function Fotter() {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
}
