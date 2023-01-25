var click1=0,click2=0,count=0,number,check,strike,checkStrike;
var audioLoose = new Audio("./images/loose.mp3");
var gameOver = new Audio("./images/gameOver.wav");
var correct = new Audio("./images/correct.wav");
var highlow = new Audio("./images/highlow.wav");

const init = ()=>{
    document.getElementById("gameArea").style.display = "none";
}


const newGame = ()=>{
    document.getElementById("inputBox").value = "";
    document.getElementById("attempts").textContent = `:` + 0;
    document.getElementById("guesses").textContent = 0;
    document.getElementById("textOutput").textContent = "Your Guess"

    document.getElementById("gameArea").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "block";

    document.getElementById("inputBox").disabled = false;
}

const easyMode = ()=>{
    if(checkStrike==1)
    {
        
    }
    else
    {
        strike = 0 ;
        document.getElementById("strike").innerHTML = `Your Strike: 0`;
    }
    check = 0;
    click1 = 1;
    count=0;
    number = (Math.floor(Math.random() * 100) + 1);

    document.getElementById("gameArea").style.display = "block";
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("modes").innerHTML = "Easy Mode";
    console.log(number)
}

const hardMode = ()=>{
    if(checkStrike==1)
    {
        
    }
    else
    {
        strike = 0 ;
        document.getElementById("strike").innerHTML = "Your Strike: 0";
    }
    check = 0;
   click2 = 1;
   count=0;
   number = (Math.floor(Math.random() * 100) + 1);
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("modes").innerHTML = "Hard Mode";
    console.log(number)

}

const changeTheText = ()=>{
    document.getElementById("textOutput").innerHTML = "Your Guess";
} 

const testPrediction = ()=>{
    const userAns = document.getElementById("inputBox").value;
    if(userAns==="")
    {
       document.getElementById("textOutput").innerHTML = "Write between 1 to 100s";
        audioLoose.play();
    }
     else if(click1)
     {
        if(count==10)
        {
            checkStrike=0;
            gameOver.play();
            check = 1;
            document.getElementById("inputBox").value = "";
            document.getElementById("guesses").textContent = 0; 
            document.getElementById("inputBox").setAttribute('disabled',true);

            document.getElementById("textOutput").innerHTML = `Ohh..Limit Exceeded` + String.fromCodePoint(0x1F915) + `. Answer is: ` + number;        
        }
        else if(userAns<number)
        {
            highlow.play();
            document.getElementById("textOutput").innerHTML = `Your Guess is Low` + String.fromCodePoint(0x1F644);
            
            if(count==9)
            {
                document.getElementById("guesses").textContent += userAns; 
            }
            else
            {
                document.getElementById("guesses").textContent += userAns + `,` 
            } 
        }
        else if(userAns>number)
        {
            highlow.play();
            document.getElementById("textOutput").innerHTML = `Your Guess is High` + String.fromCodePoint(0x1F9D0);
            
            if(count==9)
            {
                document.getElementById("guesses").textContent += userAns; 
            }
            else
            {
                document.getElementById("guesses").textContent += userAns + `,` 
            } 
        }
        else{
            strike = strike + 1;
            checkStrike=1;
            correct.play();
            document.getElementById("textOutput").innerHTML = `Correct Guess` + String.fromCodePoint(0x1F911);
            
            check = 1;
            document.getElementById("inputBox").value = "";
            document.getElementById("guesses").textContent = 0; 
            document.getElementById("inputBox").setAttribute('disabled',true);
            document.getElementById("strike").textContent = `Your Strike: ` + strike + String.fromCodePoint(0x1F525);
        }

        if(check)
        {
             document.getElementById("attempts").textContent = 0;
        }
        else{
            count++;
            document.getElementById("attempts").textContent = `:` + count;
        }
     }
     else if(click2)
     {
        if(count==5)
        {
            checkStrike=0;
            gameOver.play();
            check = 1;
            document.getElementById("inputBox").value = "";
            document.getElementById("guesses").textContent = `:` + 0; 
            document.getElementById("inputBox").setAttribute('disabled',true);
            
            document.getElementById("textOutput").innerHTML = `Ohh..Limit Exceeded` + String.fromCodePoint(0x1F915) + `. Answer is: ` + number;         
        }
        else if(userAns<number)
        {
            highlow.play();
            document.getElementById("textOutput").innerHTML = `Your Guess is Low` + String.fromCodePoint(0x1F644);

            if(count==4)
            {
                document.getElementById("guesses").textContent += userAns; 
            }
            else
            {
                document.getElementById("guesses").textContent += userAns + `,` 
            }
        }
        else if(userAns>number)
        {
            highlow.play();
            document.getElementById("textOutput").innerHTML = `Your Guess is High` + String.fromCodePoint(0x1F9D0);
            
            if(count==4)
            {
                document.getElementById("guesses").textContent += userAns; 
            }
            else
            {
                document.getElementById("guesses").textContent += userAns + `,` 
            }
        }
        else{
            strike = strike + 1;
            checkStrike=1;
            correct.play();
            document.getElementById("textOutput").innerHTML = `Correct Guess` + String.fromCodePoint(0x1F911);
            
            check = 1;
            document.getElementById("inputBox").value = "";
            document.getElementById("guesses").textContent = 0; 
            document.getElementById("inputBox").setAttribute('disabled',true);
            document.getElementById("strike").textContent = `Your Strike: ` + strike + String.fromCodePoint(0x1F525);
        }
        
        if(check)
        {
            document.getElementById("attempts").textContent = `:` + 0;
        }
        else{
            count++;
            document.getElementById("attempts").textContent = `:` + count;
        }
    }
    document.getElementById("inputBox").value = "";
}