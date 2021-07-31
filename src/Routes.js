import { Switch, Route } from "react-router-dom";

import MyBlogs from "./pages/MyBlogs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/my-blogs">
        <MyBlogs />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/create-blog">
        <CreateBlog />
      </Route>
      <Route path="/edit-blog">
        <EditBlog />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
