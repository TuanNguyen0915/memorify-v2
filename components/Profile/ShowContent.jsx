import FeedCard from "../MainSection/FeedCard/FeedCard";


const ShowContent = ({ btnId, user }) => {
  console.log(user.posts[0])
  return (
    <>
      {btnId === 1 && (
        <div className="w-full flex-col">
          {user.posts?.map((post) => (
            <FeedCard post={post} key={post._id} />
          ))}
        </div>
      )}
      {btnId === 2 && <div>Will show followers</div>}
      {btnId === 3 && <div>Will show followings</div>}
    </>
  );
};

export default ShowContent;
