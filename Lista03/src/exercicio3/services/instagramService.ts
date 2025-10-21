export function getInstagramLinks(username: string) {
  return {
    appUrl: `instagram://user?username=${username}`,
    webUrl: `https://www.instagram.com/${username}`,
  };
}
