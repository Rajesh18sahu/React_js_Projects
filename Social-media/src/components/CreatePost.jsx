import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(",");
    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <div className="createPostContainer">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User-Id
          </label>
          <input
            type="number"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="enter your user id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="postTitle"
            placeholder="Enter post title here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postBody" className="form-label">
            Post Content
          </label>
          <textarea
            rows="4"
            type="text"
            ref={postBodyElement}
            className="form-control"
            id="postBody"
            placeholder="describe more about post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="number of reactions"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="enter tags seperated by ,"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
