let myTabs = []
const inputEl = document.getElementById('input-el')
const saveInputBtn = document.getElementById('inp-btn')
const saveTabBtn = document.getElementById('tab-btn')
const deleteBtn = document.getElementById('dlt-btn')
let ulEl = document.getElementById('ul-el')

saveInputBtn.addEventListener("click", function(){
    myTabs.push(inputEl.value)
    inputEl.value = ""
    inputEl.focus()
    renderTabs()
})

deleteBtn.addEventListener("click", function(){
    myTabs = []
    renderTabs()
})

function renderTabs(){
    listItems = ""
    for(let i=0; i < myTabs.length; i++){
        listItems += `
        <li>
            <a target='_blank' href='${myTabs[i]}'>
                ${myTabs[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}





