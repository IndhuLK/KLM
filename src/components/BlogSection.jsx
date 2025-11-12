import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "/src/firebase/config"; // ✅ import Firestore instance

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🧩 Fetch blogs from Firebase Firestore
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogList);
      } catch (error) {
        console.error("❌ Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="py-16 text-center text-gray-500">
        Loading blogs...
      </div>
    );
  }

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-pink-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold mb-8 text-[#EC3338] text-center font-poppins">
          Latest Articles
        </h2>

        {blogs.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all 
                duration-300 overflow-hidden hover:-translate-y-1"
              >
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover bg-[#eca0a2]"
                  />
                )}

                <div className="p-5">
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-3 font-poppins">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-2">
                    {blog.date}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {blog.description}
                  </p>
                  <Link
                    to={`/blog/${blog.id}`}
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }, 100);
                    }}
                    className="text-sm text-[#EC3338] underline-offset-2 hover:underline font-inter font-semibold"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-8">
            No blogs yet — check back soon!
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
