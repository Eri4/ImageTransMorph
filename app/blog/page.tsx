import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'ImageTransMorph Blog',
    description: 'More in depth info about the convertor and future road maps'
}
export default async function About() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <main className="flex-grow p-4">
                <article className="mb-4 text-center">
                    <h2 className="text-4xl font-bold mb-2 text-center">Introduction to ImageTransMorph</h2>
                    <p className="text-lg leading-relaxed">do e shtojme info per seo ketu</p>
                </article>
            </main>
        </div>


    )
}