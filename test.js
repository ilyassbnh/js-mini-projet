//add new name 
addNameBtn.addEventListener("click",function addition() {
    //une variable pour l'ajout d'un li
    const newLi = document.createElement("li")
    // remplisage du li 

    //condition si user insert un num ou vide ou symbole
    if (newLi.value == "" || /\d/.test(newLi.textContent) || /[^a-zA-Z0-9\\s]/.test(newLi.textContent)) {
        showModal("invalid input","none")        
        inpName.value = ""
        return
    }
    //si user inset string
    newLi.textContent=inpName.value
    list.appendChild(newLi)
    inpName.value=""
})