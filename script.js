//Method 2
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert("Hello There!");

//Method 3
const btn3 = document.querySelector('#btn3');
btn3.addEventListener("click", () => {
    alert("Hello There!");
});

//Playing with Method 3
const btn4 = document.querySelector('#btn4');
btn4.addEventListener("click", function (e) {
    console.log(e.target);
    e.target.style.background = 'yellow';
});

//buttons is a node list - iterate through each button
//and change font color to red
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=> {
  button.addEventListener("click", (e) => {
    e.target.style.color = "red";
  });
});


