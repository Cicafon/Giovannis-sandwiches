import classes from "./NewOrderForm.module.css";

import { Form, Button, Card } from "react-bootstrap";
import useInput, { isNotEmpty, isBiggerThenZero } from "../hooks/use-input";
import { useEffect } from "react";

const NewOrderForm = (props) => {
  const {
    value: nameValue,
    hasError: nameHasError,
    errorMessage: nameErrorMessage,
    isValid: nameIsValid,
    valueChangeHandler: nameOnChange,
    inputBlurHandler: nameOnBlur,
    reset: nameReset,
  } = useInput(isNotEmpty);
  const {
    value: amountValue,
    hasError: amountHasError,
    errorMessage: amountErrorMessage,
    isValid: amountIsValid,
    valueChangeHandler: amountOnChange,
    inputBlurHandler: amountOnBlur,
    reset: amountReset,
  } = useInput(isBiggerThenZero);

  let formIsValid = false;
  if (nameIsValid && amountIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(nameValue, amountValue);
  };

  useEffect(() => {
    if (props.isSumbitted) {
      nameReset();
      amountReset();
    }
  }, [props.isSumbitted]);

  const successNotification = (
    <p className={classes.success}>Order succesfully submitted!</p>
  );

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter your name"
              value={nameValue}
              onChange={nameOnChange}
              onBlur={nameOnBlur}
              isInvalid={nameHasError}
            />
            <Form.Control.Feedback type="invalid">
              {nameErrorMessage}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              min="1"
              step="1"
              type="number"
              placeholder="Number of sandwiches"
              value={amountValue}
              onChange={amountOnChange}
              onBlur={amountOnBlur}
              isInvalid={amountHasError}
            />
            <Form.Control.Feedback type="invalid">
              {amountErrorMessage}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!formIsValid}>
            Submit Order
          </Button>
        </Form>
        {props.isSumbitted && successNotification}
      </Card.Body>
    </Card>
  );
};

export default NewOrderForm;
