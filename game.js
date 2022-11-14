
let X = Math.floor(Math.random() * 10);
let attempts =0;

function handleClick(event){
    let numId = event.target.id;
    let num = parseInt(numId[3]);
    attempts++;

    if(num==X){
        // console.log("right")
    let ans = "<h1 id='result-head' style='color:green'>"+num+" is right</h1><button class='replay' type='submit' onclick='handleReplay()'>REPLAY</button>";
    let printAns = document.getElementById("result");
    printAns.style.display = "flex";
    printAns.innerHTML = printAns.innerHTML+ans;
    }else{
        // console.log("wrong",X)
        let hint;
        if(num>X){
            hint = "Hint! X is Smaller";
        }else if(num<X){
            hint = "Hint! X is Greater";
        }
        let wrongAttemt = "<h3 id='attemptsHeading'>Attempts Remaining: "+(3-attempts)+"<span id='hint'>"+hint+"</span></h3><button id='retry' onclick='handleRetry()' style='padding:20px'>RETRY</button>";
        var showAttempts = document.getElementById("result");
        showAttempts.style.display = "flex";
        if(attempts!=3){
            showAttempts.innerHTML = showAttempts.innerHTML+ wrongAttemt;
        }

        if(attempts==3){
            let ans = "<h1 id='result-head' style='color:red'>"+num+" is wrong, number was "+X+"</h1><button class='replay' type='submit' onclick='handleReplay()'>REPLAY</button>";
            let printAns = document.getElementById("result");
            printAns.style.display = "flex";
            printAns.innerHTML = printAns.innerHTML+ans;
        }
    }
}

function handleRetry(){
    let hideRetry = document.getElementById("result");
    hideRetry.innerHTML = "";
    hideRetry.style.display = "none";
}
function handleReplay(){window.location.reload()}