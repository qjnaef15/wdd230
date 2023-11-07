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
  
      const weekLabel = document.createElement("span");
      weekLabel.textContent = `Week ${week.lesson}:`;
  
      // Create a sub-ul to hold multiple links within a lesson
      const subUl = document.createElement("ul");
      week.links.forEach((link) => {
        const subLi = document.createElement("li"); // Create a list item for each link
        const a = document.createElement("a"); // Create a link for the lesson
        a.href = `${baseURL}${link.url}`; // Build the full URL
        a.textContent = link.title; // Set link text
  
        const linkSeparator = document.createElement("span");
        linkSeparator.textContent = " | "; // Add a separator between links
  
        subLi.appendChild(a); // Append the link to the list item
        subLi.appendChild(linkSeparator); // Append the separator
        subUl.appendChild(subLi); // Append the list item to the sub-ul
      });
  
      li.appendChild(weekLabel); // Add the week number as a label
      li.appendChild(subUl); // Append the sub-ul to the list item
      ul.appendChild(li); // Append the list item to the main ul
    });
  
    // Replace the static content with the dynamic list
    const existingList = document.getElementById("activity-links");
    const parent = existingList.parentNode;
    parent.replaceChild(ul, existingList);
  }
  
  getLinks();
