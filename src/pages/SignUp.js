import Container from "react-bootstrap/Container";

import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <Container>
      <Header title="Sign Up" />
      <SignUpForm />
    </Container>
  );
};

export default SignUp;
