function swapImage() {
    const imageDisplayed = document.getElementById('display-image');
    const descriptionText = document.getElementById('descriptionText');
    const lineText = document.getElementById('lineText');
    const factText = document.getElementById('fact');

    if (imageDisplayed.src.match("images/wenny-and-sejjy.png")) {
        imageDisplayed.src = "images/us.jpg";
        imageDisplayed.classList.add('dinosaur-image'); // Apply CSS class
        lineText.classList.add('indented');
        lineText.innerHTML = "We are <strong>Wenny</strong> and <strong>Sejjy</strong>.";
        factText.style.display = "block"; // Show the fact paragraph
        descriptionText.style.display = "none"; // Hide the description paragraph
        lineText.style.display = "none"; // Hide the line paragraph
    } else {
        imageDisplayed.src = "images/wenny-and-sejjy.png";
        imageDisplayed.classList.remove('dinosaur-image'); // Remove CSS class
        lineText.classList.remove('indented');
        lineText.innerHTML = "We are <strong>Jesse</strong> and <strong>Oana</strong>.";
        factText.style.display = "none"; // Hide the fact paragraph
        descriptionText.style.display = "block"; // Show the description paragraph
        lineText.style.display = "block"; // Show the line paragraph
    }
}

// Function to toggle play/pause of audio
function toggleAudio() {
    var audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Automatically start playing the music when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bg-music');
    audio.play();
});