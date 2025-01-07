import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addServerPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPost, action) => {
  let newPostList = currPost;
  if (action.type === "DELETE_POST") {
    newPostList = currPost.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPost];
  } else if (action.type === "ADD_SERVER_POST") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    const addPostAction = {
      type: "ADD_POST",
      payload: {
        id: userId,
        title: postTitle,
        body: postBody,
        tags: tags,
        reactions: reactions,
      },
    };
    dispatchPostList(addPostAction);
  };

  const addServerPost = (posts) => {
    const addPostAction = {
      type: "ADD_SERVER_POST",
      payload: {
        posts,
      },
    };
    dispatchPostList(addPostAction);
  };

  const deletePost = (postId) => {
    const deleteAction = {
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    };
    dispatchPostList(deleteAction);
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, addServerPost, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

// const DEFAULT_POST = [
//   {
//     id: "1",
//     title: "Working in useReducer",
//     body: "useReducer is a hook for Better and complex or large State management technique.",
//     tags: ["useReducer", "StateManagement", "hook"],
//     reactions: 2,
//   },
//   {
//     id: "2",
//     title: "Working in ContextAPI",
//     body: "ContextAPI is used for Props drilling, it helps to communication with parent to child components.",
//     tags: ["ContextAPI", "StateManagement", "PropsDrilling"],
//     reactions: 15,
//   },
//   {
//     id: "3",
//     title: "Working in Error Handling",
//     body: "Error Handling is general concept for whatever error is coming, I have to solve it or debug it",
//     tags: ["Error", "Debugging", "ErrorCorrection"],
//     reactions: 99,
//   },
// ];

export default PostListProvider;
