// Menu Button Handling
const hamButton = document.querySelector('#menu-toggle');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Active Link Handling
document.addEventListener("DOMContentLoaded", function () {
    // Get all the nav items
    const navItems = document.querySelectorAll('#navigation .nav-item a');

    // Remove active class from all items and add to the current one
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });

        // If the current URL matches the href, set it as active
        if (item.href === window.location.href) {
            item.classList.add('active');
        }
    });
});
