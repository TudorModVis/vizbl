'use client'

import useUserData from "@/utils/useUserData"
import { useDropzone } from "react-dropzone";
import { useCallback, useEffect, useState } from "react";
import CropModal from "./CropModal";

const MIN_DIMENSION = 152;

const UserImage = () => {
  const { userData, refetch } = useUserData();

  const [preview, setPreview] = useState('')

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader;

    file.addEventListener('load', () => {
        const imageElement = new Image();
        const imageUrl = file.result?.toString() || "";
        imageElement.src = imageUrl;

        imageElement.addEventListener('load', (e: any) => {
            const {naturalWidth, naturalHeight} = e.currentTarget;
            if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
                return;
            }
            setPreview(imageUrl);
        });
    });

      file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <CropModal preview={preview} setPreview={setPreview} refetch={refetch}/>
      <div className='h-[9.5rem] aspect-square border-2 border-custom-white bg-gray-border rounded-[0.5rem] relative' {...getRootProps()}>
        <input {...getInputProps()}/>
        <div className={`absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-[1] ${ isDragActive && ' opacity-[1] ' } transition-opacity duration-[0.5s] bg-body-bg/40 cursor-pointer grid place-content-center`}>
          <img src="/icons/dashboard-icons/pencil.svg" className="size-[1.5rem]" alt="pencli" draggable={false}/>
        </div>
        {
          userData && (
            <img src={userData.image} alt="user image" draggable={false} className="cover w-full h-full rounded-[0.5rem]" />
          )
        }
      </div>
    </>
  )
}

export default UserImage