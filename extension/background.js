let potData = [];

//get honeypot links from out config file
fetch(chrome.runtime.getURL("honeypot_config/pots.json"))
  .then(res => res.json())
  .then(json => {
    potData = json.pots || [];
    //once data is loaded we can start monitoring the tab switches etc.
    setupMonitoring(); 
  })
  .catch(err => console.error("Error loading pots data:", err));



function setupMonitoring() {
  //Navigation 
  chrome.webNavigation.onCompleted.addListener(({ url }) => {
    if (potData.some(p => url.startsWith(p))) {
      sendLog(url);
    }
  }, { url: [{ urlMatches: ".*" }] });

  //Tab swaped
  chrome.tabs.onActivated.addListener(({ tabId }) => {
    chrome.tabs.get(tabId, (tab) => {
      if (tab?.url && potData.some(p => tab.url.startsWith(p))) {
        sendLog(tab.url);
      }
    });
  });
}

function sendLog(tabUrl) {
  const logData = {
    url: tabUrl,
    timeAccessed: new Date().toISOString(),
    agent: navigator.userAgent,
  };

  //hosted on render.com free 50 second refresh once down
  fetch("https://honeypotted.onrender.com/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(logData),
  })
  .then(() => chrome.storage.local.set({ lastHoneypotVisit: Date.now() }))
  .catch(console.error);
}
