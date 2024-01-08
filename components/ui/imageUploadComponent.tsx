'use client';

import { useState } from 'react';
import {inputFormats, outputFormats} from "@/utl/Const";

export default function ImageConverter() {
    const [image, setImage] = useState(null);
    const [convertedImg, setConvertedImg] = useState('');
    const [format, setFormat] = useState('png');
    const [downloadUrl, setDownloadUrl] = useState('');


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const convertImage = async () => {
        if (!image) {
            console.error('No image selected');
            return;
        }

        if (!inputFormats.includes(format)) {
            console.error('Invalid format selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', image);
        formData.append('format', format);

        try {
            const response = await fetch('/api/imageConversion', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const blob = await response.blob();
            setConvertedImg(URL.createObjectURL(blob));
            setDownloadUrl(URL.createObjectURL(blob));
        } catch (error) {
            console.error('Error converting image:', error);
        }
    };

    return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="hero min-h-screen bg-base-200 flex flex-col items-center justify-center">
                        <img src={convertedImg} className="max-w-sm rounded-lg shadow-2xl"/>
                        {downloadUrl &&
                            <a href={downloadUrl} download className="btn btn-outline btn-primary mt-4">Download Image</a>}
                    </div>

                    <div>
                        <h1 className="text-5xl font-bold">Convert an image to one of those formats, free and with no
                            data stored by us!</h1>
                        <p className="py-6">JPEG, PNG, WEBP, AVIF, TIFF, BMP.</p>

                        <input type="file"
                               id="imageUpload"
                               name="imageUpload"
                               accept="image/*"
                               onChange={handleImageChange}
                               className="file-input file-input-bordered file-input-success w-full max-w-xs"/>


                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Select new format:</span>
                            </div>
                            <select className="select select-bordered" onChange={(e) => setFormat(e.target.value)}>
                                {outputFormats.map((fmt) => (
                                    <option value={fmt} key={fmt}>
                                        {fmt.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                            <div className="label">
                            </div>
                        </label>

                        <button onClick={convertImage} className="btn btn-outline btn-success">Convert Image</button>
                    </div>
                </div>
            </div>

    );
}

