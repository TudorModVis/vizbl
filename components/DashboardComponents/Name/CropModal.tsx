'use client'
import { motion, AnimatePresence } from "framer-motion"
import ReactCrop, { convertToPercentCrop, convertToPixelCrop, makeAspectCrop, type Crop } from 'react-image-crop'
import { useState, useRef } from "react"

import { setCanvasPreview } from "./setCanvasPreview"

const MIN_DIMENSION = 152;

interface CropModalProps {
    preview: string;
    setPreview: React.Dispatch<React.SetStateAction<string>>;
    refetch: () => void
}

const CropModal:React.FC<CropModalProps> = ({ preview, setPreview, refetch }) => {

    const [crop, setCrop] = useState<Crop>()
    const imgRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const finalCanvasRef = useRef<HTMLCanvasElement>(null)

    const handleImageLoad = (e: any) => {
        const { width, height, naturalWidth, naturalHeight } = e.currentTarget
        const crop = makeAspectCrop({ width: MIN_DIMENSION, unit: 'px' }, 1, width, height)
        setCrop(crop)
    }

  return (
    <AnimatePresence >
        {
            preview !== '' && (
                <motion.div
                    className="bg-slate-900/20 backdrop-blur p-[1rem] fixed inset-0 z-[5000] grid place-items-center"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    onMouseDown={() => setPreview('')}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={(e) => e.stopPropagation()}
                        className="ss:w-[40rem] w-full p-[1rem] bg-card-bg border border-gray-border text-center rounded-[0.5rem] cursor-default relative"
                    >
                        <img onClick={() => setPreview('')} src="/icons/dashboard-icons/arrow-left.svg" alt="arr" draggable={false} className="size-[2rem] rotate-180 absolute cursor-pointer" />
                        <h3 className="text-custom-white font-bold text-[1.5rem] uppercase leading-[1.85rem] mb-[2rem]">Crop image</h3>

                        <ReactCrop 
                            crop={crop} 
                            onChange={c => setCrop(c)}
                            aspect={1}
                            keepSelection
                            minWidth={MIN_DIMENSION}
                        >
                            <img ref={imgRef} src={preview} alt="preview" draggable={false} style={{ maxHeight: '70vh' }} onLoad={handleImageLoad}/>
                        </ReactCrop>

                        {crop && <canvas ref={canvasRef} style={{width: MIN_DIMENSION + "px", height: MIN_DIMENSION + "px", objectFit: 'contain', display: 'none'}}></canvas>}
                        {crop && <canvas ref={finalCanvasRef} style={{width: MIN_DIMENSION + "px", height: MIN_DIMENSION + "px", objectFit: 'contain', display: 'none'}}></canvas>}

                            <div className="w-full justify-center flex mt-[2rem] text-custom-white text-[1.125rem] font-[500]">
                                <motion.button
                                    initial={{
                                        background: 'linear-gradient(93deg, rgba(253,162,255,1) -64.38%, rgba(120,42,213,1) 48.4%, rgba(82,184,255,1) 158.85%), rgba(0,0,0,0)'
                                    }}
                                    whileHover={{
                                        background: 'linear-gradient(93deg, rgba(30,30,30,1) -64.38%, rgba(30,30,30,1) 48.4%, rgba(30,30,30,1) 158.85%), rgba(0,0,0,0)'
                                    }}
                                    transition={{
                                        duration: 0.4
                                    }}
                                    className="py-[0.5rem] px-[1rem] border border-gray-border rounded-[0.25rem] flex items-center gap-[1rem]"
                                    onClick={() => setCanvasPreview(imgRef.current, canvasRef.current, crop, finalCanvasRef.current, refetch, setPreview)}
                                >
                                    <span>Next</span> <img src="/icons/dashboard-icons/arrow-left.svg" alt="arr" draggable={false} />
                                </motion.button>
                            </div>
                    </motion.div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default CropModal