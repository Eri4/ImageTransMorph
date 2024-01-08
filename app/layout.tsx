import type {Metadata} from 'next'
import './globals.css'
import NavigationMenuComponent from "@/components/ui/navigationMenuComponent";
import FooterComponent from "@/components/ui/footerComponent";

export const metadata: Metadata = {
    title: 'ImageTransMorph',
    description: 'Convert any image to one of those formats PNG, JPEG, GIF, WebP, AVIF, TIFF, SVG. While keeping no data.',
    icons: {
        icon: '/favicon.png',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-theme="dim">
            <head>
                <title>ImageTransMorph</title>
                <meta name="description" content={metadata.description || ''} />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className="flex flex-col min-h-screen">
                <NavigationMenuComponent/>
                <main className="flex-grow mt-auto">{children}</main>
                <FooterComponent/>
            </body>
        </html>
    );
}