
if (document.readyState === 'complete' || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    onReady()
} else {
    document.addEventListener('DOMContentLoaded', onReady)
}

function onReady() {
    
}