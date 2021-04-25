

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


}

