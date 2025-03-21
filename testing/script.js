document.getElementById("colorPicker").addEventListener("input", function() {
    document.getElementById("titulo").style.color = this.value;
});
document.getElementById("paddingInput").addEventListener("input", function() {
    document.getElementById("paddingDiv").style.padding = this.value + "px";
});
document.getElementById("marginInput").addEventListener("input", function() {
    document.getElementById("marginContainer").style.margin = this.value + "px";
});