'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends ImageProps {
    fallbackSrc: string;
}

const ImageWithFallback = ({
    src,
    fallbackSrc,
    alt,
    ...rest
}: ImageWithFallbackProps) => {
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <Image
            {...rest}
            src={imgSrc}
            alt={alt}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

export default ImageWithFallback;
