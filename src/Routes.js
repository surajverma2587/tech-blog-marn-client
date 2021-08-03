import { Switch, Route, Redirect } from "react-router-dom";

import MyBlogs from "./pages/MyBlogs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import Home from "./pages/Home";
import { useUserContext } from "./contexts/UserProvider";

const Routes = () => {
  const { state, dispatch } = useUserContext();

  return (
    <Switch>
      <Route exact path="/my-blogs">
        {state.user ? <MyBlogs /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/login">
        {!state.user ? <Login /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/sign-up">
        {!state.user ? <SignUp /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/create-blog">
        {state.user ? <CreateBlog /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/edit-blog/:blogId">
        {state.user ? <EditBlog /> : <Redirect to="/login" />}
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
