// Updated script.js with animations
function showTab(tabId) {
    let tabs = document.querySelectorAll('.tab-content');
    
    // Hide all tabs with fade-out effect
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.style.opacity = 0;
        setTimeout(() => {
            tab.style.display = 'none';
        }, 300); // Match CSS transition time
    });

    // Show the selected tab with fade-in effect
    setTimeout(() => {
        let activeTab = document.getElementById(tabId);
        activeTab.style.display = 'block';
        setTimeout(() => {
            activeTab.style.opacity = 1;
        }, 10); // Small delay for smooth transition
    }, 300);
}

function downloadImage(imageUrl) {
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = "image.png"; // Default filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.getElementById("DownloadExecutor").addEventListener("click", function() {
     downloadImage("https://www.dropbox.com/scl/fi/ief2yh7fchl5f34zm3lcb/Cencatal.zip?rlkey=ww32txqjscfmzotgx7z2o75wo&st=p501vvg5&dl=1");
});
document.getElementById("DownloadEpHacks").addEventListener("click", function() {
    downloadImage("https://www.dropbox.com/scl/fi/6axouedwh5jh45cm21lp1/EPHacks.txt?rlkey=xr59rrrzv704ggtavc7w32tff&st=i6yxoj92&dl=1");
});
