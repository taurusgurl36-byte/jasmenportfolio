import { getImageLayout } from "../utils/imageLayout";

// Render sideways certificate photos upright without changing the source files.
export default function Photo({ src, alt, metadata, className, onLoad, loading }) {
  if (!metadata?.rotation) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={onLoad}
        loading={loading}
        draggable={false}
      />
    );
  }

  const { width, height } = metadata;
  const layout = getImageLayout(metadata);

  return (
    <svg
      viewBox={`0 0 ${layout.width} ${layout.height}`}
      width={layout.width}
      height={layout.height}
      className={className}
      role="img"
      aria-label={alt}
    >
      <image href={src} width={width} height={height} transform={layout.transform} />
    </svg>
  );
}
