// ADD OPEN CLASS
const hamButton = document.querySelector('#menu-toggle');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// ADD ACTIVE CLASS TO THE NAV WHEN CLICKED 
document.addEventListener('DOMContentLoaded', function () {
    const navigationLinks = document.querySelectorAll('.navigation a');

    navigationLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const currentActive = document.querySelector('.navigation a.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            link.classList.add('active');
            console.log('Link clicked');
        });
    });
});

