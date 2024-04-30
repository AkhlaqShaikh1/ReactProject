import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-8xl px-auto sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-start md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="block h-10 w-auto" src={logo} alt="Workflow" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>
            <div className="md:ml-auto ">
              <div className="flex py-1 space-x-2 "></div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-black px-4 py-2 rounded-md text-sm font-medium"
                    : "text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-black px-4 py-2 rounded-md text-sm font-medium"
                    : "mr-1 ml-4 text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Jobs
              </NavLink>
              <NavLink
                to="/add-job"
                className={({ isActive }) =>
                  isActive
                    ? "ml-3 text-white bg-black px-4 py-2 rounded-md text-sm font-medium"
                    : "ml-3 text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Add Job
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
