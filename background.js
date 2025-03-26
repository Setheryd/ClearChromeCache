let intervalId = null;

function clearCache() {
  chrome.browsingData.remove({
    "since": 0 // Clears all cached data
  }, {
    "cache": true
  }, () => {
    console.log("Cache cleared at " + new Date().toLocaleTimeString());
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start") {
    if (intervalId) clearInterval(intervalId); // Clear any existing interval
    intervalId = setInterval(clearCache, message.interval);
    clearCache(); // Clear immediately on start
  } else if (message.action === "stop") {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
});