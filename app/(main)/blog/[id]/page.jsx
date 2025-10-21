import Image from "next/image";
import apiConfig from "@/configs/api.config";
import { fetchDataAsServer } from "@/utils/axiosServer";
import parse from "html-react-parser";
import CONSTANT from "@/configs/constant.config";

function getLocale(language) {
  switch (language?.toLowerCase()) {
    case "bn":
    case "bangla":
      return "bn-BD";
    default:
      return "en-US";
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  // Fetch blog metadata
  const blogData = await fetchDataAsServer(apiConfig.GET_BLOG_PUBLIC_BY_SLUG + id);
  const metadata = blogData?.metadata;

  if (!metadata) {
    // Fallback if no metadata exists
    return {
      title: blogData?.title || "Blog - WaTheta",
      description: blogData?.description
        ? blogData.description.replace(/<[^>]+>/g, "").slice(0, 160)
        : "Read this blog on WaTheta.",
      openGraph: {
        title: blogData?.title || "Blog - WaTheta",
        description: blogData?.description
          ? blogData.description.replace(/<[^>]+>/g, "").slice(0, 160)
          : "Read this blog on WaTheta.",
        url: `https://watheta.com/blog/${id}`,
        siteName: "WaTheta",
        images: [
          {
            url: blogData?.image
              ? `https://watheta.com${blogData.image}`
              : "/images/wathetahome.jpg",
            alt: blogData?.title || "WaTheta Blog",
          },
        ],
        locale: metadata?.ogLocale || "en_US",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: blogData?.title || "Blog - WaTheta",
        description: blogData?.description
          ? blogData.description.replace(/<[^>]+>/g, "").slice(0, 160)
          : "Read this blog on WaTheta.",
        images: [
          blogData?.image
            ? `https://watheta.com${blogData.image}`
            : "/images/wathetahome.jpg",
        ],
      },
      keywords: blogData?.metadata?.keywords || [],
    };
  }

  return {
    title: metadata.metaTitle || blogData?.title || "Blog - WaTheta",
    description:
      metadata.metaDescription ||
      blogData?.description.replace(/<[^>]+>/g, "").slice(0, 160) ||
      "Read this blog on WaTheta.",
    keywords: metadata.keywords || [],

    openGraph: {
      title: metadata.ogTitle || metadata.metaTitle || blogData?.title,
      description:
        metadata.ogDescription ||
        metadata.metaDescription ||
        blogData?.description.replace(/<[^>]+>/g, "").slice(0, 160),
      url: metadata.ogUrl || `https://watheta.com/blog/${id}`,
      siteName: metadata.ogSiteName || "WaTheta",
      images: [
        {
          url: metadata.ogImages?.startsWith("http")
            ? metadata.ogImages
            : `${process.env.NEXT_PUBLIC_API_URL}${metadata.ogImages}`,
          alt: metadata.ogTitle || metadata.metaTitle || blogData?.title,
        },
      ],
      locale: metadata.ogLocale || "en_US",
      type: metadata.ogType || "article",
    },

    twitter: {
      card: metadata.twitterCard || "summary_large_image",
      title: metadata.twitterTitle || metadata.metaTitle || blogData?.title,
      description:
        metadata.twitterDescription ||
        metadata.metaDescription ||
        blogData?.description.replace(/<[^>]+>/g, "").slice(0, 160),
      images: [
        metadata.twitterImages?.startsWith("http")
          ? metadata.twitterImages
          : `${process.env.NEXT_PUBLIC_API_URL}${metadata.twitterImages}`,
      ],
    },
  };
}


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
  const metadata = blogData?.metadata
  const locale = getLocale(blog.language);

  return (
    <div className="pt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category & Subcategory */}
      <div className="text-sm text-gray-500 mb-2 flex gap-2">
        <span>{blog.category?.name}</span>
        {/* {blog.subcategory && <span>&gt; {blog.subcategory.name}</span>} */}
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Language & Date */}
      <div className="flex items-center gap-4 text-gray-500 mb-6">
        <span className="uppercase font-medium">{blog.language}</span>
        <span>
          {new Date(blog.date).toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Blog Image */}
      {blog.image && (
        <div className="mb-6 w-full h-64 sm:h-96 relative">
          <img
            src={CONSTANT?.API_URL + blog?.image}
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
            Updated at: {new Date(blog.date).toLocaleDateString(locale, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
