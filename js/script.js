import createList from "./components/createList.js";
import { saveToStorage, getFromStorage } from "./utils/storage.js";
import {storedList} from "./settings.js";



let myList = getFromStorage(storedList);
createList(myList);




const inputValue = document.querySelector("input");
const addToListBtn = document.querySelector("button");

addToListBtn.addEventListener("click", addListItem);

function addListItem() {
    const newListItem = inputValue.value.trim();

    if (newListItem.length >= 1) {
        const itemToAdd = {name: newListItem, id: Date.now()};
        inputValue.value = "";
        inputValue.focus();
        myList.push(itemToAdd);

        createList(myList);
        saveToStorage(storedList, myList);
    }

    console.log(myList);
}
