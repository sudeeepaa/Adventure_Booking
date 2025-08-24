import Image from "next/image";

type UnsplashImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export default function UnsplashImage({
  src,
  alt,
  className = "",
  width = 400,
  height = 300,
}: UnsplashImageProps) {
  return (
    <div className={`overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300"
        priority={false}
      />
    </div>
  );
}