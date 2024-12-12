import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

type ProductImageProps = {
  src: string | StaticImageData;
  alt: string;
  placeholder: string | StaticImageData;
  fill?: boolean;
  objectFit?: "contain" | "cover";
};

export default function ImageX({
  src,
  alt,
  placeholder,
  fill = false,
  objectFit = "contain",
}: ProductImageProps) {
  const stringSrc = src.toString();
  const isCorrectSrc =
    stringSrc.startsWith("/") ||
    stringSrc.startsWith("http://") ||
    stringSrc.startsWith("https://");
  const [imageSrc, setImageSrc] = useState(isCorrectSrc ? src : placeholder);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill={fill}
      className="w-full rounded-sm"
      style={{ objectFit: objectFit }}
      onError={() => setImageSrc(placeholder)}
      // Устанавливаем плейсхолдер в случае ошибки
    />
  );
}
