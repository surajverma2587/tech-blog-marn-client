import Container from "react-bootstrap/Container";

import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const Login = (props) => {
  return (
    <Container>
      <Header title="Login" />
      <LoginForm />
    </Container>
  );
};

export default Login;
