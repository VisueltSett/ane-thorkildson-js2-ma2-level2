import createList from "./createList.js";

export default function deleteButton() {
    const deleteBtn = document.querySelectorAll("li i");

    deleteBtn.forEach(function (trashcan) {
        trashcan.addEventListener("click", deleteItem);
    });
    function deleteItem() {

        if(confirm("Are you sure you want to remove this item?")) {
            localStorage.removeItem(storedList);
            createList(myList);
        }
    }
}
