var textarea=document.getElementById("text");
var wordCount=document.getElementById("word-digits");
var letterCount=document.getElementById("letter-digits");
var countWord=0;
var text;
var word;
textarea.addEventListener("input",function(){
    text=textarea.value;
    countWord=0;
    // return an array with words sperated by space
    word=text.split(" "); 
    for(var i=0;i<word.length;i++)
    {
        if(word[i]!=="")
        {
            countWord++;
        }
    }
    wordCount.innerHTML=countWord;
});

textarea.addEventListener("input",function(e){
    var letter=e.target.value.split("");
    var countLetter=0;
    for(var j=0;j<letter.length;j++)
    {
        if(letter[j]!==" ")
        countLetter++;
    }
    letterCount.innerHTML=countLetter;
});