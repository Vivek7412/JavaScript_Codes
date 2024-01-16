let todo = [];
let req = prompt("Please enter your request");
while (true) {
  if (req == "quit") {
    console.log("quiting app");
    break;
  }
  if (req == "list") {
    console.log("______________");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("_______________");
  } else if (req == "add") {
    prompt("Please enter the task you want do add");
    todo.push(task);
    console.log("task added");
  } else if (req == "delete") {
    let idx = prompt("please enter the task index");
    todo.splice(idx, 1);
    console.log("task deleted");
  } else {
    console.log("wrong request");
  }

  req = prompt("Please enter your request");
}
