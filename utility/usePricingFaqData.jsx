const usePricingFaqData = async () => {
  const res = await fetch(`https://websiteapi.watheta.com/api/faq-getselected/pricing`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
};

export default usePricingFaqData;