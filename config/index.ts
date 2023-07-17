const config = {
  google: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_ClIENT_SECRET: process.env.GOOGLE_ClIENT_SECRET,
  },
  database: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  cloudinary: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_API_KEY: process.env.CLOUD_API_KEY,
    CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,
  },
  url: {
    BASE_URL:
      process.env.NODE_ENV === "production"
        ? "https://multishop-ecommerce.vercel.app"
        : "http://localhost:3000",
  },
  auth: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    HOST_EMAIL: process.env.HOST_EMAIL,
    HOST_PASSWORD: process.env.HOST_PASSWORD,
  },
};
export default config;
