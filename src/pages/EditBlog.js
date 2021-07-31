import Container from "react-bootstrap/Container";

import Header from "../components/Header";
import BlogForm from "../components/BlogForm";

const EditBlog = (props) => {
  return (
    <Container>
      <Header title="Edit Blog" />
      <BlogForm title="Foo Bar" content="This is foo bar!!" />
    </Container>
  );
};

export default EditBlog;
