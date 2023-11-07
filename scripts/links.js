const baseURL = "https://qjnaef15.github.io/wdd230/"; // Replace with your GitHub pages URL
const linksURL = "https://qjnaef15.github.io/wdd230/data/links.json"; // Replace with the correct path to your links.json

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const ul = document.createElement("ul"); // Create a new unordered list
  ul.id = "activity-links"; // Give the list an ID for styling

  weeks.lessons.forEach((week) => {
    const li = document.createElement("li"); // Create a list item for each week
    const a = document.createElement("a"); // Create a link for the lesson
    a.href = `${baseURL}${week.links[0].url}`; // Build the full URL
    a.textContent = `Week ${week.lesson}: ${week.links[0].title}`; // Set link text

    li.appendChild(a); // Append the link to the list item
    ul.appendChild(li); // Append the list item to the unordered list
  });

  // Replace the static content with the dynamic list
  const existingList = document.getElementById("activity-links");
  const parent = existingList.parentNode;
  parent.replaceChild(ul, existingList);
}

getLinks();
