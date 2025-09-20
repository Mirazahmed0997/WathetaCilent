const useFeaturespageMetaData = async () => {
  const res = await fetch(
    "https://websiteapi.watheta.com/api/getPageDiscription/selecte/features",
    {
      cache: "no-store", 
    }
  );

  const json = await res.json();
  return json?.data?.[0];
};

export default useFeaturespageMetaData;