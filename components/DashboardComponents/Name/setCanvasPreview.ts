import ReactCrop, { makeAspectCrop, type Crop } from 'react-image-crop'

const MIN_DIMENSION = 152

export const setFinalCanvas = (
    image: HTMLImageElement | null, // HTMLImageElement
    canvas: HTMLCanvasElement | null, // HTMLCanvasElement
    finalCanvas: HTMLCanvasElement | null
) => {

    if (image === null || canvas === null || finalCanvas === null) return;

    const ctx = finalCanvas.getContext("2d");

    if (!ctx) {
        throw new Error("No 2d context");
    }
  
    finalCanvas.width = MIN_DIMENSION;
    finalCanvas.height = MIN_DIMENSION;

    ctx.drawImage(image,0,0, MIN_DIMENSION, MIN_DIMENSION); // Or at whatever offset you like
};

export const setCanvasPreview = (
    image: HTMLImageElement | null, // HTMLImageElement
    canvas: HTMLCanvasElement | null, // HTMLCanvasElement
    crop: Crop | undefined, // PixelCrop
    finalCanvas: HTMLCanvasElement | null,
    refetch: () => void,
    setPreview: React.Dispatch<React.SetStateAction<string>>
  ) => {

    if (crop === undefined || image === null || canvas === null || finalCanvas === null) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }
  
    // devicePixelRatio slightly increases sharpness on retina devices
    // at the expense of slightly slower render times and needing to
    // size the image back down if you want to download/upload and be
    // true to the images natural size.
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
    canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

    ctx.scale(pixelRatio, pixelRatio);
    ctx.imageSmoothingQuality = "high";
    ctx.save();

    const cropX = crop.x * scaleX;
    const cropY = crop.y * scaleY;
  
    // Move the crop origin to the canvas origin (0,0)
    ctx.translate(-cropX, -cropY);
    ctx.drawImage(
      image,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight
    );
  
    ctx.restore();

    const ctx2 = finalCanvas.getContext("2d");

    if (!ctx2) {
        throw new Error("No 2d context");
    }
  
    finalCanvas.width = MIN_DIMENSION;
    finalCanvas.height = MIN_DIMENSION;

    const finalImage = new Image;
    finalImage.onload = function(){
        ctx2.drawImage(finalImage,0,0, MIN_DIMENSION, MIN_DIMENSION); // Or at whatever offset you like
        finalImage.src = canvas.toDataURL();
        updateImage(finalImage, refetch, setPreview)
      };

  };


  const updateImage = async( finalImage: any, refetch: () => void, setPreview: React.Dispatch<React.SetStateAction<string>>) => {
    try {
      const res = await fetch('https://api.myvizbl.com/api/update-image', {
          method: 'POST',
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: finalImage })
      });

      if (!res.ok) {
          throw new Error('Failed to update image');
      }
      refetch()
      setPreview('')
  } catch (error) {
      console.error('Error updating image:', error);
  }
  }