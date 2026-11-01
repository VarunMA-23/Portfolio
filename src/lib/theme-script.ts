export const THEME_STORAGE_KEY = "theme";

export const themeScript = `(function(){try{var key="${THEME_STORAGE_KEY}";var stored=localStorage.getItem(key);var dark=stored==="dark"||(!stored&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",dark);}catch(e){}})();`;
