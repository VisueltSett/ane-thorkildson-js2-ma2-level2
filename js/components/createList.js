import {storedList} from "../settings.js";
import { saveToStorage } from "../utils/storage.js";


export default function createList(myList) {
    const listContainer = document.querySelector("ul");

    listContainer.innerHTML = "";

    myList.forEach(function (listItem) {
        listContainer.innerHTML += `<li>
                                    <div>Name: <span><h3> ${listItem.name}</h3></span></div>
                                    <p>Id: <span>${listItem.id}</span></p>
                                    <i class="far fa-trash-alt" data-id="${listItem.id}"></i>
                                </li>`;
    });

    const deleteButton = document.querySelectorAll("li i");

    deleteButton.forEach(function (trashcan) {
        trashcan.addEventListener("click", deleteItem);
    });
    

    function deleteItem(event) {
        console.log(event);
    
        if(confirm("Are you sure you want to delete this item?")) {
    
            const deleteThisItem = event.target.dataset.id;

            const myNewList = myList.filter(function (item){
                if(deleteThisItem !== item.id) {
                    return true;
                }
            });

            myList = myNewList;
            createList(myNewList);
            saveToStorage(storedList, myNewList);
        }

    }
}






