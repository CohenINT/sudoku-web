//use this dribbble design:
//https://dribbble.com/shots/3950072-Sudoku

function CreateEmptyGrid(rows,cols){
    let x = new Array(rows);

    for (let i = 0; i < x.length; i++) {
      x[i] = new Array(cols);
    }
  return x;

}

function PopluateGrid(grid)
{
    const max=9,min=1;
    let num= Math.floor(Math.random() * (max - min)) + min;

    grid.forEach((cell,index,array)=>{
        
        return array[index] = array.includes(num)?Math.floor(Math.random() * (max - min)) + min:num;
      });
        
}
