let videoSelector = 'ytd-grid-video-renderer';
let shortSelector = '#thumbnail';

//Get body for Observer (todo on videos container div)
let body = document.querySelector('body');

//Observ for change
let observer = new MutationObserver(mutationRecords => {
 this.getShort();
});

// observer params
observer.observe(body, {
    childList: true,
    subtree: true,
    characterDataOldValue: false
});

function getShort() {
    let videos = document.querySelectorAll(videoSelector);
    videos.forEach((elem) => {
        let thumb = elem.querySelector(shortSelector);
        if (thumb != null && thumb.href.includes("/shorts")) {
            elem.hidden = 'hidden';
        }
    });
}