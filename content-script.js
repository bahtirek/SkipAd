window.onload = function(){
    const elementToObserveYT = document.querySelector(".ytp-ad-module");

    const observerYT = new MutationObserver(() => {
        const button = document.querySelector(".ytp-ad-skip-button");
        if (button) button.click();
    });

    if(elementToObserveYT)
        observerYT.observe(elementToObserveYT, {subtree: true, childList: true});
}