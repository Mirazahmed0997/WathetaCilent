const useTaramsData = async () => {
    const res = await fetch(`https://websiteapi.watheta.com/api/trams-selected/trams`, {
        cache: "no-store"
    })
    const data = await res.json()
    console.log(data.data)
    return data.data
};

export default useTaramsData;