// cookieUtils.js

const COOKIE_KEY = 'cookie_accepted';

export function isCookieAccepted() {
  return localStorage.getItem(COOKIE_KEY) === 'yes';
}

export function acceptCookie() {
  localStorage.setItem(COOKIE_KEY, 'yes');
}

export function showCookieBanner(bannerId = 'cookie-banner', buttonId = 'cookie-accept-btn') {
  const banner = document.getElementById(bannerId);
  const button = document.getElementById(buttonId);

  if (!isCookieAccepted() && banner) {
    banner.style.display = 'flex';
    if (button) {
      button.onclick = () => {
        acceptCookie();
        banner.style.display = 'none';
      };
    }
  }
}

export function salvaInLocalStorage(k, v) {
  if (isCookieAccepted()) localStorage.setItem(k, v);
}

export function recuperaDaLocalStorage(k) {
  return isCookieAccepted() ? localStorage.getItem(k) : '';
}

export function rimuoviDaLocalStorage(k) {
  localStorage.removeItem(k);
}
