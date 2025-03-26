document.getElementById('start').addEventListener('click', () => {
    const interval = parseInt(document.getElementById('interval').value) * 60 * 1000; // Convert minutes to milliseconds
    if (interval > 0) {
      chrome.runtime.sendMessage({ action: "start", interval: interval });
      document.getElementById('status').textContent = `Status: Running every ${interval / 60000} minutes`;
    }
  });
  
  document.getElementById('stop').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "stop" });
    document.getElementById('status').textContent = "Status: Not running";
  });
  