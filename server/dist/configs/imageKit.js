import ImageKit from "imagekit";
let imageKit = null;
export const getImageKit = () => {
    if (!imageKit) {
        const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
        const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
        const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT;
        if (!privateKey || !publicKey || !urlEndpoint) {
            throw new Error("ImageKit is not configured. Please set IMAGEKIT_PRIVATE_KEY, IMAGEKIT_PUBLIC_KEY, and IMAGEKIT_URL_ENDPOINT in your .env file.");
        }
        imageKit = new ImageKit({
            privateKey,
            publicKey,
            urlEndpoint,
        });
    }
    return imageKit;
};
export default { getImageKit };
//# sourceMappingURL=imageKit.js.map