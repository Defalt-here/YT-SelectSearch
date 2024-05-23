var finalValue
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id : "1",
        title : "Search YouTube for \"%s\"",
        contexts: ["selection"],
    })
    
})

chrome.contextMenus.onClicked.addListener(function(info,tab){
    chrome.storage.local.get("inputValue", (result) => {
        finalValue = result.inputValue;
        alert(finalValue)
        });
    baseURL = "https://www.youtube.com/results?search_query="
    var newURL = baseURL + info.selectionText;
    chrome.tabs.create({url: newURL})

})