const themeButtons = document.getElementsByClassName('theme-button');
const themeArr = [...themeButtons];


// Theme radio buttons
themeArr.forEach((element, index) => {
    // addEventListener to radio buttons
    element.addEventListener('click', () => {
        element.style.opacity = "1";

    // Detect which button was clicked and change style
    if (index == 0) {
        
    } else if (index == 1) {
        
    } else {
        
    }

    // Filter themeArr, pick not clicked buttons and set them opacity "0"
    themeArr
        .filter((item) => {
            return item != element;
        })
        .forEach((item) => {
            item.style.opacity = "0";
        });
    });
});
