import sharp from 'sharp';
import {NextRequest, NextResponse} from "next/server";
import assert from "node:assert";
import {inputFormats, outputFormats} from "@/utl/Const";

export async function POST(req: NextRequest) {
    try {
        const data = await req.formData();
        let isAnimated = false;

        const fileData = data.get('file');
        const formatData = data.get('format');

        if (!fileData || !(fileData instanceof File)) {
            return new NextResponse(JSON.stringify({error: 'Invalid file data'}), {status: 400});
        }

        if (typeof formatData !== 'string' && !outputFormats.includes(formatData?.toString() ?? '')) {
            return new NextResponse(JSON.stringify({error: 'Invalid format'}), {status: 400});
        }

        const fileStream = fileData.stream();

        const fileBuffer: Buffer = await new Promise((resolve, reject) => {
            const reader = fileStream.getReader();
            const chunks: (Buffer | Uint8Array)[] = [];

            const pump = async () => {
                try {
                    const { done, value } = await reader.read();
                    if (done) {
                        resolve(Buffer.concat(chunks));
                    } else {
                        chunks.push(value);
                        await pump();
                    }
                } catch (err) {
                    reject(err);
                }
            };

            pump();
        });

        const fileType = await sharp(fileBuffer).metadata();

        if (fileType.format && !inputFormats.includes(fileType.format)) {
            return new NextResponse(JSON.stringify({error: 'Invalid image format'}), {status: 400});
        }

        await sharp(fileBuffer).metadata()
            .then(metadata => {
                if (metadata.pages ?? 0 > 1) {
                    isAnimated = true;
                }
            });

        const convertedImage = await sharp(fileBuffer, {animated: isAnimated}).toFormat(formatData as keyof sharp.FormatEnum).toBuffer();

        return new NextResponse(convertedImage, {
            status: 200,
            headers: {
                'Content-Type': `image/${formatData}`,
            },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({error: 'Internal Server Error'}), {status: 500});
    }
}
