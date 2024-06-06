import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {UsersProvider} from "./store/UsersContext";
import {PostsProvider} from "./store/PostsContext";
import {HomePage} from "./pages/HomePage";
import {UsersPage} from "./pages/UsersPage";
import {PostsPage} from "./pages/PostsPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {NewPostPage} from "./pages/NewPostPage";
import React from "react";
import {App} from "./App";

export const Root = () => (
  <Router>
    <UsersProvider>
      <PostsProvider>
        <Routes>
          <Route path={`/`} element={<App />}>
            <Route index element={<HomePage />}/>
            <Route path={`users`} element={<UsersPage />}/>
            <Route path="posts">
              <Route index element={<PostsPage />}/>
              <Route path={`620`} element={<PostDetailsPage />}/>
              <Route path={`new`} element={<NewPostPage />}/>
            </Route>

            <Route path={`*`} element={<p> Not Found </p>}/>
          </Route>


        </Routes>
      </PostsProvider>
    </UsersProvider>
  </Router>
)