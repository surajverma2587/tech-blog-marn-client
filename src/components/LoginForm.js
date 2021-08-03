import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { LOGIN } from "../mutations";
import ErrorModal from "./ErrorModal";

const LoginForm = () => {
  let history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { data, error }] = useMutation(LOGIN, {
    onCompleted: () => {
      localStorage.setItem("user", JSON.stringify(data.login));

      history.push("/");
    },
    onError: () => {
      handleShow();
    },
  });

  const onSubmit = async (formData) => {
    await login({
      variables: {
        loginInput: formData,
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <Form.Text className="text-danger">
            Please enter an email address.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Enter Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <Form.Text className="text-danger">
            Please enter a password.
          </Form.Text>
        )}
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
      {error && (
        <ErrorModal
          show={show}
          handleClose={handleClose}
          title="Login Failed"
          message="Please enter the correct email address and/or password."
        />
      )}
    </Form>
  );
};

export default LoginForm;
