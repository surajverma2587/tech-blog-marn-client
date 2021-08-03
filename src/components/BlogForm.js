import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { CREATE_BLOG } from "../mutations";
import { useUserContext } from "../contexts/UserProvider";
import ErrorModal from "./ErrorModal";

const BlogForm = ({ title, content }) => {
  let history = useHistory();

  const { state } = useUserContext();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title,
      content,
    },
  });

  const [createBlog, { data, error, loading }] = useMutation(CREATE_BLOG, {
    onCompleted: () => {
      history.push("/my-blogs");
    },
    onError: () => {
      handleShow();
    },
  });

  const onSubmit = async (formData) => {
    await createBlog({
      variables: {
        createBlogInput: {
          title: formData.title,
          content: formData.content,
          user: state.user.id,
        },
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter blog title"
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
      {error && (
        <ErrorModal
          show={show}
          handleClose={handleClose}
          title="Operation Failed"
          message="Failed to create a blog!!"
        />
      )}
    </Form>
  );
};

export default BlogForm;
