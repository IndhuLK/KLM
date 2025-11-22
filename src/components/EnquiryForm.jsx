import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Sidebar from "./Sidebar";

const AdminEnquiries = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const snap = await getDocs(collection(db, "enquiries"));
    const list = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(list);
  };

  useEffect(() => {
    loadData();
  }, []);

  const roleColor = {
  "Parent": "text-blue-600",
  "Principal": "text-green-600",
  "Admin Officer": "text-purple-600",
  "Teacher (Representing School)": "text-orange-600",
  "School Chairman / Director": "text-red-600",
};

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar/>
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Enquiries</h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
        {data.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-sm">
            <p className={`font-bold text-xl mb-5 ${roleColor[item.role]}`}>
  {item.role}
</p>

            {Object.keys(item.data).map((key) => (
              <p key={key} className="text-sm">
                <strong>{key}:</strong> {item.data[key]}
              </p>
            ))}

            <p className="text-sm font-semibold text-green-800 mt-2">
              {item.createdAt?.toDate().toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AdminEnquiries;
