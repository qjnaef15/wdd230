const baseURL = "https://qjnaef15.github.io/wdd230/"; 
const linksURL = "https://qjnaef15.github.io/wdd230/data/links.json"; 

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

    const lessonLabel = document.createElement("span");
    lessonLabel.textContent = `Lesson ${week.lesson}: `;

    const linksDiv = document.createElement("div");
    week.links.forEach((link, index) => {
      const a = document.createElement("a"); // Create a link for the lesson
      a.href = isAbsoluteURL(link.url) ? link.url : new URL(link.url, baseURL).href; // Check if it's an absolute URL or relative
      a.textContent = link.title; // Set link text
      
      linksDiv.appendChild(a); // Append the link to the div
      if (index < week.links.length - 1) {
        const separator = document.createElement("span");
        separator.textContent = " | "; // Add a separator between links
        linksDiv.appendChild(separator);
      }
    });

    li.appendChild(lessonLabel); // Add the lesson title and number on the same line
    li.appendChild(linksDiv); // Append the links
    ul.appendChild(li); // Append the list item to the main ul
  });

  // Replace the static content with the dynamic list
  const existingList = document.getElementById("activity-links");
  const parent = existingList.parentNode;
  parent.replaceChild(ul, existingList);
}

function isAbsoluteURL(url) {
  return /^https?:\/\//i.test(url);
}

getLinks();
