const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const desciptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");
const ul = document.getElementById('unorderedLists');
const removeLastItemButton = document.querySelector('.removeLastItemButton');



toggleList.addEventListener('click', ()=>{                           
  if(listDiv.style.display == 'none'){
  toggleList.textContent = 'hide list';
  listDiv.style.display = 'block';                        

  }else {
  toggleList.textContent = 'show list';
  listDiv.style.display = 'none';                        
  }

});
addItemButton.addEventListener('click', ()=>{
 let li = document.createElement('li');
 li.textContent = addItemInput.value;
 addItemInput. value = '';
 ul.appendChild(li);
                               
});

removeLastItemButton.addEventListener('click', ()=>{
 let li = document.querySelector('li:last-child');
 ul.removeChild(li);
                               
});

desciptionButton.addEventListener('click', ()=>{
 descriptionP.textContent = descriptionInput.value + ': ';
 descriptionInput.value ='';
});



