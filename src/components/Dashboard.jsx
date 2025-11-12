import React from "react";
import Sidebar from "../components/Sidebar";
import { BarChart3, Users, FileText } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="ml-5 flex-1 p-10">
        <h1 className="text-3xl font-bold text-[#EC3338] mb-8">Dashboard Overview</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <Users className="mx-auto text-[#EC3338]" />
            <h2 className="text-xl font-semibold mt-3">Users</h2>
            <p className="text-gray-500 mt-1">1,248 Active Students</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <FileText className="mx-auto text-[#EC3338]" />
            <h2 className="text-xl font-semibold mt-3">Blogs</h2>
            <p className="text-gray-500 mt-1">12 Published Posts</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <BarChart3 className="mx-auto text-[#EC3338]" />
            <h2 className="text-xl font-semibold mt-3">Performance</h2>
            <p className="text-gray-500 mt-1">Last 30 days summary</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
