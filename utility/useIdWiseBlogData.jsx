const useIdWiseBlogData = async (slug) => {
  const res = await fetch(`https://websiteapi.watheta.com/api/blog-slug/${slug}`);
  const data = await res.json();
  const fainalData = data.data;
  return fainalData;
};

export default useIdWiseBlogData;