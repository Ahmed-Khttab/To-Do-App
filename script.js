let btn2 = document.querySelector('.btn');
let list = document.getElementById('list-container');

btn2.addEventListener('click', function () {
    let input = document.querySelector('.input-text').value; // Access value on click
    if(input !== ''){
        let li = document.createElement('li');
    li.innerHTML = input;

    let span = document.createElement("span");
    span.innerHTML = "❌";
    li.appendChild(span);

    list.appendChild(li);
    
    document.querySelector('.input-text').value="";
    }
    saveData();

});

list.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        console.log(e.target);
        e.target.classList.toggle('checked');
       
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    
    
    saveData();
})

function saveData(){
    localStorage.setItem("data3",list.innerHTML)
}

function showTask(){
    list.innerHTML = localStorage.getItem("data3");
}
showTask();



