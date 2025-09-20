import React from "react";

const useBlogMetaData = async () => {
  const res = await fetch(
    "https://websiteapi.watheta.com/api/getPageDiscription/selecte/blog",
    {
      cache: "no-store",
    }
  );
  const json = await res.json();
  return json?.data?.[0];
};

export default useBlogMetaData;