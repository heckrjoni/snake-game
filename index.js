document.addEventListener('DOMContentLoaded',function()
    {
        const table=document.getElementById('game');
        for (let i = 0; i < 50; i++) {
            const row = document.createElement('row');
            for (let j = 0; j < 50; j++) {
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
function delay(ms)
{
    return new Promise(resolve=> setTimeout(resolve,ms));
}
function endgame()
{
    key=' ';
}
function check()
{
    for(var k=0;k<queue.length;k++)
    {
        if(queue[k][0]==i&&queue[k][1]==j)
            {endgame();}    }  
}
async function w_key()
{
    while(key=='w')
    {
    i=(i-1);
    if(i==-1)
        i=49;
    check();
    if(i!=appi||j!=appr)
        {
            var q=queue.pop()
            var m=q[0];
            var n=q[1];
            curr_cell=document.getElementById(`cell_${m}_${n}`);
            curr_cell.classList.toggle("current");
        }
    else{
            curr_cell=document.getElementById(`cell_${appi}_${appr}`);
            curr_cell.classList.toggle("currentapple");
            generate_apple();
        }
    curr_cell=document.getElementById(`cell_${i}_${j}`);
    q=[i,j];
    queue.unshift(q);
    console.log(curr_cell)
    curr_cell.classList.toggle("current");
    await delay(50);
    }
}
async function s_key()
{
    while(key=='s')
    {
        i=(i+1);
        if(i==50)
            i=0;
        check();
        if(i!=appi||j!=appr)
        {
            var q=queue.pop()
            var m=q[0];
            var n=q[1];
            curr_cell=document.getElementById(`cell_${m}_${n}`);
            curr_cell.classList.toggle("current");
        }
        else{
            curr_cell=document.getElementById(`cell_${appi}_${appr}`);
            curr_cell.classList.toggle("currentapple");
            generate_apple();
        } 
    curr_cell=document.getElementById(`cell_${i}_${j}`);
    q=[i,j];
    queue.unshift(q);
    console.log(curr_cell)
    curr_cell.classList.toggle("current");
    await delay(50);
    }
}
async function d_key()
{
    while(key=='d')
    {
        j=(j+1);
        if(j==50)
            j=0;
        check();
        if(i!=appi||j!=appr)
        {
            var q=queue.pop()
            var m=q[0];
            var n=q[1];
            curr_cell=document.getElementById(`cell_${m}_${n}`);
            curr_cell.classList.toggle("current");
        }
        else{
            curr_cell=document.getElementById(`cell_${appi}_${appr}`);
            curr_cell.classList.toggle("currentapple");
            generate_apple(); 
        } 
    curr_cell=document.getElementById(`cell_${i}_${j}`);
    console.log(curr_cell)
    q=[i,j];
    queue.unshift(q);
    curr_cell.classList.toggle("current");
    await delay(50);
    }
}
async function a_key()
{
    while(key=='a')
    {   j=(j-1);
        if(j==-1)
            j=49;
        check();
        if(i!=appi||j!=appr)
        {
            var q=queue.pop()
            var m=q[0];
            var n=q[1];
            curr_cell=document.getElementById(`cell_${m}_${n}`);
            curr_cell.classList.toggle("current");
        }
        else{
            curr_cell=document.getElementById(`cell_${appi}_${appr}`);
            curr_cell.classList.toggle("currentapple");
            generate_apple(); 
        } 
    
    curr_cell=document.getElementById(`cell_${i}_${j}`);
    console.log(curr_cell)
    q=[i,j];
    queue.unshift(q);
    curr_cell.classList.toggle("current");
    await delay(50);
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
var queue=[[i,j]];
var appi;
var appr;
function generate_apple()
{
    var flag=true;
    while(flag)
        {
            appi=Math.floor(Math.random() * 10);
            appr=Math.floor(Math.random() * 10);   
            flag=false;
            for(var k=0;k<queue.length;k++)
            {
                if(queue[k][0]==appi&&queue[k][1]==appr)
                    flag=true;
            }  
        }
    curr_cell=document.getElementById(`cell_${appi}_${appr}`);
    curr_cell.classList.toggle("currentapple")
}
var curr_cell;
myButton.addEventListener('click', function() {
    if(begin==0)
    {
        for(var k=0;k<queue.length;k++)
        {
            var m=queue[k][0];
            var n=queue[k][1];
            curr_cell=document.getElementById(`cell_${m}_${n}`);
            curr_cell.classList.toggle("current")
        }
        generate_apple();
        start_function();  
        begin=1; 
    }
    }
)
 
