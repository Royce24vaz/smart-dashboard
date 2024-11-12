const lamp = document.querySelector('.lamp');
const container = document.querySelector('.container');
const maincontent = document.querySelector('.maincontent'); // Corrected class name

lamp.addEventListener('click', function() {
    // Toggle body background between day/night mode
    document.body.classList.toggle('day-mode');
    document.body.classList.toggle('night-mode');
    
    // Toggle day/night mode for container and main content
    container.classList.toggle('day-mode');
    container.classList.toggle('night-mode');

    // main content day/night
    maincontent.classList.toggle('day-mode');
    maincontent.classList.toggle('night-mode');

    // Toggle lamp on/off state
    this.classList.toggle('on'); // Add this if you want to animate the lamp on/off
});
