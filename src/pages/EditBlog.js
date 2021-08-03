import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Header from "../components/Header";
import BlogForm from "../components/BlogForm";
import { BLOG } from "../queries";
import LoadingSpinner from "../components/LoadingSpinner";

const EditBlog = () => {
  const { blogId } = useParams();

  const { data, error, loading } = useQuery(BLOG, {
    variables: {
      blogId,
    },
  });

  if (loading) {
    return <LoadingSpinner message="Fetching your blog" />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Container>
      <Header title="Edit Blog" />
      <BlogForm
        title={data.blog.title}
        content={data.blog.content}
        type="edit"
        id={data.blog.id}
      />
    </Container>
  );
};

export default EditBlog;
