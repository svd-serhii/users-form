import React, { useState } from "react";
// import { useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Wrapper from "../Helpers/Wrapper/Wrapper";

const AddUser = (props) => {
  //uncontrolled approach
  // const nameInputRef = useRef();
  // const ageInputRef = useRef();

  //controlled approach for input
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // const enteredName = nameInputRef.current.value
    // const enteredAge = ageInputRef.current.value
    // if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setError({
    //     title: "Invalid input",
    //     message: "Please entered a valid name and age (non-empty values).",
    //   });
    //   return;
    // }
    if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please entered a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredUserAge < 5) {
      setError({
        title: "Invalid age",
        message: "Please entered a valid age (>5).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredUserAge);
    setEnteredUsername("");
    setEnteredUserAge("");

    // props.AddUser(enteredName, enteredAge);
    // nameInputRef.current.value = '';
    // ageInputRef.current.value = '';
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
            // ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={userAgeChangeHandler}
            value={enteredUserAge}
            // ref={ageInputRef}
          />
          <Button className={styles.formButton} text={"Add User"} type={"submit"} />
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
