import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { db, storage } from "../firebase/config";
import { collection, addDoc, updateDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate, useParams } from "react-router-dom";

const AddBlog = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
  });

  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      try {
        const blogRef = doc(db, "blogs", id);
        const snap = await getDoc(blogRef);
        if (snap.exists()) {
          const data = snap.data();
          setFormData({
            title: data.title || "",
            subtitle: data.subtitle || "",
            description: data.description || "",
            image: data.image || "",
          });
          setPreview(data.image || null);
        }
      } catch (error) {
        console.error("❌ Error loading blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const uploadImageToFirebase = async () => {
    if (!file) return formData.image;
    const uniqueName = `blogImages/blogImage_${Date.now()}`;
    const imageRef = ref(storage, uniqueName);
    await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Please fill in all required fields!");
      return;
    }

    setLoading(true);
    try {
      const imageUrl = await uploadImageToFirebase();

      const newBlog = {
        ...formData,
        image: imageUrl,
        date: new Date().toLocaleDateString(),
        createdAt: serverTimestamp(), // ✅ Added for sorting
      };

      if (id) {
        await updateDoc(doc(db, "blogs", id), newBlog);
        alert("✅ Blog updated successfully!");
      } else {
        await addDoc(collection(db, "blogs"), newBlog);
        alert("✅ Blog added successfully!");
      }

      navigate("/preview-blog");
    } catch (error) {
      console.error("❌ Error saving blog:", error);
      alert("Error saving blog. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="ml-5 flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#EC3338]">
            {id ? "Edit Blog" : "Add New Blog"}
          </h1>
          <button
            onClick={() => navigate("/preview-blog")}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            ← Back
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 max-w-4xl border border-gray-100"
        >
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Blog Title <span className="text-[#EC3338]">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC3338] outline-none"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Subtitle
            </label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              placeholder="Enter subtitle"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC3338] outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Description <span className="text-[#EC3338]">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write blog content..."
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC3338] outline-none"
              required
            ></textarea>
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-3">
              Upload Blog Image
            </label>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full text-sm text-gray-600 border border-gray-300 
                  rounded-lg cursor-pointer focus:outline-none file:mr-4 file:py-2 file:px-4 
                  file:rounded-full file:border-0 file:text-sm file:font-semibold
                   file:bg-[#EC3338]/10 file:text-[#EC3338] hover:file:bg-[#EC3338]/20 
                   transition-all"
                />
              </div>

              {preview && (
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 border rounded-lg overflow-hidden shadow-sm mb-2">
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null);
                      setFile(null);
                      setFormData((prev) => ({ ...prev, image: "" }));
                    }}
                    className="text-sm text-[#EC3338] underline hover:text-red-600"
                  >
                    Remove Image
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-start">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#EC3338] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d12b2f] transition-all shadow-md disabled:opacity-60"
            >
              {loading ? "Saving..." : id ? "Update Blog" : "Save Blog"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddBlog;
