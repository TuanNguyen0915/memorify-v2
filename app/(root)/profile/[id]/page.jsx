"use client";
import ShowContent from "@/components/Profile/ShowContent";
import UserInfo from "@/components/Profile/UserInfo";
import { Spinner } from "@/components/Spinner/Spinner";
import { getUser, handleError } from "@/services/user.service";
import { useEffect, useState } from "react";

const buttons = [
  { id: 1, text: "Posts", length: "selectedUser?.posts?.length" },
  { id: 2, text: "Followers", length: "selectedUser?.followers?.length" },
  { id: 3, text: "Followings", length: "selectedUser?.followings?.length" },
];

const ProfilePage = ({ params }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [btnId, setBtnId] = useState(1);

  const fetchData = async () => {
    const data = await getUser(params?.id);
    setSelectedUser(data);
    setLoading(false);
  };

  useEffect(() => {
    try {
      setLoading(true);
      fetchData();
    } catch (error) {
      handleError(error);
    }
  }, [params.id]);

  return (
    <div className="min-h-screen[30vh] flexCenter w-full">
      {loading || !selectedUser ? (
        <Spinner />
      ) : (
        // USER INFORMATION
        <div className="flexCenter w-full flex-col gap-10 p-4">
          <div className="w-full xl:w-3/4">
            <UserInfo user={selectedUser} />
          </div>
          <div className="flex w-full flex-wrap items-center gap-2 md:justify-center lg:justify-between xl:w-3/4 xl:gap-10">
            {/* BUTTONS */}
            {buttons.map((button) => (
              <button
                key={button.id}
                onClick={() => setBtnId(button.id)}
                className={`btn-submit flexCenter cursor-pointer text-sm max-md:p-2 md:min-w-[15rem] ${btnId !== button.id && " bg-slate-200/20"}`}
              >
                {button.text} ({eval(button.length)})
              </button>
            ))}
          </div>
          {/* SHOW INFO BASE ON BUTTON CLICK */}
          <ShowContent btnId={btnId} user={selectedUser} update={fetchData} />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
