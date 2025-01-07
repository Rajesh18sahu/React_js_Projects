import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";
const Posts = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card postListContainer" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags) => (
          <span key={tags} className="badge text-bg-primary tags">
            {tags}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Posts;
