import Container from "react-bootstrap/Container";

import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";

const SignUp = (props) => {
  return (
    <Container>
      <Header title="Sign Up" />
      <SignUpForm />
    </Container>
  );
};

export default SignUp;
