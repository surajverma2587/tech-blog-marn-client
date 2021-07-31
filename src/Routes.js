import { Switch, Route, Redirect } from "react-router-dom";

import MyBlogs from "./pages/MyBlogs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import Home from "./pages/Home";
import useUserContext from "./hooks/useUserContext";

const Routes = () => {
  const { isLoggedIn } = useUserContext();

  return (
    <Switch>
      <Route path="/my-blogs">
        {isLoggedIn ? <MyBlogs /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login">
        {!isLoggedIn ? <Login /> : <Redirect to="/" />}
      </Route>
      <Route path="/sign-up">
        {!isLoggedIn ? <SignUp /> : <Redirect to="/" />}
      </Route>
      <Route path="/create-blog">
        {isLoggedIn ? <CreateBlog /> : <Redirect to="/login" />}
      </Route>
      <Route path="/edit-blog">
        {isLoggedIn ? <EditBlog /> : <Redirect to="/login" />}
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
