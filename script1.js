document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ JavaScript Loaded!");

    // Declare elements
    const searchBtn = document.querySelector('#search-btn');
    const searchBar = document.querySelector('.search-bar-container');
    const formBtn = document.querySelector('#login-btn');
    const loginForm = document.querySelector('.login-form-container');
    const formClose = document.querySelector('#form-close');
    const menu = document.querySelector('#menu-bar'); // Menu toggle button
    const navbar = document.querySelector('header .navbar'); // Navbar links
    const videoBtns = document.querySelectorAll('.vid-btn'); // Video buttons
    const contactBtn = document.querySelector('#choose-faculty-btn'); // Renamed button
    const facultyInput = document.getElementById('faculty'); // Faculty textarea
    const facultySelect = document.getElementById('faculty-select'); // Select element for faculty
    
    console.log("JavaScript loaded successfully."); // Debugging

    // Function to remove active classes on scroll
    const handleScroll = () => {
        searchBtn?.classList.remove('fa-times');
        searchBar?.classList.remove('active');
        menu?.classList.remove('fa-times');
        navbar?.classList.remove('active');
        loginForm?.classList.remove('active');
    };

    // Debounce function for scroll optimization
    const debounce = (func, delay = 100) => {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(func, delay);
        };
    };

    // Apply debounce to scroll event
    window.addEventListener('scroll', debounce(handleScroll));

    // Toggle search bar visibility
    searchBtn?.addEventListener('click', () => {
        searchBtn.classList.toggle('fa-times');
        searchBar.classList.toggle('active');
    });

    // Show login form
    formBtn?.addEventListener('click', () => loginForm?.classList.add('active'));

    // Hide login form
    formClose?.addEventListener('click', () => loginForm?.classList.remove('active'));

    // Toggle menu on mobile
    menu?.addEventListener('click', () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    // Handle video button clicks
    videoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.controls .active')?.classList.remove('active');
            btn.classList.add('active');

            const videoSlider = document.querySelector('#video-slider');
            if (videoSlider) {
                videoSlider.src = btn.getAttribute('data-src');
            }
        });
    });

    // Function to enable smooth scrolling
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.warn(`⚠️ Target section '${target}' not found!`);
        }
    };

    // Function to update the faculty textarea with the selected option
    function updateFacultyTextarea() {
        facultyInput.value = facultySelect.options[facultySelect.selectedIndex].text;
    }

    // Initialize the faculty textarea with the default selected option
    updateFacultyTextarea();

    // Add event listener to the faculty select to update the textarea on change
    facultySelect.addEventListener('change', updateFacultyTextarea);

    // Modify the contact button to be "Choose Faculty" and handle the selection
    if (contactBtn) {
        contactBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default button behavior
            // Simulate a click on the select element to open it
            facultySelect.dispatchEvent(new MouseEvent('mousedown', {
                view: window,
                bubbles: true,
                cancelable: true
            }));
        });
    }
});