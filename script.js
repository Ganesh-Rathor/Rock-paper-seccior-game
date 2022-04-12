const rules = document.querySelector("#rules");
const close_rules = document.querySelector("#Close-rules");
const rps_item = document.querySelectorAll(".mg");
const stepOne = document.querySelector("#game-play");
const stepTwo = document.querySelector("#progress");
const randImg = document.querySelector("#rndImg");
const result_value = document.querySelector("#result-value");



let score=0;
let userChoosen;
let randomChoosen;

rules.addEventListener("click",(e)=>{
    document.querySelector(".active-rules").style.display="block";
});
close_rules.addEventListener("click",()=>{
    document.querySelector(".active-rules").style.display="none";
});

rps_item.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        userChoosen = e.target.id;
        stepOne.style.display = "none";
        prgresssing();
        result_output();
    })
    
});

document.querySelector("#play-again").addEventListener("click",playAgain)

function playAgain(){
    stepOne.style.display = "grid";
    
    stepTwo.querySelector("#UserChoose img").classList.remove(userChoosen);
    stepTwo.style.display = "none";
    
    
    document.querySelector(".enonmous").style.display = "flex";
    randImg.classList.remove(randomChoosen);
    
    document.querySelector("#result").classList.remove("display");
    
    randImg.style.display = "none";
}

function prgresssing(){
    randomChoosen = random_rps();
        stepTwo.querySelector("#UserChoose img").src = `images/icon-${userChoosen}.svg`;
        stepTwo.querySelector("#UserChoose img").classList.add(userChoosen);
        stepTwo.style.display = "flex";
        setTimeout(() => {
            document.querySelector(".enonmous").style.display = "none";
            randImg.classList.add(randomChoosen);
            randImg.src = `images/icon-${randomChoosen}.svg`;
            randImg.style.display = "flex";
            
        }, 1000);
}

function random_rps(){
    const random_number = Math.floor(Math.random()*100);
    let rps;
    if(random_number<=33){
        return "rock";
    }
    else if(random_number>33 && random_number<=66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function result_output(){
    setTimeout(() => {
        document.querySelector("#result").classList.add("display");
        
        if(userChoosen === randomChoosen){
            result_value.innerHTML = "draw";
        }
        else if(userChoosen === "paper" && randomChoosen === "rock" || userChoosen === "rock" && randomChoosen==="scissors" || userChoosen === "scissors" && randomChoosen==="paper" ){
            result_value.innerHTML = "you win";
            score++;
            document.querySelector("#curr-scor").innerHTML = score;
        }
        else{
            result_value.innerHTML = "You lose";
        }
    }, 1000);
}


