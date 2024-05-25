// Function to suspend a tab
function suspendTab(tabId) {
    chrome.tabs.discard(tabId, function() {
        console.log("Tab with ID " + tabId + " has been suspended");
    });
}

// Checks and suspends inactive tabs
function suspendInactiveTabs() {
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(function(tab) {
            if (!tab.active) {
                suspendTab(tab.id);
            }
        });
    });
}

// After every 60 seconds
setInterval(suspendInactiveTabs, 60000);
