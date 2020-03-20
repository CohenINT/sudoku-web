 
class Board{

   Grid:Cell[]=[];
   
    

    public constructor(){
       
      this.InitilizeGrid();


    }


    public InitilizeGrid()
    {
      for(let i=0;i<81;i++)
      {
        this.Grid[i]=new Cell();
      }

    }


  public RenderTable()
  {
    
    let resultHTML = "";

     resultHTML+="<table>";
     
    
     for(let i =0;i<81;i+=9)
     {
    
      resultHTML+="<tr>";
      resultHTML+="<td id='cell_"+i+0 +"'>"+this.Grid[i+0].Value+"</td>";
      resultHTML+="<td id='cell_"+i+1 +"'>"+this.Grid[i+1].Value+"</td>";
      resultHTML+="<td id='cell_"+i+2 +"'>"+this.Grid[i+2].Value+"</td>";
      resultHTML+="<td id='cell_"+i+3 +"'>"+this.Grid[i+3].Value+"</td>";
      resultHTML+="<td id='cell_"+i+4 +"'>"+this.Grid[i+4].Value+"</td>";
      resultHTML+="<td id='cell_"+i+5 +"'>"+this.Grid[i+5].Value+"</td>";
      resultHTML+="<td id='cell_"+i+6 +"'>"+this.Grid[i+6].Value+"</td>";
      resultHTML+="<td id='cell_"+i+7 +"'>"+this.Grid[i+7].Value+"</td>";
      resultHTML+="<td id='cell_"+i+8 +"'>"+this.Grid[i+8].Value+"</td>";
      resultHTML+"</tr>";
     }
   

     resultHTML+="</table>";

     return resultHTML;


     
  }



      

 

}