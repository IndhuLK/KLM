import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "/src/firebase/config";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const q = query(
        collection(db, "blogs"),
        orderBy("createdAt", "desc"),
        limit(3)
      );
      const querySnapshot = await getDocs(q);
      const blogList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogList);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  if (loading)
    return (
      <div className="py-16 text-center text-gray-500">Loading blogs...</div>
    );

  return (
    <section className="py-12 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563eb] to-[#c9a759] font-poppins">
            Latest Articles
          </span>
        </h2>

        {/* 🌟 MOBILE SLIDER (SWIPER) */}
        <div className="flex md:hidden">
          <Swiper
            // Core modules used by the slider (Autoplay and Pagination for dots)
            modules={[Autoplay, Pagination]}
            // Configuration
            spaceBetween={24} // Space between slides (equivalent to space-x-6)
            loop={true} // Allows continuous sliding
            // Autoplay Settings
            autoplay={{
              delay: 3000, // Slides change every 3 seconds
              disableOnInteraction: false, // Keeps autoplay on even if the user touches it
            }}
            // Pagination (Dots) Settings
            pagination={{ clickable: true }}
            // Responsive settings for the desired "partial card view" on mobile
            breakpoints={{
              // settings for mobile (0px and up)
              0: {
                slidesPerView: 1.1, // Show 1.1 slides to indicate more content
                centeredSlides: false,
                spaceBetween: 16,
              },
            }}
            // Custom class to adjust swiper padding and positioning
            className="w-full pb-10 px-4" // Use padding on the Swiper wrapper instead of parent div
          >
            {blogs.map((blog) => (
              <SwiperSlide
                key={blog.id}
                // SwiperSlide needs height: auto and padding for pagination dots
                className="!h-auto"
              >
                <div
                  className="
            bg-white rounded-2xl shadow overflow-hidden h-full
            min-w-full // Ensures the slide takes up the defined width
          "
                >
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-80 object-cover"
                    />
                  )}
                  <div className="p-5">
                    <h3 className="font-semibold text-black text-base mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-xs mb-2">{blog.date}</p>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {blog.description}
                    </p>

                    <Link
                      to={`/blog/${blog.id}`}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="text-sm text-[#2563eb] hover:underline font-semibold"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🌟 DESKTOP GRID */}
        <div className="hidden md:grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow hover:shadow-md transition-all overflow-hidden"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-58 object-contain"
                />
              )}
              <div className="p-5">
                <h3 className="font-semibold text-black text-sm md:text-base mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-xs mb-2">{blog.date}</p>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {blog.description}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-sm text-[#2563eb] hover:underline font-semibold"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
