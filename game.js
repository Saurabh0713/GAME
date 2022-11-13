
let X = Math.floor(Math.random() * 10);


function handleClick(event){
    let numId = event.target.id;
    let num = parseInt(numId[3]);

    if(num==X){
        // console.log("right")
    let ans = "<h1 id='result-head' style='color:green'>"+num+" is right</h1><button class='replay' type='submit' onclick='handleReplay()'>REPLAY</button>";
    let printAns = document.getElementById("result");
    printAns.style.display = "flex";
    printAns.innerHTML = printAns.innerHTML+ans;
    }else{
        // console.log("wrong",X)
        let ans = "<h1 id='result-head' style='color:red'>"+num+" is wrong, number was "+X+"</h1><button class='replay' type='submit' onclick='handleReplay()'>REPLAY</button>";
        let printAns = document.getElementById("result");
        printAns.style.display = "flex";
        printAns.innerHTML = printAns.innerHTML+ans;
    }
}

function handleReplay(){window.location.reload()}