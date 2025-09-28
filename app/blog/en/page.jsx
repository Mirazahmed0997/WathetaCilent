import React from "react";
import Link from "next/link";
import apiConfig from "@/configs/api.config";
import JoinOurNewsLetter from "@/components/JoinOurNewsLetter";
import { fetchDataAsServer } from "@/utils/axiosServer";
import { Languages } from "lucide-react";
import BlogCard from "../components/BlogCard";
import BlogHero from "../components/BlogHero";
import BlogSearch from "../components/BlogSearch";

export default async function BlogsPage({ searchParams }) {
  const { q, tagId, categoryId, subcategoryId } = await searchParams;
  const blogs = await fetchDataAsServer(
    apiConfig.GET_BLOG_PUBLIC + `?language=EN${q ? `&q=${q}` : ""}${tagId ? `&tagId=${tagId}` : ""}${categoryId ? `&categoryId=${categoryId}` : ""}${subcategoryId ? `&subcategoryId=${subcategoryId}` : ""}`
  );
  const heroBlog = blogs?.data.find(blog => blog?.isHero === true)

  const category = await fetchDataAsServer(apiConfig?.GET_BLOG_CATEGORIES)

  return (
    <section className="pt-24 max-w-7xl mx-auto space-y-4 px-2">
      <div className="my-10 flex justify-between">
        <div className="flex items-end">
          <h1 className=" text-teal-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Blog</h1>
          <span className="text-gray-600 text-xs">/EN</span>
        </div>
        <Link href={'bn'} className="flex items-center space-x-1.5 rounded-full border px-4 h-10 text-sm">
          <Languages className="w-4 h-4" />
          <span>BN</span>
        </Link>
      </div>

      <nav className="w-full bg-teal-800 p-1 rounded-full">
        <ul className="flex items-center flex-wrap gap-2">
          {/* All blogs button */}
          <li className="w-fit rounded-full px-3 py-1 text-sm bg-white">
            <Link href="/blog/en">All</Link>
          </li>

          <li> <BlogSearch language='en' /> </li>

          {/* Categories */}
          <li className="hidden md:flex items-center flex-wrap gap-2">
            {category && category?.map((cat) => (
              <div
                key={cat.id}
                className="relative group text-gray-300 hover:text-white rounded-full px-3 py-1 text-sm cursor-pointer"
              >
                <Link href={`/blog/en?categoryId=${cat.id}`}> {cat.name} </Link>
              </div>
            ))}
          </li>
        </ul>
      </nav>

      <div className="flex flex-col gap-4">
        {heroBlog && <BlogHero heroBlog={heroBlog} />}
        <div className="grid md:grid-cols-3 gap-4">
          {blogs?.data ? (blogs?.data?.map(blog => (
            <BlogCard key={blog?.id} blog={blog} />
          ))) : (
            <div>No blog found !!</div>
          )}
        </div>
      </div>

      {/* Join Our Newsletter */}
      <JoinOurNewsLetter />

      {/* <HomeFAQ /> */}
    </section>
  );
}

// SEO meta tag generation
async function getSeoData() {
  const response = await fetchDataAsServer(apiConfig.GET_BLOG_METADATA);
  const data = Array.isArray(response) ? response[0] : response;

  const title = data?.metaTitel || "Watheta Blog - Latest Insights & News";
  const description = data?.metaDescription || "Explore Watheta's latest blog posts, tips, and industry updates.";
  const image = data?.image || "/images/wathetahome.jpg";
  const canonicalUrl = "https://watheta.com/blogs";

  return {
    metadataBase: new URL("https://watheta.com"),
    title,
    description,
    keywords: [
      "Watheta Blog",
      "WhatsApp API",
      "CRM",
      "Automation Tools",
      "Business Messaging",
      "Startups",
      "Budgeting",
      "Tech Insights",
    ],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [{ url: image, alt: "WaTheta Blog Feature Image" }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: { canonical: canonicalUrl },
  };
}

export async function generateMetadata() {
  return await getSeoData();
}
