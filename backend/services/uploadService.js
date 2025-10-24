import cloudinary from "../middleware/cloudinary.js";
import streamifier from "streamifier";

const uploadImage = async (fileBuffer) => {
  try {
    return await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image", folder: "networks" },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return reject(error);
          }
          resolve(result);
        }
      );
      streamifier.createReadStream(fileBuffer).pipe(stream);
    });
  } catch (err) {
    console.error("Upload image failed:", err);
    throw new Error("Cloudinary upload failed");
  }
};

export { uploadImage };
