import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Header from "../components/Header";
import { useUserContext } from "../contexts/UserProvider";

const MyBlogs = () => {
  const { state } = useUserContext();

  const { user } = state;

  return (
    <Container>
      <Header title={`Blogs by ${user.firstName} ${user.lastName}`} />
      <div className="text-center">
        <Button variant="link" href="/create-blog">
          Add New Blog
        </Button>
      </div>
    </Container>
  );
};

export default MyBlogs;
