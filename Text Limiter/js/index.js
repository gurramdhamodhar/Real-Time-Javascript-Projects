const textarealimit = document.getElementById("textarea"); //selecting textarea box
const limit = document.querySelector(".count");

//Input capture 
textarealimit.addEventListener("input", () => {
    const value = textarealimit.value.length; //whatever the user type the letter the count will caputure
    limit.textContent = `Characters remaining : ${50 - value}`;
    if(value>30){ // if value = 30 means low text count start so added red
        limit.classList.add("text-red"); 
        limit.classList.remove("text-green");
    }else{
        limit.classList.add("text-green");
        limit.classList.remove("text-red");
    }
});
