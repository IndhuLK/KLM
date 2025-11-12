import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "/src/firebase/config";
import { doc, getDoc } from "firebase/firestore";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch a single blog from Firestore by ID
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlog(docSnap.data());
        } else {
          console.error("❌ Blog not found!");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Loading blog details...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-gray-600">
        <p>Blog not found.</p>
        <Link to="/" className="text-[#EC3338] mt-4 underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover rounded-xl shadow-md mb-8"
        />
      )}
      <h1 className="text-3xl font-bold text-[#EC3338] mb-3 font-poppins">
        {blog.title}
      </h1>
      {blog.description && (
        <p className="text-lg text-gray-700 mb-3 font-inter">
          {blog.description}
        </p>
      )}
      <p className="text-sm text-gray-500 mb-6">Posted on {blog.date}</p>
      <p className="text-gray-900 leading-relaxed mb-8 font-inter text-base md:text-lg">
        {blog.content}
      </p>

      <Link
        to="/"
        className="inline-block bg-black text-white px-5 py-2 rounded-md 
        hover:bg-[#d12b2f] transition-all"
      >
        Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetails;
