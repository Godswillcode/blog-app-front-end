import "./post.css";

const Post = () => {
  return (
    <div className="post">
        <img className="postImg" src="" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  );
};

export default Post;
