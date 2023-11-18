const request = window.indexedDB.open("Test", 3);
console.log(request, 'request');


request.onerror = (event) => {
  console.error("Why didn't you allow my web app to use IndexedDB?!"); 
}

request.onsuccess = (event) => {
  db = event.target.result;
  console.log(db)
}