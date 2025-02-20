const urlInput = document.getElementById('url-input');
const displayButton = document.getElementById('display-button');
const iframeArea = document.getElementById('iframe-area');

const blacklist = [
  'https://proxysite.com',
  'https://www.croxyproxy.rocks/_ja/',
  'https://proxyium.com/ja/',
  'https://www.blockaway.net/_ja/'
];

displayButton.addEventListener('click', () => {
  const url = urlInput.value;

  if (isValidURL(url) && !isBlacklisted(url)) {
    iframeArea.src = url;
  } else {
    alert('Invalid URL or blacklisted.');
  }
});

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

function isBlacklisted(url) {
  return blacklist.includes(url);
}