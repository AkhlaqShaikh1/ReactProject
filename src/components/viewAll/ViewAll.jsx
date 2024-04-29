import React from "react";
import { Link } from "react-router-dom";

function ViewAll() {
  return (
    <div className="max-w-lg  m-auto  my-10 px-6">
      <Link
        className="block bg-black text-white font-bold text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        to="/jobs"
      >
        View All Jobs
      </Link>
    </div>
  );
}

export default ViewAll;
