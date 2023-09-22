var test = document.getElementById('start');
var clr = document.querySelector("h4");

clr.addEventListener("click", ()=>{
    test.innerText = "The Red Devils";
    clr.innerText = "";
});

var abGenerator = document.getElementById('section1');
var ab = document.getElementById('ab');
abGenerator.addEventListener("click" , ()=>{
   if(ab.style.display=='none')
   {ab.style.display='block';}
   else if (ab.style.display=='block')
   {ab.style.display='none'}
   
});

var brGenerator = document.getElementById('section2');
var br = document.getElementById('brn');
brGenerator.addEventListener("click" , ()=>{
   if(br.style.display=='none')
   {br.style.display='flex';}
   else if (br.style.display=='flex')
   {br.style.display='none'}
   
});


var gzGenerator = document.getElementById('gz');
var ncGenerator = document.getElementById('nc');
var Generator5 = document.getElementById('5');
var Generator6 = document.getElementById('6');
var alGenerator = document.getElementById('al');
var luGenerator = document.getElementById('lu');

var gezira = document.getElementById('g');
var tagamo3 = document.getElementById('5th');
var october = document.getElementById('6th');
var madinetNasr = document.getElementById('n');
var alamein = document.getElementById('a');
var luxor = document.getElementById('l');

gzGenerator.addEventListener("click" , ()=>{
   if(gezira.style.display=='none')
   {gezira.style.display='block';
   tagamo3.style.display='none';
   october.style.display='none';
   madinetNasr.style.display='none';
   alamein.style.display='none';
   luxor.style.display='none';

}
   else if (gezira.style.display=='block')
   {gezira.style.display='none';
   tagamo3.style.display='none';
   october.style.display='none';
   madinetNasr.style.display='none';
   alamein.style.display='none';
   luxor.style.display='none';}
   
});

ncGenerator.addEventListener("click" , ()=>{
    if(madinetNasr.style.display=='none')
    {gezira.style.display='none';
    tagamo3.style.display='none';
    october.style.display='none';
    madinetNasr.style.display='block';
    alamein.style.display='none';
    luxor.style.display='none';
 
 }
    else if (madinetNasr.style.display=='block')
    {gezira.style.display='none';
    tagamo3.style.display='none';
    october.style.display='none';
    madinetNasr.style.display='none';
    alamein.style.display='none';
    luxor.style.display='none';}
    
 });

 luGenerator.addEventListener("click" , ()=>{
    if(luxor.style.display=='none')
    {gezira.style.display='none';
    tagamo3.style.display='none';
    october.style.display='none';
    madinetNasr.style.display='none';
    alamein.style.display='none';
    luxor.style.display='block';
 
 }
    else if (luxor.style.display=='block')
    {gezira.style.display='none';
    tagamo3.style.display='none';
    october.style.display='none';
    madinetNasr.style.display='none';
    alamein.style.display='none';
    luxor.style.display='none';}
    
 });

 alGenerator.addEventListener("click" , ()=>{
    if(alamein.style.display=='none')
    {gezira.style.display='none';
    tagamo3.style.display='none';
    october.style.display='none';
    madinetNasr.style.display='none';
    alamein.style.display='block';
    luxor.style.display='none';
 
 }
    else if (alamein.style.display=='block')
    {gezira.style.display='none';
    tagamo3.style.display='none';
    october.style.display='none';
    madinetNasr.style.display='none';
    alamein.style.display='none';
    luxor.style.display='none';}
    
 });

 Generator5.addEventListener("click" , ()=>{
    if(tagamo3.style.display=='none')
    {gezira.style.display='none';
    tagamo3.style.display='block';
    october.style.display='none';
    madinetNasr.style.display='none';
    alamein.style.display='none';
    luxor.style.display='none';
 
 }
    else if (tagamo3.style.display=='block')
    {gezira.style.display='none';
    tagamo3.style.display='none';
    october.style.display='none';
    madinetNasr.style.display='none';
    alamein.style.display='none';
    luxor.style.display='none';}
    
 });

 Generator6.addEventListener("click" , ()=>{
    if(october.style.display=='none')
    {gezira.style.display='none';
    tagamo3.style.display='none';
    october.style.display='block';
    madinetNasr.style.display='none';
    alamein.style.display='none';
    luxor.style.display='none';
 
 }
    else if (october.style.display=='block')
    {gezira.style.display='none';
    tagamo3.style.display='none';
    october.style.display='none';
    madinetNasr.style.display='none';
    alamein.style.display='none';
    luxor.style.display='none';}
    
 });

 var slider = document.getElementById("myRange");
 var output = document.getElementById("demo");
 output.innerHTML = slider.value; // Display the default slider value
 
 // Update the current slider value (each time you drag the slider handle)
 slider.oninput = function() {
   output.innerHTML = this.value;
 }

//  var prGenerator = document.getElementById('section3');
//  var pr = document.getElementById('collapsable');
//  prGenerator.addEventListener("click" , ()=>{
//    if(pr.style.display=='none')
//    {pr.style.display='flex';}
//    else if (pr.style.display=='flex')
//    {pr.style.display='none'}
   
// });

