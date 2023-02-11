const mytask = JSON.parse(task);
console.log(mytask);

for (let val of mytask) { document.getElementById("result").innerHTML += `
<div>
<div class="card" style="width: 100%;">
<img src="${val.pic}" class="card-img-top" alt="${val.task}">
<div class="card-body">
<p class="btn btn-outline-dark prio">Priority Level<p button type="button" class="btn btn-success test">${val.prio}</button> </p> </p>
  <h5 class="card-title">${val.task}</h5>
  <p class="detail">${val.detail}</p>
  <p class="detail">${val.time}</p>
<p class="btn btn-danger delete">Delete!</p>
<p class="btn btn-success done">Done</p>
</div>
</div>
</div>`; }

let prbt = document.getElementsByClassName("prio");

for (let i = 0; i < prbt.length; i++) {
    prbt[i].addEventListener("click", function() {
        mytask[i].prio++;
        console.log(mytask[i].prio);
        document.getElementsByClassName("test")[i].innerHTML = mytask[i].prio;

        if (mytask[i].prio >= 4 && mytask[i].prio <= 5) {
            document.getElementsByClassName("test")[i].style.backgroundColor = "red";
        } else if (mytask[i].prio >= 2 && mytask[i].prio <= 3) {
            document.getElementsByClassName("test")[i].style.backgroundColor = "yellow";
        }
    })

}


// if (mytask.prio >= 2) {
//     document.getElementsByClassName("test").style.backgroundColor = "Yellow";
// } else if (mytask.prio >= 3) {
//     document.getElementsByClassName("test").style.backgroundColor = "red";
// } else {
//     document.getElementsByClassName("test").style.backgroundColor = "green";
// }