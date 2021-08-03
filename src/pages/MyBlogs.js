import Container from "react-bootstrap/Container";

import Header from "../components/Header";
import { useUserContext } from "../contexts/UserProvider";

const MyBlogs = () => {
  const { state } = useUserContext();

  const { user } = state;

  return (
    <Container>
      <Header title={`Blogs by ${user.firstName} ${user.lastName}`} />
    </Container>
  );
};

export default MyBlogs;
