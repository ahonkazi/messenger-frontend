export const getCroppedImg = (imageSrc, crop, zoom) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;

        image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            const { width, height } = image;
            const scaleX = image.naturalWidth / width;
            const scaleY = image.naturalHeight / height;

            canvas.width = crop.width;
            canvas.height = crop.height;

            ctx.drawImage(
                image,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width,
                crop.height
            );

            canvas.toBlob(
                (blob) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = () => {
                        resolve(reader.result);
                    };
                },
                'image/jpeg', // You can change the format here if needed
                1.0 // Image quality
            );
        };

        image.onerror = (error) => {
            reject(error);
        };
    });
};
