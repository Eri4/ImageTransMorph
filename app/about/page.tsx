import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'About Us',
    description: 'The best image convertor for privacy'
}
export default async function About() {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 prose">
            <div className="flex flex-col space-y-6">
                <div>
                    <h1 className="text-5xl font-bold text-center">About Us</h1>
                    <h2 className="text-5xl font-bold text-center mt-8">Welcome to ImageTransMorph - Your Ultimate Image
                        Conversion Tool!</h2>
                    <p className="py-6 text-justify mt-8">
                        At ImageTransMorph, we understand the importance of seamless image conversion for your creative
                        projects. Whether you&apos;re a designer, photographer, or just someone looking to transform
                        images
                        effortlessly, our user-friendly platform is here to simplify the process.
                    </p>
                    <h4 className="text-2xl font-bold mt-8">Our Mission:</h4>
                    <p className="py-6 text-justify mt-8">
                        ImageTransMorph is dedicated to providing a hassle-free and efficient image conversion
                        experience. We believe in empowering users with the ability to effortlessly convert images
                        between various formats, making it easier for you to integrate visuals across different
                        platforms and devices.
                    </p>
                </div>
                <div>
                    <h2 className="text-5xl font-bold text-center mt-8">Key Features:</h2>
                    <ul className="list-disc list-inside py-6">
                        <div className='font-bold'>Versatile Format Support:</div>
                        <li>ImageTransMorph supports a wide range of image formats, including JPEG, PNG, WEBP, AVIF,
                            TIFF, and BMP.
                        </li>
                        <div className='font-bold'>Intuitive Interface:</div>
                        <li>Our user-friendly interface ensures a smooth and straightforward conversion process.</li>
                        <div className='font-bold'>Quick and Efficient:</div>
                        <li>We understand the value of time. That&apos;s why ImageTransMorph is designed to deliver speedy
                            conversions without compromising on quality.
                        </li>
                        <div className='font-bold'>Privacy and Security:</div>
                        <li>Your privacy is our priority. Rest assured that your uploaded images are handled with the utmost care. ImageTransMorph ensures a secure and confidential environment for all your conversion needs.</li>
                    </ul>
                </div>
                <div>
                <h2 className="text-5xl font-bold text-center mt-8">How It Works:</h2>
                    <ol className="list-decimal list-inside py-6">
                        <div className='font-bold'>Upload Your Image:</div>
                        <li>Begin by uploading the image you wish to convert. Our platform supports various file sizes,
                            ensuring flexibility for all your projects.
                        </li>
                        <div className='font-bold'>Choose Your Format:</div>
                        <li>Select the target format for your image conversion. With support for
                            multiple formats, you have the freedom to adapt your visuals to different requirements.
                        </li>
                        <div className='font-bold'>Download Your Transformed Image:</div>
                        <li>Once the conversion is complete, simply download your
                            transformed image. It&apos;s that easy!
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
