import React from "react";
import Avatar from "@mui/material/Avatar";
import { GoPlusCircle } from "react-icons/go";

const TasklistHeader = () => {
  return (
    <div className="flex items-center justify-between mt-6">
      <h2 className="text-black text-3xl font-semibold">My Todo</h2>
      <div className="flex items-center gap-4">
        <button className="bg-[#202D48] text-white rounded-md w-40 h-10 px-3 py-1 flex items-center justify-center gap-2 text-lg">
          <GoPlusCircle style={{ fontSize: "1.4rem" }} />
          New Task
        </button>
        <Avatar
          alt="User Avatar"
          src="https://www.irishtimes.com/resizer/Hq7kw8zHrbviXrv8Kt0noelZVqI=/arc-photo-irishtimes/eu-central-1-prod/public/4UU46XZC4SLS5UYY4PPZTP4UGU.jpg"
          sx={{
            width: 50,
            height: 50,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default TasklistHeader;