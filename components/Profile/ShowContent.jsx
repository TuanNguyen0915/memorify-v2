import FeedCard from "../MainSection/FeedCard/FeedCard";
import { Spinner } from "../Spinner/Spinner";


const ShowContent = ({ btnId, user }) => {
  if (!user) return <Spinner />
  return (
    <>
      {btnId === 1 && (
        <div className="w-full flex-col">
          {user.posts?.map((post) => (
            <FeedCard post={post} key={post._id} />
          ))}
        </div>
      )}
      {btnId === 2 && <div>Will show followers {user.followers.length}</div>}
      
      {btnId === 3 && <div>Will show followings {user.followings.length}</div>}
    </>
  );
};

export default ShowContent;
