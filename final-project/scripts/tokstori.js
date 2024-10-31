
// Copyright and Last Modified dates
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear; 

    const lastModified = document.lastModified; 
    document.getElementById("modifiedDate").textContent = lastModified;
});


// Responsive Menu
const mainnav = document.querySelector('.navigation'); 
const hambutton = document.querySelector('#hamburger');


// Add a click event listener to the hamburger
hambutton.addEventListener('click', () => {

    mainnav.classList.toggle('show'); 
    hambutton.classList.toggle('show'); 
    console.log('Menu toggled'); 
});

// CTA button 
const button = document.getElementById('call-button');
if (button) {
    button.addEventListener('click', function() {
        window.location.href = 'journal.html' // add the URL here 
    });
}

// Toggle Section
const toggleTitles = document.querySelectorAll('.toggle-title');

toggleTitles.forEach(title => {
    title.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});

// Display journaling prompts
document.getElementById("prompt-button").addEventListener("click", function() {
    const prompts = [
        "What are you grateful for today?",
        "What is something you're proud of right now?",
        "Describe a recent challenge and how you overcame it.",
        "What's something you learned recently?",
        "What do you want to accomplish this week?",
        "What's your favourite memory of your mother?",
        "Describe a time the Holy Spirit brought you comfort."
    ];
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    document.getElementById("random-prompt").innerText = randomPrompt;
});

// Save Journal Entries - LIST 
document.getElementById('save-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    const content = document.getElementById('entry-content').value; 
    const topic = document.getElementById('topic-select').value;
    const timestamp = new Date().toLocaleString();

    // Create the list object
    const entry = {
        content: content,
        topic: topic,
        timestamp: timestamp
    };

// Retrieve Journal Entries - into a new array
let entries = JSON.parse(localStorage.getItem('journal-entries')) || [];

entries.push(entry);

localStorage.setItem('journal-entries', JSON.stringify(entries));

alert('Entry saved!');
document.getElementById('entry-content').value=""; // clear the textarea after saving

});

// Display Entries in a list at the bottom
document.addEventListener('DOMContentLoaded', function() {
    const entriesContainer = document.getElementById('entries-container');
    const entries = JSON.parse(localStorage.getItem('journal-entries')) || [];

    if (entries.length > 0) {
        entries.forEach((entry, index) => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry-item');
            entryDiv.innerHTML = `
                <strong>Entry ${index + 1} - ${entry.timestamp}</strong><br>
                <em>Topic:</em> ${entry.topic}<br>
                <p>${entry.content}</p>
                <hr>
            `;
            entriesContainer.appendChild(entryDiv);
        });
    } else {
        entriesContainer.innerHTML = "<p>No entries found.</p>";
    }
});


// Toggle visibility of previous entries
document.getElementById('toggle-entries-button').addEventListener('click', function() {
    const entriesContainer = document.getElementById('entries-container');
    if (entriesContainer.style.display === 'none' || entriesContainer.style.display === '') {
        entriesContainer.style.display = 'block';
    } else {
        entriesContainer.style.display = 'none';
    }
});