// Array to store the initial list of freelancers
const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 }
];

// function to display freelancers on the webpage 
function displayFreelancers() {
    const freelancerTableBody = document.querySelector('#freelancer-table tbody'); // queryselector to get the table body element - * remember to add space when querying a child element **
    freelancerTableBody.innerHTML = ''; 

    // foreach method to loop through the freelancers array - arrow function

    freelancers.forEach(freelancer => {
        const row = document.createElement('tr'); // new table row element

        // create a cell for the name -- append
        //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
        const nameCell = document.createElement('td');
        nameCell.textContent = freelancer.name;
        row.appendChild(nameCell);

        // create cell for the occupation
        const occupationCell = document.createElement('td');
        occupationCell.textContent = freelancer.occupation;
        row.appendChild(occupationCell);

        // create cell for the price
        const priceCell = document.createElement('td');
        priceCell.textContent = `$${freelancer.price}`;
        row.appendChild(priceCell);

        // Append the row to the table body
        freelancerTableBody.appendChild(row);
    });

    updateAveragePrice(); // call the function to update the average price displayed
}

// function to calculate and show on webpage the average starting price of all freelancers
function updateAveragePrice() {
    const averagePrice = freelancers.reduce((total, freelancer) => total + freelancer.price, 0) / freelancers.length;
    document.getElementById('average-price').textContent = averagePrice.toFixed(2);
}

// Function to add a new freelancer to the array and update the display
function addFreelancer(name, occupation, price) {
    freelancers.push({ name, occupation, price });
    displayFreelancers(); // render the freelancer list again and update the average price
}

// generating a new freelancer with random name, occupation, and price
function generateRandomFreelancer() {
    const names = ["Carol", "Dave", "Eve", "Frank", "Prof. Possibility", "Dr. Pressure", "Prof. Prism", "Dr. Wire", "Prof. Goose"];
    const occupations = ["Programmer", "Designer", "Engineer", "Artist", "Teacher", "Driver", "Mechanic"];
    const randomName = names[Math.floor(Math.random() * names.length)]; // random name being selected
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)]; // a random occupation
    const randomPrice = Math.floor(Math.random() * 100) + 20; // random price being generated between 20 and 120
    addFreelancer(randomName, randomOccupation, randomPrice); // Add the new freelancer to the list
}

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
document.addEventListener('DOMContentLoaded', () => {
    displayFreelancers(); // displays the original list of freelancers soon as the page comes up / loads
    setInterval(generateRandomFreelancer, 3000); // Aad a new freelancer every 3 seconds
});
