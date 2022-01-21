let countClasses = 7;

const addClassBtn = document.querySelector(".add-class-btn");
const removeClassBtn = document.querySelectorAll(".remove-class-btn");
const schedDiv = document.querySelector(".schedule-content");

console.log(removeClassBtn.id);

removeClassBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    countClasses--;
    console.log("CLICKED");
    console.log(btn.id);

    const classField = document.querySelectorAll("#" + btn.id);
    classField.forEach((field) => {
        field.remove();

    })
    //classField.remove();
    console.log("removed");
  });
});

// removeClassBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("CLICKED");
//   console.log(removeClassBtn.id);

//   const classField = document.querySelector("#" + removeClassBtn.id);
//   classField.remove();
//   console.log("removed");
// });

addClassBtn.addEventListener("click", (e) => {
  e.preventDefault();
  countClasses++;
  let label = document.createElement("label");
  let input = document.createElement("input");
  let btn = document.createElement("button");

  btn.type = "button";
  btn.innerHTML = "-";
  btn.className = "remove-class-btn";
  label.innerHTMl = "Class" + countClasses;
  input.type = "text";
  input.className = "preferences";

  
  document.body.appendChild(label);
  schedDiv.appendChild(input);
});
