const usePrivacyPolicyData = async () => {
  const res = await fetch(`https://websiteapi.watheta.com/api/trams-selected/policy`);
  const data = await res.json();
  const finalData = data.data;
  return finalData;
};

export default usePrivacyPolicyData;