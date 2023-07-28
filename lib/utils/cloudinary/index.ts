// import cloudinary from "cloudinary";

// // Get the Cloudinary configuration values from the config module
// const cloudName = process.env.CLOUD_NAME;
// const apiKey = process.env.CLOUD_API_KEY;
// const apiSecret = process.env.CLOUD_API_SECRET;

// // Configure Cloudinary with your credentials
// cloudinary.v2.config({
//   cloud_name: cloudName,
//   api_key: apiKey,
//   api_secret: apiSecret,
// });

// const cloudinaryUpload = (path: string, folderName: string) => {
//   return new Promise<cloudinary.UploadApiResponse>((resolve, reject) => {
//     cloudinary.v2.uploader.upload(
//       path,
//       { folder: folderName },
//       (err: any, result: any) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       }
//     );
//   });
// };

// export default cloudinaryUpload;
