import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUpForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter first name"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <Form.Text className="text-danger">
            Please enter your first name.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter last name"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <Form.Text className="text-danger">
            Please enter your last name.
          </Form.Text>
        )}
      </Form.Group>
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
          Sign Up
        </Button>
      </div>
    </Form>
  );
};

export default SignUpForm;
