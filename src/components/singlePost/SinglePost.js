import "./singlePost.css";

const singlePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Godswill</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
      </div>
    </div>
  );
};

export default singlePost;
