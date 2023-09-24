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
   output.innerHTML = Number(this.value);
 }

 var prGenerator = document.getElementById('section3');
 var pr = document.getElementById('collapsable');
 prGenerator.addEventListener("click" , ()=>{
   if(pr.style.display=='none')
   {pr.style.display='flex';}
   else if (pr.style.display=='flex')
   {pr.style.display='none'}
   
});

var expander = document.getElementById('expand');
expander.addEventListener("click" , ()=>{
  if(expander.innerText=="Expand All"){
   ab.style.display='block';
   br.style.display='flex';
   pr.style.display='flex';
   expander.innerText="Collapse All";
  }

  else if(expander.innerText=="Collapse All"){
   ab.style.display='none';
   br.style.display='none';
   pr.style.display='none';
   expander.innerText="Expand All";
  }
});

var show = document.getElementById('sh');
var mitch = document.getElementById('Mitchel-ince');
var aziz = document.getElementById('Aziz-ezzat')
var jaafar = document.getElementById('Jaafar-wali');
var hasanein = document.getElementById('Ahmad-hasanein');
var khaleq = document.getElementById('Abdul-khaleq');
var aboud = document.getElementById('Ahmad-aboud');
var khatib = document.getElementById('Bibo');
var taher = document.getElementById('Mahmoud-taher');
var hassan = document.getElementById('Hassan-hamdy');
var selim = document.getElementById('Saleh-selim');
var wahsh =document.getElementById('Saleh-elwahsh');
var mortaji = document.getElementById('Mohsen-mortaji');
var wakil = document.getElementById('Ibrahim-wakil');
var dosouky = document.getElementById('Salah-dosouky');

show.addEventListener('click' , ()=>{
   if(slider.value >= 1907 && slider.value <= 1908){
      mitch.style.display='flex';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 1908 && slider.value <= 1916){
      mitch.style.display='none';
      aziz.style.display='flex';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 1916 && slider.value <= 1924){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='flex';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 1924 && slider.value <= 1944){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='flex';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 1944 && slider.value <= 1946){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='flex';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 1947 && slider.value <= 1961){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='flex';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 1962 && slider.value <= 1965){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='flex';
   }
   if(slider.value >= 1965 && slider.value <= 1967){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='flex';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 1967 && slider.value <= 1971){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='flex';
      dosouky.style.display='none';
   }
   if(slider.value >= 1972 && slider.value <= 1980){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='flex';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 1980 && slider.value <= 1988){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='flex';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 1988 && slider.value <= 1992){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='flex';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 1992 && slider.value <= 2002){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='flex';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 2002 && slider.value <= 2014){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='none';
      hassan.style.display='flex';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 2014 && slider.value <= 2017){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='none';
      taher.style.display='flex';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='none';
   }
   if(slider.value >= 2017 && slider.value <= 2023){
      mitch.style.display='none';
      aziz.style.display='none';
      jaafar.style.display='none';
      hasanein.style.display='none';
      khaleq.style.display='none';
      aboud.style.display='none';
      khatib.style.display='flex';
      taher.style.display='none';
      hassan.style.display='none';
      selim.style.display='none';
      wahsh.style.display='none';
      mortaji.style.display='none';
      wakil.style.display='none';
      dosouky.style.display='none';
   }













})