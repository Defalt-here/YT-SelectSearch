document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input-field");
    var finalValue
document.getElementById("button").addEventListener("click", function () {
    const inputValue = inputField.value;
    chrome.storage.local.set({ inputValue });
    chrome.storage.local.get("inputValue", (result) => {
    inputField.value = result.inputValue;
    finalValue = result.inputValue;
    });
});
});