import apiConfig from "@/configs/api.config";
import { fetchDataAsServer } from "@/utils/axiosServer";

const useBlogData = async () => {
    // const res = await fetch(`https://websiteapi.watheta.com/api/blog-published`, {
    //     cache: 'no-store',
    // })
    // const data = await res.json();

    const res = await fetchDataAsServer(apiConfig.GET_BLOG_PUBLISHED)
    return res;
};

export default useBlogData;