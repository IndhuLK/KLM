import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "/src/firebase/config";
import { Edit3, Trash2 } from "lucide-react";

const PreviewBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogData);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "blogs", id));
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <main className="ml-5 flex-1 p-10">
        <h1 className="text-3xl font-bold text-[#EC3338] mb-8">
          Preview Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl border border-gray-100"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {blog.title}
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  Posted on {blog.date}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {blog.description}
                </p>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {blog.content}
                </p>
                <div className="flex justify-between mt-5">
                  <button className="flex items-center gap-2 text-sm font-semibold text-[#EC3338] hover:text-red-700 transition-all">
                    <Edit3 className="w-4 h-4" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-red-600 transition-all"
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PreviewBlog;
