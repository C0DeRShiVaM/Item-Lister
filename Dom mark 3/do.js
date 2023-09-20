// let form = document.querySelector('#addForm');
// let itemList = document.querySelector('#items');
// let filter = document.querySelector('#filter');

// // submitting form using submit event
// form.addEventListener('submit', addItem);

// //Add item
// function addItem(e){
//     e.preventDefault();

//     // Get input value
//     let newItem = document.querySelector('#item').value;

//     // Create new li elememt
//     let li = document.createElement('li');
//     // Add class
//     li.className = 'list-group-item';
//     // Add text node with input value
//     li.appendChild(document.createTextNode(newItem)); // here the textNode will be whatever form returns

//     // get description input value
//     let description = document.querySelector('#description').value;
//     let descriptionText = document.createTextNode(" " + description);
//     li.appendChild(descriptionText);


//     // create del button element
//     let deleteBtn = document.createElement('button');

//     // Add classes to del button
//     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//     // append text node
//     deleteBtn.appendChild(document.createTextNode('X'));

//     // Append button to li
//     li.appendChild(deleteBtn);

//     // Append li to list
//     itemList.appendChild(li);
//     // Add edit button next to the delete icon
//     let editButton = document.createElement('button');
//     editButton.className = 'btn btn-primary btn-sm float-right edit';
//     editButton.appendChild(document.createTextNode('Edit'));
//     li.appendChild(editButton);
//     itemList.appendChild(li);
// }


// // Add edit buttons to pre-written items on page load
// document.addEventListener('DOMContentLoaded', function () {
//     let items = itemList.getElementsByTagName('li');
//     for (let i = 0; i < items.length; i++) {
//         let editButton = document.createElement('button');
//         editButton.className = 'btn btn-primary btn-sm float-right edit';
//         editButton.appendChild(document.createTextNode('Edit'));
//         items[i].appendChild(editButton);
//     }
// });


// // Deleting list using click event
// itemList.addEventListener('click', removeItem);
// // remove
// function removeItem(e){
//     if (e.target.classList.contains('delete')){
//         if(confirm('are you sure?')){
//             let li = e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }


// // filtering list using keyup event
// filter.addEventListener('keyup', filterItems);

// // Filter Items
// function filterItems(e){
//     // convert text to lowercase
//     let text = e.target.value.toLowerCase();
//     // grab all the li's within the itemList
//     let items = itemList.getElementsByTagName('li');
//     // convert to an array because the list will shown in html collection
//     let itemsArray = Array.from(items);

//     // loop through the items and hide/show them based on the text
//     for (let item of itemsArray) {
//         let itemName = item.firstChild.textContent;
//         let descriptionPart = item.childNodes[1].textContent;
//         if (itemName.toLowerCase().indexOf(text) != -1 || descriptionPart.toLowerCase().indexOf(text) != -1) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     }
// }




let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let filter = document.querySelector('#filter');

// submitting form using submit event
form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    // get input value
    let newItem = document.querySelector('#item').value;

    //create new li element
    let li = document.createElement('li');
    li.className = 'list-group-item';
    let textNode = document.createTextNode(newItem);
    li.appendChild(textNode);

    //create description input value
    let description = document.querySelector('#description').value;
    let descriptionText = document.createTextNode(" " + description);
    li.appendChild(descriptionText);

    // create delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    let dButtonText = document.createTextNode('X');
    deleteBtn.appendChild(dButtonText);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    // create edit button
    let editButton = document.createElement('button');
    editButton.className = 'btn btn-primary btn-sm float-right edit';
    let eButtonText = document.createTextNode('edit');
    editButton.appendChild(eButtonText);
    li.appendChild(editButton);

}

// add editButtons to pre written items on page load
document.addEventListener('DOMContentLoaded', preEdit);
function preEdit(){
    let items = itemList.getElementsByTagName('li')
    for (let i = 0; i < items.length; i++){
        let editBtn = document.createElement('button');
        editBtn.className = 'btn btn-primary btn-sm float-right edit';
        let ebtnTxt = document.createTextNode('edit');
        editBtn.appendChild(ebtnTxt);
        items[i].appendChild(editBtn);
    }
}

// deleting list using click event
document.addEventListener('click', removeItem);
function removeItem(e){
    if (e.target.classList.contains('delete')){
        if (confirm('are you sure')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// filter items using keyup event
filter.addEventListener('keyup', filterItems);

function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // grab all the li's within the itemList
    let items = itemList.getElementsByTagName('li');
    // convert the listItems into array
    let itemsArray = Array.from(items);

    // loop through the items and hide/show them based upon the text
    for (item of itemsArray){
        let itemName = item.firstChild.textContent;
        let descriptionPart = item.childNodes[1].textContent;
        if (itemName.toLowerCase().indexOf(text) != -1 || descriptionPart.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    }
}
