const modalBtn = document.querySelector(".modal__button")
const modal = document.querySelector(".modal")
const modal2 = document.querySelector('.course__button');
const modalInner = modal.querySelector('.modal__inner');

modalBtn.addEventListener("click", () => {
    modal.style.display = "flex"
})

modal2.addEventListener('click', () => {
    modal.style.display = 'flex';
})

modalInner.style.position = 'relative';

let newButton = document.createElement("div")
newButton.innerText = "X";



newButton.style.cssText = `
    font-size:2rem; 
    position:absolute; 
    display:inline; 
    padding:10px; 
    top:2rem; 
    right:2rem; 
    cursor:pointer;`;

modalInner.prepend(newButton)


modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner")
    if (!modalContent) modal.style.display = ""
})

newButton.addEventListener('click', () => {
    modal.style.display = '';
});
