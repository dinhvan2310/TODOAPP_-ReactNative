function applyOpacityToHexColor(
  hexColor: string | undefined,
  opacity: number,
): string {
  if (!hexColor) hexColor = '#000000';
  if (hexColor.startsWith('#')) {
    hexColor = hexColor.substring(1);
  }

  // Convert the HEX color to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Create the RGBA color string with the specified opacity
  const rgbaColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  return rgbaColor;
}

export {applyOpacityToHexColor};
