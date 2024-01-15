import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex flex-col px-48 max-lg:px-12 mt-12 max-sm:px-2 items-center">
      <h1 className="text-5xl font-bold mb-4">FixHealth</h1>
      <p className="text-lg text-center mb-8">
        Book appointments, manage schedules, and enhance your well-being.
      </p>
      <div className="flex max-md:flex-col gap-4 text-white ">
        {/* Physio Link */}
        <Link
          to="/physio"
          className="p-6 bg-gray-800 rounded-lg text-center hover:opacity-90 shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-2">Physio</h2>
          <p className="text-sm">
            Book an appointment with our experienced physiotherapists.
          </p>
        </Link>

        {/* Patient Link */}
        <Link
          to="/patient"
          className="p-6 bg-green-500 rounded-lg text-center hover:opacity-90 shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-2">Patient</h2>
          <p className="text-sm">
            Manage your appointments and track your progress.
          </p>
        </Link>

        {/* Operations Link */}
        <Link
          to="/operations"
          className="p-6 bg-indigo-500 rounded-lg text-center hover:opacity-90 shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-2">Operations</h2>
          <p className="text-sm">
            Efficiently handle the operational side of our physiotherapy
            services.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
