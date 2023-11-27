fetch('data/members.json')
    .then(response => response.json())
    .then(membersData => {
        // Filter members with gold or silver membership
        const goldSilverMembers = membersData.members.filter(member =>
            member.membership.level === "Gold" || member.membership.level === "Silver"
        );

        // Shuffle the array to get random members every load
        const shuffledMembers = getRandomMembers(goldSilverMembers);

        // Take the first three members
        const selectedMembers = shuffledMembers.slice(0, 3);

        // Check if the body has a class for light or dark mode
        const isDarkMode = document.body.classList.contains('dark-mode');

        // Insert members into the HTML
        const spotlightsSection = document.getElementById("spotlights");
        spotlightsSection.innerHTML = ''; // Clear previous content

        // Add a title for Spotlights
        const titleElement = document.createElement("h2");
        titleElement.innerText = "Spotlights";
        spotlightsSection.appendChild(titleElement);

        selectedMembers.forEach(member => {
            // Define background, text, and link colors based on light or dark mode
            const backgroundColor = isDarkMode ? "#333" : "#f2f2f2";
            const textColor = isDarkMode ? "#f2f2f2" : "#333";
            const linkColor = isDarkMode ? "#7ac142" : "#008CBA";

            const spotlightHTML = `
                <div class="spotlight-item" style="background-color: ${backgroundColor}; color: ${textColor};">
                    <h4>${member.name}</h4>
                    <div class="image-container">
                        <img src="${member.image}" alt="${member.name}" style="width: 100px; height: 100px;">
                    </div>
                    <p>${member.address}</p>
                    <p>${member.membership.level} Member</p>
                    <a href="${member.website}" style="color: ${linkColor};">Visit Website</a>
                </div>
            `;

            const spotlightElement = document.createElement("div");
            spotlightElement.innerHTML = spotlightHTML;

            // Add a class to the dynamically inserted div
            spotlightElement.classList.add("spotlight-item");

            spotlightsSection.appendChild(spotlightElement);
        });
    })
    .catch(error => console.error('Error fetching members.json:', error));

// Function to shuffle array elements randomly
function getRandomMembers(array) {
    const shuffled = array.slice(0);
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
