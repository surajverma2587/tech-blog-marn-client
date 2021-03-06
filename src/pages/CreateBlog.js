import Container from "react-bootstrap/Container";

import Header from "../components/Header";
import BlogForm from "../components/BlogForm";

const CreateBlog = () => {
  return (
    <Container>
      <Header title="Create Blog" />
      <BlogForm type="create" />
    </Container>
  );
};

export default CreateBlog;
