class List {
    constructor(title, items) {
        this.title = title;
        this.items = items;
    }
}

readTxtFile();

function readTxtFile() {
    const lsInput = document.getElementById("list-input")
    lsInput.addEventListener("change", handleFileSelection);
}

function handleFileSelection() {
    if(this.files.length === 0) {
        // No file selected
        return;
    }

    const reader = new FileReader();
    reader.onload = function fileReadCompleted() {
        console.log(reader.result);
        let lines = reader.result.split("\n");
        initiateList(new List(lines[0], lines.slice(1)));
    };
    reader.readAsText(this.files[0]);
}

function initiateList(list) {
    const outerContainer = document.createElement("div");
    outerContainer.classList.add("listContainer");
    document.getElementById("body-div").appendChild(outerContainer);

    const innerContainer = document.createElement("div");
    innerContainer.id = list.title + "-container";
    outerContainer.appendChild(innerContainer);
    displayList(list);

    const generateButton = document.createElement("button");
    generateButton.innerText = "Generate next task";
    generateButton.classList.add("generate-button");
    generateButton.addEventListener("click", () => {generateNextItem(list)});
    outerContainer.appendChild(generateButton);
}

function displayList(list) {
    let container = document.getElementById(list.title);

    if(container == null) {
        container = document.createElement("div");
        container.id = list.title;
        container.classList.add("list")
        document.getElementById(list.title + "-container").appendChild(container);
    }
    container.replaceChildren();

    const title = document.createElement("h3");
    title.textContent = list.title;
    title.style.textAlign = "center";

    const ls = document.createElement("ul");
    ls.style.margin = "1px";

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
    let nextTask = document.getElementById("next-task");

    if(nextTask == null) {
        nextTask = document.createElement("text");
    }

    nextTask.id = "next-task";
    nextTask.textContent = "Next task: " + list.items[nextNum] + " ";
    document.getElementById(list.title + "-container").parentElement.append(nextTask);

    list.items.splice(nextNum, 1);
    displayList(list);
}