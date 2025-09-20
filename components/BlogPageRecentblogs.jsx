import React from "react";

const BlogPageRecentblogs = () => {
  return (
    <main>
      <section className="blogRecentBlog py-10 lg:py-20 xl:py-20">
        <div className="mx-5 lg:mx-48 xl:mx-48 md:mx-16">
          <header>
            <h1 className="blogPageReasentHeadline">Recent Blogs</h1>
          </header>

          {/* blog grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 py-10 gap-10">
            <article>
              {/* img  */}
              <figure className="blogePageResentBlogsImgDiv">
                <img
                  className="blogePageResentBlogsImg"
                  src="/images/imager.png"
                  alt="Blog thumbnail"
                />
              </figure>

              {/* min and product text */}
              <div className="flex justify-between pt-6">
                <span className="border px-4 py-1 rounded-full blogProductText bg-white">
                  Product
                </span>
                <span className="blogProductMinText">11 min read</span>
              </div>

              <header className="pt-4">
                <h2 className="blogPageHeadline">
                  Frequently asked questions about Xref Exit Surveys
                </h2>
              </header>

              <div className="pt-4">
                <a
                  href="#"
                  className="border-b border-gray-500 blogReadMoreText"
                >
                  Read more
                </a>
              </div>
            </article>

            {/* 2nd grid */}
            <div className="space-y-4">
              {[1, 2, 3].map((num) => (
                <article key={num} className="grid grid-cols-3 gap-5">
                  <figure className="blogPageResentImgDiv2nd border rounded-3xl col-span-1">
                    <img
                      className="blogPageResent2Img"
                      src={`/images/imager (${num}).png`}
                      alt={`Blog thumbnail ${num}`}
                    />
                  </figure>
                  <div className="col-span-2">
                    <div className="flex justify-between">
                      <span className="bg-white px-4 py-1 rounded-full border blogProductText">
                        Product
                      </span>
                      <span className="blogProductMinText">11 min read</span>
                    </div>
                    <header>
                      <h2 className="blogPageHeadline pt-4">
                        Frequently asked questions about Xref Exit Surveys
                      </h2>
                    </header>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPageRecentblogs;