import imageCompression from 'browser-image-compression'

// Compress image for better performance
const compressImage = async (file) => {
    const compressedFile = await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true
    })
    return compressedFile
}

export { compressImage }