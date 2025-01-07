import { useContext, useEffect, useState } from "react";
import Posts from "./Posts";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addServerPost } = useContext(PostListContext);
  const [fetching, setFethching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFethching(true);
    fetch("https://dummyjson.com/posts", signal)
      .then((res) => res.json())
      .then((data) => {
        addServerPost(data.posts);
        setFethching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}

      {!fetching && postList.map((post) => <Posts key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
