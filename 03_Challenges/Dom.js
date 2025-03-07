// Question:

// You are tasked with creating a shopping list application that allows users to add, edit, and delete items from the list. The application should include the following functionalities:

// Add Item: A user can enter an item in an input field and add it to the shopping list.
// Edit Item: A user can edit the text of an existing item in the list.
// Remove Item: A user can remove an item from the list.
// Requirements:

// When the "Add Item" button is clicked, the item should be added to the list and displayed on the page.
// Each item in the list should have an "Edit" button that allows the user to modify the item.
// Each item should also have a "Remove" button that removes the item from the list and updates the underlying array that stores the list items.
// In-depth Task:
// Adding an Item:

// The addItem() function should:
// Check if the input field is empty; if so, display an alert asking the user to enter an item.
// Create a new list item (<li>) that contains the item text, an "Edit" button, and a "Remove" button.
// Append the new item to the list displayed on the page.
// Store the item in an array that tracks the current list.
// Editing an Item:

// The editItem() function should:
// Allow the user to edit the text of the list item by displaying a prompt with the current text pre-filled.
// Update the item text in the list and also update the corresponding item in the array.
// Ensure that the array stays synchronized with the displayed list, i.e., when the text is edited, the array should reflect the new text.
// Removing an Item:

// The removeItem() function should:
// Remove the corresponding list item from the DOM when the "Remove" button is clicked.
// Remove the item from the array to ensure the data is up-to-date.