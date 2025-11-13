import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "/src/firebase/config";
import { collection, getDoc, getDocs, doc, query, orderBy } from "firebase/firestore";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) setBlog({ id: docSnap.id, ...docSnap.data() });

        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const allSnap = await getDocs(q);
        const all = allSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setAllBlogs(all);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p className="text-center py-16 text-gray-500">Loading...</p>;
  if (!blog) return <p className="text-center py-16 text-gray-500">Blog not found</p>;

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 gap-8">
      <div className="flex-1 bg-white rounded-xl shadow-md p-6">
        {blog.image && <img src={blog.image} className="w-full h-100 object-contain rounded-lg mb-6" />}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
        <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
          {blog.description}
        </p>
      </div>

      <aside className="w-full md:w-1/3 bg-white rounded-xl shadow-md p-6 h-fit">
        <h2 className="text-xl font-semibold text-[#EC3338] mb-4">All Blogs</h2>
        <div className="flex flex-col gap-4">
          {allBlogs.map((b) => (
            <Link
              key={b.id}
              to={`/blog/${b.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`flex items-center gap-3 p-3 rounded-lg ${
                b.id === id ? "bg-pink-100" : "hover:bg-gray-100"
              }`}
            >
              {b.image && <img src={b.image} className="w-26 h-26 object-cover rounded-md" />}
              <div>
                <h3 className="text-sm font-semibold text-gray-800">{b.title}</h3>
                <p className="text-xs text-gray-500">{b.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default BlogDetails;
