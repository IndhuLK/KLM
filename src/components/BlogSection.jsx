import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Top School Uniform Trends for This Year",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "How to Choose the Perfect School Shoes",
    image:
      "https://images.unsplash.com/photo-1600180758890-6f2b37dc062b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Comfort Meets Style: Modern Uniform Fabrics Explained",
    image:
      "https://images.unsplash.com/photo-1579328834161-3d9b1c7f56a8?auto=format&fit=crop&w=800&q=80",
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-pink-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold mb-8 text-[#EC3338] text-center
        font-poppins">
          Latest Articles
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all 
              duration-300 overflow-hidden hover:-translate-y-1"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover bg-[#eca0a2]"
              />
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-3
                font-inter">
                  {blog.title}
                </h3>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-sm text-[#EC3338]  font-medium 
                  underline-offset-2 hover:underline font-inter font-semibold"
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
