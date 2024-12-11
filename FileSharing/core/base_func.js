
function encodeToBase64(str) {
  try {
    return btoa(unescape(encodeURIComponent(str))); // Handles Unicode strings
  } catch (error) {
    console.error("Encoding Error:", error);
    return null;
  }
}


function decodeFromBase64(base64) {
  try {
    return decodeURIComponent(escape(atob(base64))); // Handles Unicode strings
  } catch (error) {
    console.error("Decoding Error:", error);
    return null;
  }
}

