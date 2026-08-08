class List {
    constructor(title, items) {
        this.title = title;
        this.items = items;
    }
}

const list = new List("List", ["read emails", "write report", "tidy desk"]);
displayList(list);

function displayList(list) {
    const container = document.getElementById("list");

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