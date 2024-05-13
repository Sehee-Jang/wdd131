document.cookie = "cookieName=cookieValue; SameSite=None; Secure";

// Select the button element with the #menu and store it in the hamButton variable
const hamButton = document.querySelector('#menu');

// Select the nav element with the .navigation and store it in the navigation variable
const navigation = document.querySelector('.navigation');

// Add a click event listener to the hamButton
hamButton.addEventListener('click', () => {
	// Toggle the 'open' class on the navigation element
	navigation.classList.toggle('open');
	// Toggle the 'open' class on the hamButton element
	hamButton.classList.toggle('open');
});

// Function to create temple cards based on the provided data
function createTempleCard(filteredTemples) {

	// Clear the HTML content inside the container element
	document.querySelector(".container").innerHTML = "";

	// Loop through each temple in the filteredTemples array
	filteredTemples.forEach(temple => {
		let templeCard = document.createElement("div");	// Create a dv element to represent the temple card	
		templeCard.classList.add("temple-card");	// Add the 'temple-card' class to the temple card div

		// Create an h2 element for the temple name and set its text content
		let templeName = document.createElement("h2");
		templeName.textContent = temple.templeName;

		let templeLocation = document.createElement("p");
		templeLocation.innerHTML = `<span class="label">Location: </span> ${temple.location}`;

		let dedicatedDate = document.createElement("p");
		dedicatedDate.textContent = "Dedicated: " + temple.dedicated;

		let area = document.createElement("p");
		area.textContent = "Size: " + temple.area + "sq ft";

		// Create an img element for the temple image, set its attributes, and lazy load the image
		let image = document.createElement("img");
		image.src = temple.imageUrl;
		image.alt = temple.templeName;
		image.loading = "lazy";

		// Append all created elements to the temple card div
		templeCard.appendChild(templeName);
		templeCard.appendChild(templeLocation);
		templeCard.appendChild(dedicatedDate);
		templeCard.appendChild(area);
		templeCard.appendChild(image);

		// Append the temple card div to the container element
		document.querySelector(".container").appendChild(templeCard);
	});
}

// Add click event listeners to all navigatio links
document.querySelectorAll('.navigation a').forEach(link => {
	// Add an event listenr to the current link
	link.addEventListener('click', () => {
		// Remove 'active' class from all nav links
		document.querySelectorAll('.navigation a').forEach(navLink => {
			navLink.classList.remove('active');
		});
		// Add 'active class to the clicked nav link
		link.classList.add('active');

		// Get the text content of the clicked link
		const filterType = link.textContent.toLowerCase();

		// Switch statement to filter temples based on the clicked link
		switch (filterType) {
			case 'old':
				filterTemples(temple => new Date(temple.dedicated).getFullYear() < 1900);
				break;
			case 'new':
				filterTemples(temple => new Date(temple.dedicated).getFullYear() > 2000);
				break;
			case 'large':
				filterTemples(temple => temple.area > 90000);
				break;
			case 'small':
				filterTemples(temple => temple.area < 10000);
				break;
			case 'home':
				createTempleCard(temples);
				break;
			default:
				break;
		}
	})
});

// Function to filter temples based on a given condition
function filterTemples(condition) {
	// Filter the temples arrays based on the provided condition
	const filteredTemples = temples.filter(condition);
	// Call the createTempleCard function with the filtered temples array
	createTempleCard(filteredTemples);
}

// Array of temple data objects
const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Seoul Korea Temple",
		location: "Seoul, South Korea",
		dedicated: "14 December 1985",
		area: 28057,
		imageUrl:
			"https://churchofjesuschrist.org/imgs/57efcc4b6a1c664c934aa672b0f8de38a8f539c4/full/320%2C/0/default"
	},
	{
		templeName: "Manhattan New York Temple",
		location: "New York, United States",
		dedicated: "Renovation",
		area: 20630,
		imageUrl:
			"https://churchofjesuschrist.org/imgs/10d301a0129c0909bf960b27157541a8ee22af64/full/320%2C/0/default"
	},
];

createTempleCard(temples);

// const nonutahLink = document.querySelector("#nonutah");

// nonutahLink.addEventListener("click", () => {
// 	createTempleCard(temples.filter(temple => !temple.location.toLowerCase().includes("utah")));
// });