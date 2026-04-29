import { useState } from "react";

function Profile({ name, role }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>

      <button onClick={handleFollow}>
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default Profile;