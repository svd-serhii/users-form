import React from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Card from "../Card";
import Button from "../Button";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const Modaloverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm} text={"Okay"} />
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(
        <Modaloverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
