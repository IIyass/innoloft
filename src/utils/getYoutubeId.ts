export const getYoutubeId = (url: string) => {
  const videoIdRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i;
  const match = url.match(videoIdRegex);

  if (match && match[1].length === 11) {
    return match[1];
  } else {
    return null;
  }
};
