const numar = document.getElementById('numar')
const btnAdd = document.getElementById('btnAdd')
const btnMinus = document.getElementById('btnMinus')


//adaugam evenimentele pentru butoane
btnAdd.addEventListener('click', btnAddevent)
btnMinus.addEventListener('click', btnMinusevent)

//daca exista deja valoare salvata a num o afisam, daca nu sa fie afisat 0
let num = Number(localStorage.getItem('num')) || 0
numar.textContent=num


//functia principala, ea va actualiza numarul care se afiseaza si il salveaza, respectiv newnum e noua valoare afisata dupa ce s-a facut click pe +1 sau -1
function update(newNum){
    numar.textContent = newNum
    num = newNum
    localStorage.setItem('num',newNum)
} 

// functiile de mai jos sunt apelate cand utilizatorul da click pe butonul +1 sau -1

function btnAddevent(){
    let newNum = num +1 //setam ca newnum este num curent +1
    update(newNum) //apelam functia pentru a actualiza numarul

}
function btnMinusevent(){
    let newNum = num -1 //la fel ca mai sus
    update(newNum)
    
}
