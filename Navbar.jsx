import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="bg-gradient-to-l from-blue-900 to-blue-600"
      style={{
        background: "linear-gradient(to left, #1a202c, #2d3748)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <span className="ml-2 text-white font-bold text-lg">
              <span className="text-blue-500">Sim</span>Ops
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/dashboard"
                className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>

              <Link
                to="/planner"
                className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Planner
              </Link>

              <Link
                to="/handover"
                className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Handover
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
