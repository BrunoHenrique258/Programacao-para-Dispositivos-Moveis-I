export function getYoutubeLinks(videoId: string) {
  return {
    appUrl: `vnd.youtube://${videoId}`,
    webUrl: `https://www.youtube.com/watch?v=${videoId}`,
  };
}
