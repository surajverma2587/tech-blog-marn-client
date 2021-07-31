import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const BlogForm = ({ title, content }) => {
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
          placeholder="Enter blog title"
          value={title}
          {...register("title", { required: true })}
        />
        {errors.title && (
          <Form.Text className="text-danger">
            Please enter a blog title.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Enter blog content"
          {...register("content", { required: true })}
          value={content}
        />
        {errors.content && (
          <Form.Text className="text-danger">
            Please enter blog content.
          </Form.Text>
        )}
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default BlogForm;
