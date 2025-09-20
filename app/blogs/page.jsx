import React from "react";
import Link from "next/link";
import apiConfig from "@/configs/api.config";
import HomeFAQ from "@/components/HomeFAQ";
import JoinOurNewsLetter from "@/components/JoinOurNewsLetter";
import { fetchDataAsServer } from "@/utils/axiosServer";
import { ArrowRight } from "lucide-react";

export default async function BlogsPage() {
  const blogs = await fetchDataAsServer(apiConfig.GET_BLOG_PUBLIC + '?language=BN');
  const firstBlog = blogs?.data[0]
  // const blogsDatas = await fetchDataAsServer(apiConfig.GET_BLOG_PUBLIC);
  // const heroBlog = blogsDatas?.find((blog) => blog.heroSelect === "yes");

  return (
    <section className="pt-24 max-w-7xl mx-auto space-y-4">
      <h1 className="my-10 text-teal-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Blog</h1>
      <nav className="w-full bg-teal-800 p-1 rounded-full">
        <ul>
          <li className="w-fit rounded-full px-3 py-1 text-sm bg-white">All</li>
        </ul>
      </nav>
      <div className="flex flex-col gap-4">
        {firstBlog &&
          <Link href={`blogs/${firstBlog?.slug}`}>
            <article className="w-full bg-teal-800 rounded-3xl overflow-hidden grid grid-cols-12">
              <div className="col-span-5 px-6 py-20 text-white flex flex-col justify-between">
                <div className="space-y-4">
                  <h2 className="text-2xl">{firstBlog?.title}</h2>
                  <h3 className="text-sm line-clamp-3">{firstBlog?.subHeading}</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    {firstBlog?.tags && firstBlog?.tags.map(tag => (
                      <p key={tag?.tag?.id} className="border border-teal-600 px-3 py-0.5 rounded-full text-xs cursor-pointer hover:underline"># {tag?.tag?.name}</p>
                    ))}
                  </div>
                </div>
                <p className="flex items-center space-x-2 text-xs group hover:underline">
                  <ArrowRight className='w-5 h-5 p-1 bg-amber-600 rounded-full group-hover:scale-110 group-hover:translate-x-1 transform transition duration-200' />
                  <span>Read full blog</span>
                </p>
              </div>

              <div className="col-span-7 overflow-hidden">
                <img
                  src={`http://localhost:3000${firstBlog?.image}`}
                  height={500} width={500}
                  alt={firstBlog?.title}
                  className="w-full h-96 object-cover hover:scale-105 transform transition duration-200" />
              </div>
            </article>
          </Link>
        }
        <div className="grid grid-cols-3 gap-4">
          {blogs?.data ? (blogs?.data?.map(blog => (
            <Link key={blog?.id} href={`blogs/${blog?.slug}`} className="w-full bg-teal-800 rounded-3xl overflow-hidden">
              <article>
                <div className="col-span-7 overflow-hidden">
                  <img
                    src={`http://localhost:3000${blog?.image}`}
                    height={500} width={500}
                    alt={blog?.title}
                    className="w-full h-72 object-cover hover:scale-105 transform transition duration-200" />
                </div>

                <div className="col-span-5 p-4 text-white flex flex-col space-y-1 justify-between">
                  <p className="flex items-center space-x-2 text-xs group hover:underline">
                    <ArrowRight className='w-5 h-5 p-1 bg-amber-600 rounded-full group-hover:scale-110 group-hover:translate-x-1 transform transition duration-200' />
                    <span>Read full blog</span>
                  </p>
                  <div className="space-y-2">
                    <h2 className="text-xl">{blog?.title}</h2>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 items-center">
                      {blog?.tags && blog?.tags.map(tag => (
                        <p key={tag?.tag?.id} className="border border-teal-600 px-3 py-0.5 rounded-full text-xs cursor-pointer hover:underline"># {tag?.tag?.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))) : (
            <div>No blog found !!</div>
          )}
        </div>
      </div>


      {/* Hero Section */}
      {/* {blogsDatas && JSON.stringify(blogsDatas, null, 2)} */}
      {/* <header className="blogsHeroDiv pt-16 lg:pt-20 xl:pt-20">
        <div className="blogsHeroBg">
          <div className="blogsHeroHeadlineDiv">
            <div className="flex justify-center">
              <div className="pt-16 text-center">
                <h1 className="blogsHeroHeadline">Watheta Blog</h1>
                <p className="blogsHeroHeadPera pb-0 lg:pb-5 xl:pb-5">
                  Explore articles, tips, and guides across business, startups, and budgeting. Written for modern entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {/* Featured Blog */}
      {/* <section className="mx-5 lg:mx-48 xl:mx-48 md:mx-16 -mt-80 lg:-mt-56 xl:-mt-56" aria-label="Featured Blog">
        {heroBlog && (
          <article
            className="blogs2ndHeroBgImgDiv rounded-2xl"
            itemScope
            itemType="https://schema.org/Article"
          >
            <Link href={`/blogs/${heroBlog.blogslug}`}>
              <img
                className="blogs2ndHeroBgImg hidden lg:block xl:block rounded-2xl"
                src={`https://websiteapi.watheta.com${heroBlog.blogimage}`}
                alt={heroBlog.blogheadline || "Featured blog post image"}
              />
              <img
                className="blogs2ndHeroBgImg block lg:hidden xl:hidden"
                src={`https://websiteapi.watheta.com${heroBlog.blogimage}`}
                alt={heroBlog.blogheadline || "Featured blog post image"}
              />
            </Link>
            <div className="blogs2ndHeroContectDiv flex items-end">
              <div className="ps-3 lg:ps-10 xl:ps-10 gap-4 w-full text-white">
                <h2 className="blogs2ndHeroHealdline pt-5 leading-tight" itemProp="headline">
                  {heroBlog.blogheadline}
                </h2>
                <div
                  className="ellipsis-2-lines pt-4"
                  itemProp="description"
                  dangerouslySetInnerHTML={{
                    __html: heroBlog.blogdescriptions,
                  }}
                />
                <div className="pb-10 pt-5">
                  <Link href={`/blogs/${heroBlog.blogslug}`}>
                    <button
                      className="blogsReadArticleButton flex items-center px-10 py-3 rounded-full cursor-pointer text-black"
                      aria-label={`Read more about ${heroBlog.blogheadline}`}
                    >
                      Read Article{" "}
                      <span className="ms-3">
                        <img src="/images/Group 1000002859.png" alt="arrow icon" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}
      </section> */}

      {/* Blog Cards */}
      {/* <section className="mx-5 lg:mx-48 xl:mx-48 py-8 lg:py-16 xl:py-16" aria-label="All Blog Posts">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-10">
          {blogsDatas && blogsDatas.map((blog, index) => (
            <article
              className="cursor-pointer"
              key={index}
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <div className="blogPageImgeDiv rounded-3xl">
                <Link href={`/blogs/${blog.blogslug}`}>
                  <img
                    className="blogPageImge rounded-3xl"
                    src={`https://websiteapi.watheta.com${blog.blogimage}`}
                    alt={blog.blogheadline || "Blog post image"}
                    itemProp="image"
                  />
                </Link>
              </div>
              <div className="pt-4">
                <Link href={`/blogs/${blog.blogslug}`}>
                  <h3 className="blogPageHeadline" itemProp="headline">
                    {blog.blogheadline}
                  </h3>
                </Link>
              </div>
              <div className="pt-5">
                <Link href={`/blogs/${blog.blogslug}`}>
                  <button className="border-b border-gray-500 blogReadMoreText cursor-pointer">
                    Read more
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section> */}

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
