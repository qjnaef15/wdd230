// Assuming you have loaded the members.json data into a variable named 'membersData'

    // Filter members with gold or silver membership
    const goldSilverMembers = membersData.members.filter(member =>
        member.membership.level === "Gold" || member.membership.level === "Silver"
    );

    // Shuffle the array to get random members every load
    const shuffledMembers = goldSilverMembers.sort(() => Math.random() - 0.5);

    // Take the first three members
    const selectedMembers = shuffledMembers.slice(0, 3);

    // Insert members into the HTML
    const spotlightsSection = document.getElementById("spotlights");

    selectedMembers.forEach(member => {
        const spotlightHTML = `
            <div>
                <img src="${member.image}" alt="${member.name}">
                <h4>${member.name}</h4>
                <p>${member.otherInfo}</p>
                <p>${member.membership.level} Member</p>
                <a href="${member.website}">${member.name}</a>
            </div>
        `;

        const spotlightElement = document.createElement("div");
        spotlightElement.innerHTML = spotlightHTML;

        spotlightsSection.appendChild(spotlightElement);
    });