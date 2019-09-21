//use this dribbble design:
//https://dribbble.com/shots/3950072-Sudoku

function CreateEmptyGrid(rows,cols){
  let x = new Array(rows);

  for (let i = 0; i < x.length; i++) {
    x[i] = new Array(cols);
  }
return x;

}
var nums;
const max=10,min=1;

function mixNumsOrder()
{

  
nums=new Array();
let current_num = 0;

while(nums.length<9)
{
  current_num = Math.floor(Math.random() * (max - min)) + min;
   while(nums.includes(current_num))
   {
    current_num = Math.floor(Math.random() * (max - min)) + min;

   }

   nums.push(current_num);

}


}

var grid = CreateEmptyGrid(9,9);
var num_counter=0;
function getNumber()
{
  
   if(num_counter>8)
   {
     num_counter=0;
   }

   num_counter++;
   return nums[num_counter-1];
  
}
function checkColumn(_num,i,j)
{

  let exludeArr=new Array();

  if(!(grid[0][0]==undefined))
  for(let row=0,col=j;row<grid.length;row++)
  {

    if(grid[row][col]!=undefined)
    {
      exludeArr.push(grid[row][col]);//adding exist number to exlude
    }

   }

     //Keep spawning new random number, until it's not on the exulde list
     while(exludeArr.includes(_num))
     {
      
               //get number
               if(num_counter>8)
               {
                num_counter=0;
               }
 
                num_counter++;
                _num= nums[num_counter-1];
                
                //
      _num = checkLine(_num,i,j);
     }

   return _num;

}
function checkLine(_num,i,j)
{
          
    while(grid[i].includes(_num))
    {
     //get number
     if(num_counter>8)
     {
      num_counter=0;
     }

      num_counter++;
      _num= nums[num_counter-1];
      
      //
    }
        return _num;
}
function checkNumBySudokuRules(_num,i,j){

            //בודק שורה
             _num = checkLine(_num,i,j);
             


             //בודק עמודה
             _num = checkColumn(_num,i,j);
return _num;

}



function PopluateGrid(grid)
{

 let num=0;

    for (let i = 0; i < grid.length; i++) 
    {
      mixNumsOrder();

        for (let j = 0; j < grid[i].length; j++)
          {
             
               //get number
           if(num_counter>8)
           {
            num_counter=0;
           }

            num_counter++;
            num= nums[num_counter-1];
            
            //

              num= checkNumBySudokuRules(num,i,j)
              grid[i][j]=num;

          }

       }
}


//array.includes(num)?Math.floor(Math.random() * (max - min)) + min:num;