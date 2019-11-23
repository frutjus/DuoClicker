
chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {urlContains: 'http' /*urlEquals: 'https://orteil.dashnet.org/cookieclicker/'*/}
			})],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});

chrome.pageAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});