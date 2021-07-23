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
         <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.</h1>
      </div>
    </div>
  );
};

export default singlePost;
