document.getElementById('clickButton').addEventListener('click', function() {
    const counterElement = document.getElementById('counter');
    let count = parseInt(counterElement.innerText);
    count++;
    counterElement.innerText = count;

    const buttonImage = document.querySelector('.button-image');

    // Shrink the image
    buttonImage.classList.add('shrink');

    // After shrinking, expand the image back
    setTimeout(() => {
        buttonImage.classList.remove('shrink');
        buttonImage.classList.add('expand');

        // After expanding, return to the original size
        setTimeout(() => {
            buttonImage.classList.remove('expand');
        }, 300); // Animation duration
    }, 300);
});
