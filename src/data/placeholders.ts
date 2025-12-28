const encode = (input: string) =>
  encodeURIComponent(input)
    .replace(/'/g, "%27")
    .replace(/%20/g, "%20");

const createPlaceholder = (label: string, gradient: string) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'>${gradient}</linearGradient></defs><rect width='1200' height='600' fill='url(#grad)'/><text x='50%' y='48%' dominant-baseline='middle' text-anchor='middle' fill='#f4ecd7' font-family='serif' font-size='42'>${label}</text><text x='50%' y='58%' dominant-baseline='middle' text-anchor='middle' fill='#f4ecd7' opacity='.7' font-family='serif' font-size='20'>Researchers examine the Shroud using chemistry, medical forensics, textile analysis, blood chemistry, ultraviolet photography, radiocarbon dating, and image processing technologies [2][3][4].</text></svg>`;
  return `data:image/svg+xml,${encode(svg)}`;
};

export const PLACEHOLDER_SHROUD = createPlaceholder(
  "Shroud Cloth Overview",
  "<stop offset='0%' stop-color='#3a2f24'/><stop offset='100%' stop-color='#7d6a57'/>",
);

export const PLACEHOLDER_SUDARIUM = createPlaceholder(
  "Sudarium Overlay",
  "<stop offset='0%' stop-color='#213547'/><stop offset='100%' stop-color='#415a69'/>",
);

export const PLACEHOLDER_UV = createPlaceholder(
  "UV Fluorescence",
  "<stop offset='0%' stop-color='#0d1a24'/><stop offset='100%' stop-color='#1d3f66'/>",
);
