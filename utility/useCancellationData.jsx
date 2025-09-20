const useCancellationData = async () => {
    const res = await fetch(`https://websiteapi.watheta.com/api/trams-selected/cancellation`, {
        cache: "no-store"
    })
    const data = await res.json()
    const finalData = data.data
    return finalData
};

export default useCancellationData;