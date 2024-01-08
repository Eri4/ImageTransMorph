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
                    <p className="py-6">This is a free image convertor project done by Ermir Jace and Stavro Bidika, it is free and no data is saved or persisted.</p>
                </div>
            </div>
        </div>
    )
}