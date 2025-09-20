import Image from "next/image";
import apiConfig from "@/configs/api.config";
import { fetchDataAsServer } from "@/utils/axiosServer";
import parse from "html-react-parser";

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;
  
  // Fetch blog by slug/id
  const blogData = await fetchDataAsServer(apiConfig.GET_BLOG_PUBLIC_BY_SLUG + id);

  if (!blogData) {
    return (
      <div className="pt-24 flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Blog not found</p>
      </div>
    );
  }

  const blog = blogData;

  return (
    <div className="pt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category & Subcategory */}
      <div className="text-sm text-gray-500 mb-2 flex gap-2">
        <span>{blog.category?.name}</span>
        {blog.subcategory && <span>&gt; {blog.subcategory.name}</span>}
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Language & Date */}
      <div className="flex items-center gap-4 text-gray-500 mb-6">
        <span className="uppercase font-medium">{blog.language}</span>
        <span>{new Date(blog.date).toLocaleDateString("bn-BD", { day: 'numeric', month: 'long', year: 'numeric' })}</span>
      </div>

      {/* Blog Image */}
      {blog.image && (
        <div className="mb-6 w-full h-64 sm:h-96 relative">
          <img
            src={`http://localhost:3000${blog.image}`}
            alt={blog.title}
            fill
            className="object-contain w-full h-full rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Description */}
      <div className="prose prose-lg max-w-none mb-6">
        {parse(blog.description)}
      </div>

      {/* Tags */}
      {blog.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.map(({ tag }) => (
            <span
              key={tag.id}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}

      {/* Author Info */}
      <div className="flex items-center justify-between border-t pt-4 mt-6">
        <div>
          <p className="text-gray-700">
            Created by: <span className="font-medium">{blog.createdBy?.name}</span>
          </p>
          <p className="text-gray-500 text-sm">
            Updated at: {new Date(blog.updatedAt).toLocaleString("bn-BD")}
          </p>
        </div>
      </div>
    </div>
  );
}
