class List {
    constructor(title, items) {
        this.title = title;
        this.items = items;
    }
}

const list = new List("List", ["read emails", "write report", "tidy desk"]);
displayList(list);

const generateButton = document.createElement("button");
generateButton.innerText = "Generate next task";
generateButton.addEventListener("click", () => {generateNextItem(list)});
document.body.appendChild(generateButton);

function displayList(list) {
    const container = document.getElementById("list");
    container.replaceChildren();

    const title = document.createElement("h3");
    title.textContent = list.title;

    const ls = document.createElement("ul");

    for(const item of list.items) {
        const renderedItem = document.createElement("li");
        renderedItem.textContent = item;
        ls.appendChild(renderedItem);
    }

    container.appendChild(title);
    container.appendChild(ls);
}

function generateNextItem(list) {
    const nextNum = Math.floor(Math.random() * list.items.length);
    const nextTask = document.createElement("text");
    nextTask.textContent = "Next task: " + list.items[nextNum] + "";
    document.body.append(nextTask);

    list.items.splice(nextNum, 1);
    displayList(list);
}