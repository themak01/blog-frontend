import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AllUsers from "./admin/AllUsers";
import AllPosts from "./admin/AllPosts"
import AddPost from "./user/AddPost"
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <PrivateRoute path="/user/create/post" exact component={AddPost} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute path="/admin/all/users" exact component={AllUsers} />
        <AdminRoute path="/admin/all/posts" exact component={AllPosts} />
        <AdminRoute path="/admin/all/posts" exact component={AllPosts} />
        <AdminRoute path="/admin/all/posts" exact component={AllPosts} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
