const form = document.querySelector("form");
let userInput = document.querySelector("#todotask");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let task = event.target.todotask.value;
  let description = event.target.description.value;
  let date = new Date();
  const wraptask = document.createElement("div");
  wraptask.className = "wraptask";
  wraptask.innerHTML = `
    <div class="taskitems">
    <h3 id="tasktitle">${task}</h3>
    <p id="taskdesc">${description}</p>
    </div>
    <div id="actions">
    <span id="date">${date.toDateString()}</span>
    <span id="time">${date.toLocaleTimeString()}</span>  
    <div>
    <i class="fa-solid fa-trash-can" id="btn"></i>
    </div>    
    </div>
    `;
  document.querySelector("section").appendChild(wraptask);
  delet();
  form.reset();
});

function delet() {
  let delet = document.querySelector("#btn");
  delet.addEventListener("click", (event) => {
    event.preventDefault();
    let removebtn = event.target.parentNode.parentNode.parentNode;
    removebtn.remove();
  });
}
