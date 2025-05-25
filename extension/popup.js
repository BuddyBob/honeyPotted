// popup.js – reads last detection result (if any) just for display
chrome.storage.local.get("lastHoneypotVisit", ({ lastHoneypotVisit }) => {
  if (!lastHoneypotVisit) return;
  const el = document.getElementById("state");
  el.textContent = "Honeypot access logged";
  el.style.color = "#22c55e";           // green
});
