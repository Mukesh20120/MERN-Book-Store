const getBaseUrl = () => {
    const url = import.meta.env.VITE_SERVER_URL; // Replace with your actual base URL
    return url;
}

export default getBaseUrl;