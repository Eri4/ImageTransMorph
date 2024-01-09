import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'About Us',
    description: 'The best image convertor for privacy'
}
export default async function About() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">About Us</h1>
                    <p className="py-6">Welcome to ImageTransMorph - Your Ultimate Image Conversion Tool!

At ImageTransMorph, we understand the importance of seamless image conversion for your creative projects. Whether you're a designer, photographer, or just someone looking to transform images effortlessly, our user-friendly platform is here to simplify the process.

**Our Mission:**
ImageTransMorph is dedicated to providing a hassle-free and efficient image conversion experience. We believe in empowering users with the ability to effortlessly convert images between various formats, making it easier for you to integrate visuals across different platforms and devices.

**Key Features:**
1. **Versatile Format Support:**
   ImageTransMorph supports a wide range of image formats, including JPEG, PNG, WEBP, AVIF, TIFF, and BMP. Whether you need to convert from JPEG to PNG, WEBP to JPG, or any other format, we've got you covered.

2. **Intuitive Interface:**
   Our user-friendly interface ensures a smooth and straightforward conversion process. No technical expertise required – simply upload your image, choose your desired format, and let ImageTransMorph do the rest.

3. **Quick and Efficient:**
   We understand the value of time. That's why ImageTransMorph is designed to deliver speedy conversions without compromising on quality. Say goodbye to long waiting times and hello to instant results.

4. **Privacy and Security:**
   Your privacy is our priority. Rest assured that your uploaded images are handled with the utmost care. ImageTransMorph ensures a secure and confidential environment for all your conversion needs. We want to emphasize that we do not store any photos uploaded to our site, ensuring your content remains yours and yours alone.

**How It Works:**
1. **Upload Your Image:**
   Begin by uploading the image you wish to convert. Our platform supports various file sizes, ensuring flexibility for all your projects.

2. **Choose Your Format:**
   Select the target format for your image conversion. With support for multiple formats, you have the freedom to adapt your visuals to different requirements.

3. **Download Your Transformed Image:**
   Once the conversion is complete, simply download your transformed image. It's that easy!

ImageTransMorph is your go-to destination for seamless image conversion. Join us on a journey where your creative visions transform effortlessly with just a few clicks. Explore the possibilities and elevate your visual content with ImageTransMorph today!</p>
                </div>
            </div>
        </div>
    )
}
