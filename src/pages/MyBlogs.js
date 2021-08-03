import { useQuery } from "@apollo/client";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import { useUserContext } from "../contexts/UserProvider";
import { MY_BLOGS } from "../queries";

const MyBlogs = () => {
  const { state } = useUserContext();
  const { data, loading, error } = useQuery(MY_BLOGS, {
    variables: {
      blogsUserId: state.user.id,
    },
  });

  if (loading) {
    return <LoadingSpinner message="Fetching all blogs" />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Container>
      <Header
        title={`Blogs by ${state.user.firstName} ${state.user.lastName}`}
      />
      <div className="text-center">
        <Button variant="link" href="/create-blog">
          Add New Blog
        </Button>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {data.blogs.map((blog) => {
          return (
            <BlogCard
              id={blog.id}
              key={blog.id}
              title={blog.title}
              content={blog.content}
              firstName={blog.user.firstName}
              lastName={blog.user.lastName}
              isMyBlog={state.user && blog.user.id === state.user.id}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default MyBlogs;
