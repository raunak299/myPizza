

const pizzaContainer = document.querySelector('.pizza');
const pizzaBaseContainer = document.querySelector('.pizza-base-container');
const pizzaIngredientsContainer = document.querySelector('.pizza-ingredients-container');
const pizzaBaseList = document.querySelectorAll('.pizza-base-container img');
const ingredientsList = document.querySelectorAll('.pizza-ingredients-container img');
const instruction = document.querySelector('.instruction');
const reload = document.querySelector('.pizza-reset img');
console.log(ingredientsList);


let draggedElement;

pizzaBaseList.forEach((item)=>{
   item.addEventListener('dragstart',(event)=>{
    draggedElement=event.target;
    console.log(draggedElement) })
})

ingredientsList.forEach((item)=>{
    item.addEventListener('dragstart',(event)=>{
     draggedElement=event.target;
     console.log(draggedElement) })
 })



pizzaContainer.addEventListener('dragover',(event)=>{
    event.preventDefault();
    console.log('dragover');
})

pizzaContainer.addEventListener('drop',()=>{
    let tempElement= draggedElement.cloneNode(true);
    pizzaContainer.appendChild(tempElement);
    console.log('drop');
    pizzaBaseContainer.classList.add('hidden');
    pizzaIngredientsContainer.classList.add('show');
    console.log(instruction)
    instruction.innerHTML = "Drag Topping "
})

reload.addEventListener('click',()=>{
  pizzaContainer.innerHTML='Drop Here';
  pizzaBaseContainer.classList.remove('hidden');
  pizzaIngredientsContainer.classList.remove('show');
  instruction.innerHTML = "Drag one Pizza Base "

})

