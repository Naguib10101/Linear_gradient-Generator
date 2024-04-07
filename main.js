let projectName = 'Linear-Gradient-Generator';
document.title = projectName;
let foot = document.querySelector('footer');
foot.innerHTML = projectName;

let colorGradient_Arr = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' ,  'A' , 'B' , 'C' , 'D' , 'E' , 'F'];
let btn = document.querySelector('.btn'); 
let body = document.querySelector('body');
let picker_one = document.getElementById('color-picker-1');
let picker_two = document.getElementById('color-picker-2');
let color_1 = document.querySelector('.color-1');
let color_2 = document.querySelector('.color-2');
let randomColor_One = '#' , randomColor_two = '#';

if(localStorage.getItem('picker_one') && localStorage.getItem('picker_two')){
    randomColor_One = localStorage.getItem('picker_one');
    randomColor_two = localStorage.getItem('picker_two');
    picker_one.value = JSON.parse(randomColor_One);
    picker_two.value = JSON.parse(randomColor_two);
    color_1.innerHTML = picker_one.value + ' , ';
    color_2.innerHTML = picker_two.value;
    body.style.background = `linear-gradient(${picker_one.value}, ${picker_two.value})`;
}

picker_one.addEventListener('change', (e)=> {
    randomColor_One = e.target.value;
    picker_one.value = e.target.value;
    localStorage.setItem('picker_one' , JSON.stringify(randomColor_One));
    window.location.reload(); 
} , false);

picker_two.addEventListener('change', (e)=> {
    randomColor_two = e.target.value;
    localStorage.setItem('picker_two' , JSON.stringify(randomColor_two)); 
    window.location.reload();
} , false);



btn.addEventListener('click' , ()=>{
    randomColor_One = '#';
    randomColor_two = '#';
    for(let i = 1; i <= 6; i++){
    randomColor_One += `${colorGradient_Arr[Math.floor(Math.random()* colorGradient_Arr.length)]}`;
    randomColor_two += `${colorGradient_Arr[Math.floor(Math.random()* colorGradient_Arr.length)]}`;
    }
    body.style.background =  `linear-gradient(${randomColor_One},${randomColor_two})`;
    color_1.innerHTML = randomColor_One + ' , ';
    color_2.innerHTML = randomColor_two;
});

