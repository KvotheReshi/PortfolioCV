import React from "react";

interface PicProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  linkNav?: string;
}

const Pic: React.FC<PicProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
    </>
  );
};

export default Pic;
