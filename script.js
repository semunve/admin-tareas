const btn=document.querySelector("#btnañadir")
const input=document.querySelector("#input")
const lista=document.querySelector("#lista")

btn.addEventListener('click',añadir)

function añadir(){
    const texto=input.value.trim();

    if(texto!==""){
        const item=document.createElement('li')
        item.textContent=texto;

        item.addEventListener('click',tachado)
        lista.appendChild(item)
        input.value=""
    }
}

function tachado(e){
    const item=e.target;
    item.classList.toggle('completado')
}
