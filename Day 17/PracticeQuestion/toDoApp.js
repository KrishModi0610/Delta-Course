let req = prompt("Enter the task you want to perform");
let todo = [];
while(true) {
    let val = req.toLowerCase();
    if(val == "add") {
        let add = prompt("Enter the task you want to add.");
        todo.push(add);
        console.log("Task Added...");
    }

    else if(val == "delete") {
        let idx = prompt("Enter the task index you want to delete");
        todo.splice(idx, 1);
    }

    else if(val == "list") {
        console.log("--------------");
        for(task of todo) {
            console.log(task);
        }
        console.log("--------------");
    }

    else if(val == "quit") {
        val = !confirm("Are you sure you want to quit???");
        if(val == false) {
            break;
        }
    }
    else {
        alert("Please enter correct request...!!");
    }
    req = prompt("Enter the task you want to perform");
}