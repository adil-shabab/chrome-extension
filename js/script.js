let myTabs = []
const inputEl = document.getElementById('input-el')
const saveInputBtn = document.getElementById('inp-btn')
const saveTabBtn = document.getElementById('tab-btn')
const deleteBtn = document.getElementById('dlt-btn')

function renderTabs(){
    let listItems = ""
    for(let i=0; i < myTabs.length; i++){
        listItems += `
        <li>
            <a target="_blank" href='${myTabs[i]}'>
                ${myTabs[i]}
            </a>
        </li>
        `
    }
}

saveInputBtn.addEventListener("click", function(){

})



console.log(myTabs)