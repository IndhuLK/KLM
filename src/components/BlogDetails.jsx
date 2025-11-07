import React from "react";
import { useParams, Link } from "react-router-dom";

const blogData = {
  1: {
    title: "Top School Uniform Trends for This Year",
    content: `
School uniforms have evolved over the years to become more comfortable and stylish.
This year, soft cotton blends and wrinkle-free fabrics are the top choices among parents.
Many schools are also adopting modern color palettes and gender-neutral designs to
make uniforms inclusive and appealing.
    `,
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
  },
  2: {
    title: "How to Choose the Perfect School Shoes",
    content: `
When buying school shoes, comfort and durability should always come first.
Look for breathable leather, cushioned soles, and proper arch support.
Avoid shoes that are too tight—children’s feet grow quickly!
Choosing neutral colors like black or brown helps them match with most uniforms.
    `,
    image:
      "https://images.unsplash.com/photo-1600180758890-6f2b37dc062b?auto=format&fit=crop&w=800&q=80",
  },
  3: {
    title: "Comfort Meets Style: Modern Uniform Fabrics Explained",
    content: `
Uniforms today are designed with both comfort and practicality in mind.
Fabric technology now includes sweat-resistant, lightweight materials that keep students
cool throughout the day. Polyester-cotton blends are highly popular due to their
easy maintenance and long-lasting quality.
    `,
    image:
      "https://images.unsplash.com/photo-1579328834161-3d9b1c7f56a8?auto=format&fit=crop&w=800&q=80",
  },
};

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) return <p className="text-center mt-10">Blog not found</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-60 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-8">
        {blog.content}
      </p>
      <Link
        to="/"
        className="text-blue-600 hover:underline font-medium underline-offset-2"
      >
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetails;
