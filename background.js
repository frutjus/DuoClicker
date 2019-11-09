
chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {urlEquals: 'https://orteil.dashnet.org/cookieclicker/'}
			})],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});

