import React from "react";

const Status = ({ status }) => {
  const statusColors = {
    "To Start": "bg-[#17A2B8]",
    Pending: "bg-yellow-400",
    Completed: "bg-green-500",
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`h-3 w-3 rounded-full ${
          statusColors[status] || "bg-gray-300"
        }`}
      ></div>
      <h3 className="font-semibold text-[1.2rem]">{status}</h3>
    </div>
  );
};

export default Status;
