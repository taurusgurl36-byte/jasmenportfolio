// Use the displayed dimensions after rotating a sideways certificate.
export function getImageLayout(metadata) {
  if (!metadata) return null;
  const { width, height, rotation = 0 } = metadata;
  const isQuarterTurn = Math.abs(rotation) === 90;
  const displayWidth = isQuarterTurn ? height : width;
  const displayHeight = isQuarterTurn ? width : height;
  const transforms = {
    [-90]: `translate(0 ${width}) rotate(-90)`,
    [90]: `translate(${height} 0) rotate(90)`,
    [180]: `translate(${width} ${height}) rotate(180)`,
  };

  return {
    width: displayWidth,
    height: displayHeight,
    ratio: displayWidth / displayHeight,
    transform: transforms[rotation],
  };
}
