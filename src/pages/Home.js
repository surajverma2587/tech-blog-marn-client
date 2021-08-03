import { useQuery } from "@apollo/client";
import Container from "react-bootstrap/Container";

import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import { useUserContext } from "../contexts/UserProvider";
import { BLOGS } from "../queries";

const Home = () => {
  const { data, loading, error } = useQuery(BLOGS);
  const { state } = useUserContext();

  if (loading) {
    return <LoadingSpinner message="Fetching all blogs" />;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (data) {
    return (
      <Container>
        <Header title="All Blogs" />
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
  }
};

export default Home;
