export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return "Your list is currently empty - Feel free to add some new items";
    }


    return JSON.parse(value);
}
