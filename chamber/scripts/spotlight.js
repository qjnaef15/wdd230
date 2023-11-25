fetch('data/members.json')
    .then(response => response.json())
    .then(membersData => {
        // Filter members with gold or silver membership
        const goldSilverMembers = membersData.members.filter(member =>
            member.membership.level === "Gold" || member.membership.level === "Silver"
        );

        // Shuffle the array to get random members every load
        const shuffledMembers = goldSilverMembers.sort(() => Math.random() - 0.5);

        // Take the first three members
        const selectedMembers = shuffledMembers.slice(0, 3);

        // Check if the body has a class for light or dark mode
        const isDarkMode = document.body.classList.contains('dark-mode');

        // Insert members into the HTML
        const spotlightsSection = document.getElementById("spotlights");

        selectedMembers.forEach(member => {
            // Define background, text, and link colors based on light or dark mode
            const backgroundColor = isDarkMode ? "#333" : "#f2f2f2";
            const textColor = isDarkMode ? "#f2f2f2" : "#333";
            const linkColor = isDarkMode ? "#7ac142" : "#008CBA";

            const spotlightHTML = `
                <div class="spotlight-item" style="background-color: ${backgroundColor}; color: ${textColor};">
                    <img src="${member.image}" alt="${member.name}">
                    <h4>${member.name}</h4>
                    <p>${member.address}</p>
                    <p>${member.membership.level} Member</p>
                    <a href="${member.website}" style="color: ${linkColor};">${member.name}</a>
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
