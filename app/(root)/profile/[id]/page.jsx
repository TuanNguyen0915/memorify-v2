"use client";
import ShowContent from "@/components/Profile/ShowContent";
import UserInfo from "@/components/Profile/UserInfo";
import { Spinner } from "@/components/Spinner/Spinner";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const buttons = [
  { id: 1, text: "Posts", length: "user?.posts?.length" },
  { id: 2, text: "Followers", length: "user?.followers?.length" },
  { id: 3, text: "Followings", length: "user?.followings?.length" },
];

const ProfilePage = ({ params }) => {
  const { user: userClerkId } = useUser();
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [btnId, setBtnId] = useState(1);

  useEffect(() => {
    setLoading(true);
    const apiUrls = [`/api/user/${userClerkId?.id}`, `/api/user/${params.id}`];
    Promise.all(apiUrls.map((url) => fetch(url).then((res) => res.json())))
      .then(([currentUserData, userData]) => {
        setCurrentUser(currentUserData);
        setUser(userData);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [params.id]);
  return (
    <div className="w-full min-h-screen[30vh] flexCenter">
      {loading || !user ? (
        <Spinner />
      ) : (
        // USER INFORMATION
        <div className="w-full flex-col gap-10 p-4 flexCenter xl:w-3/4">
          <UserInfo user={user} currentUser={currentUser} />
          <div className="flex w-full flex-wrap items-center gap-2 md:justify-center lg:justify-between xl:gap-10">
            {/* BUTTONS */}
            {buttons.map((button) => (
              <button
                key={button.id}
                onClick={() => setBtnId(button.id)}
                className={`btn-submit flexCenter cursor-pointer text-sm max-md:p-2 md:min-w-[15rem] ${btnId === button.id ? "opacity-100" : "opacity-50"}`}
              >
                {button.text} ({eval(button.length)})
              </button>
            ))}
          </div>
          {/* SHOW INFO BASE ON BUTTON CLICK */}
          <ShowContent btnId={btnId} user={user}/>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
