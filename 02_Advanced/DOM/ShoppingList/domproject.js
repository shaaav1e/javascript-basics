document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const input = document.getElementById("input");
    const mainDiv = document.getElementById("main");

    // Create a list container
    const listContainer = document.createElement("ul");
    listContainer.id = "shopping-list";
    mainDiv.appendChild(listContainer);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const itemText = input.value.trim();
        if (itemText === "") {
            alert("Please enter an item!");
            return;
        }

        addItem(itemText);
        input.value = ""; // Clear input field
    });

    function addItem(text) {
        const listItem = document.createElement("li");
        listItem.className = "list-item";
        listItem.textContent = text;

        // Create a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function () {
            listItem.remove();
        });

        listItem.appendChild(deleteBtn);
        listContainer.appendChild(listItem);
    }
});

