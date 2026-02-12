const cloudinary = require("cloudinary").v2;

const deleteFromCloudinary = async (videoUrl) => {
    const publicId = videoUrl
        .split("/")
        .pop()
        .split(".")[0];

    await cloudinary.uploader.destroy(publicId, {
        resource_type: "video"
    });
};

module.exports = deleteFromCloudinary;
