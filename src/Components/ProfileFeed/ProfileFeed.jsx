export default function ProfileFeed({ userposts }) {
  return (
    <>
      <div className="profile-pics">
        {[...userposts].reverse().map((post) => (
          <div
            className="profile-pic"
            key={post._id}
          >
            <img
              src={post.image}
              alt={post.description}
            />
          </div>
        ))}
      </div>
    </>
  );
}
