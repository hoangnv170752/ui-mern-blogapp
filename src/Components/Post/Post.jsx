import { Link } from "react-router-dom";
import "./post.css";
import background from '../../Photos/background.jpg';

function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={background}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            This is the title of the post
          </Link>
        </span>
        <hr />
        <span className="postDate">2 minute ago</span>
      </div>
      <p className="postDesc">
        This is about the description underlined
      </p>
    </div> 
  );
}
export default Post;
  


  // <div className="post">
  //     {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
  //     <div className="postInfo">
  //       <div className="postCats">
  //         {post.categories.map((c) => (
  //           <span className="postCat">{c.name}</span>
  //         ))}
  //       </div>
  //       <Link to={`/post/${post._id}`} className="link">
  //         <span className="postTitle">{post.title}</span>
  //       </Link>
  //       <hr />
  //       <span className="postDate">
  //         {new Date(post.createdAt).toDateString()}
  //       </span>
  //     </div>
  //     <p className="postDesc">{post.desc}</p>
  //   </div>    