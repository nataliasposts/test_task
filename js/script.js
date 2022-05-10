// Task 1

function createCounter1(init) {
  let counter = document.querySelector(".counter");
  const pbtn =  document.createElement("button");
  const mbtn = document.createElement("button");
  const text = document.createElement("p");
  pbtn.className = "btn pbtn";
  mbtn.className = "btn mbtn";
  mbtn.innerText = "-";
  pbtn.innerText = "+";
  counter.append(pbtn, mbtn, text);

  pbtn.addEventListener('click', function() {
     init = parseInt(init) + 1;
     text.innerHTML = "task1: " + init;
   });

  mbtn.addEventListener('click', function() {
     init = parseInt(init) - 1;
     text.innerHTML = "task1: " + init;
   });
 }
 
 const counter1 = createCounter1(1);

 // Task 2

 function createCounter2(init){
  let counter = init;
  let obj = {
    counter: counter,
    increment: increment,
    decrement: decrement
  }
  function increment(){
    obj.counter++;
  }
 function decrement(){
   obj.counter++;
  } 

  return obj;
}

const counter4 = createCounter2(10);
console.log(counter4.counter);
counter4.increment();
console.log(counter4.counter);

// Task 3

function createCounter3(init) {
  let counter = document.querySelector(".counter");
  const pbtn = document.createElement("button");
  const mbtn = document.createElement("button");
  const text = document.createElement("p");
  pbtn.className = "btn pbtn";
  mbtn.className = "btn mbtn";
  mbtn.innerText = "-";
  pbtn.innerText = "+";
  counter.append(pbtn, mbtn, text);

  pbtn.addEventListener('click', e => {
    init = parseInt(init) + 1;
    if(init == 6) e.target.disabled = true;
      mbtn.disabled = false;
      text.innerHTML = "task3: " + init;
   });
   
  mbtn.addEventListener('click', e => {
    init = parseInt(init) - 1;
     if(init == -6) e.target.disabled = true;
       pbtn.disabled = false;
       text.innerHTML = "task3: " + init;
   });
 }
 
 const counter5 = createCounter3(2);


 

   
 
  
   