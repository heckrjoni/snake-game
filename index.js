document.addEventListener('DOMContentLoaded',function()
    {
        const table=document.getElementById('game');
        for (let i = 0; i < 10; i++) {
            const row = document.createElement('row');
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('cell');
                row.appendChild(cell);
                const cellId = `cell_${i}_${j}`; // Generate unique ID
                cell.setAttribute('id', cellId);
              } 
              game.appendChild(row);
            }
    }
    );
var lost=0;
var queue=[[1,1],[1,2],[1,3],[1,4]];
function delay(ms)
{
    return new Promise(resolve=> setTimeout(resolve,ms));
}
async function w_key()
{
    while(key=='w')
    {
    curr_cell.classList.toggle("current");
    i=(i-1);
    if(i==-1)
        i=9;
    curr_cell=document.getElementById(`cell_${i}_${j}`);
    console.log(curr_cell)
    curr_cell.classList.toggle("current");
    await delay(200);
    }
}
async function s_key()
{
    while(key=='s')
    {
    curr_cell.classList.toggle("current");
    i=(i+1);
    if(i==10)
        i=0;
    curr_cell=document.getElementById(`cell_${i}_${j}`);
    console.log(curr_cell)
    curr_cell.classList.toggle("current");
    await delay(200);
    }
}
async function d_key()
{
    while(key=='d')
    {
    curr_cell.classList.toggle("current");
    j=(j+1);
    if(j==10)
        j=0;
    curr_cell=document.getElementById(`cell_${i}_${j}`);
    console.log(curr_cell)
    curr_cell.classList.toggle("current");
    await delay(200);
    }
}
async function a_key()
{
    while(key=='a')
    {
    curr_cell.classList.toggle("current");
    j=(j-1);
    if(j==-1)
        j=9;
    curr_cell=document.getElementById(`cell_${i}_${j}`);
    console.log(curr_cell)
    curr_cell.classList.toggle("current");
    await delay(200);
    }
}
function game_function()
{
        if(key=='w')
            {
                w_key();
            }
        if(key=='a')
            {
                a_key();
            }
        if(key=='s')
            {
                s_key();
            }
        if(key=='d')
            {
                d_key();
            }
}
function start_function()
    {
        document.addEventListener('keypress',function(event){
            key=event.key;
            game_function();
        })
    }  
var begin=0;
var key;
const myButton = document.getElementById('start');
var i = Math.floor(Math.random() * 10);
var j = Math.floor(Math.random() * 10);
// var i=1;
// var j=1;
var curr_cell;
myButton.addEventListener('click', function() {
    if(begin==0)
    {
        // for(var k=0;k<queue.length;k++)
        // {
        //     var m=queue[k][0];
        //     var n=queue[k][1];
        //     curr_cell=document.getElementById(`cell_${m}_${n}`);
        //     curr_cell.classList.toggle("current")
        // }
        curr_cell=document.getElementById(`cell_${i}_${j}`);
        setTimeout(function(){curr_cell.classList.toggle("current")},1000);
        start_function();  
        begin=1; 
    }
    }
)
 
