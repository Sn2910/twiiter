import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProfilePosters() {
  const [posts, setPosts] = useState("");

  const { id } = useParams();

  const url = `https://apiminitwitter.herokuapp.com/messages/author/${id}`;

  const fetchPostsInfo = async () => {
    const response = await fetch(url);
    const info = await response.json();
    setPosts(info);
  };

  useEffect(() => {
    fetchPostsInfo();
  }, []);
  console.log(posts);
  if (!posts) {
    return "Loading...";
  }

  return (
    <div>
      <div className="user-profile">
        <div className="user-profile-header">
          <h1>User Profile:</h1>
          <h4>
            Name: {posts[0].user.first_name} {posts[0].user.last_name}
          </h4>
          <img src={posts[0].user.profile_picture} />
          <h4>Bio: {posts[0].user.bio}</h4>
          <h4>Following: {posts[0].user.following}</h4>
          <h4>Followers: {posts[0].user.followers}</h4>
        </div>
        <h3>Posts:</h3>
        <ul>
          {posts.map((post) => (
            <Link to={"/messagePage/" + post._id}>
              <li>{post.text}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePosters;
