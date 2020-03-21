
class Board {


  Grid: Cell[][];



  public constructor() {

    this.InitilizeGrid();
   this.SplitToGroups();


  }


  public InitilizeGrid() {

    //Making the grid two dimetional array
    this.Grid = [];
    for (let i: number = 0; i < 9; i++) {
      this.Grid[i] = [];
      for (let j: number = 0; j < 9; j++) {
        this.Grid[i][j] = new Cell();
      }

    }





  }


  public SplitToGroups() {

    for (let i: number = 0; i < 9; i++) {
      for (let j: number = 0; j < 9; j++) {


        if (i < 3 && j < 3) {
          //grp_a
           this.Grid[i][j].Group="grp_a";
        }

        else if (i < 3 && j < 6) {
          //grp_b
          this.Grid[i][j].Group="grp_b";
        }

        else  if (i < 3 && j < 9) {
          //grp_c
          this.Grid[i][j].Group="grp_c";
        }




        else if (i < 6 && j < 3) {
          //grp_d
          this.Grid[i][j].Group="grp_d";
        }

        else  if (i < 6 && j < 6) {
          //grp_e
          this.Grid[i][j].Group="grp_e";
        }

        else if (i < 6 && j < 9) {
          //grp_f
          this.Grid[i][j].Group="grp_f";
        }




        else  if (i < 9 && j < 3) {
          //grp_g
          this.Grid[i][j].Group="grp_g";
        }

        else    if (i < 9 && j < 6) {
          //grp_h
          this.Grid[i][j].Group="grp_h";
        }

        else if (i < 9 && j < 9) {
          //grp_i
          this.Grid[i][j].Group="grp_i";
        }


      }//column for loop


    }//row for loop





  }//end of function




  public RenderTable() {

    let table = document.createElement("table");
    table.id="sudoku-table";
    let row=document.createElement("tr");
    let td= document.createElement("td");
   


    for(let i:number=0;i<9;i++)
    {

      row=document.createElement("tr");
      for(let j:number=0;j<9;j++)
      {
        td=document.createElement("td");
        td.id="cell_i-"+i+"_j-"+j;
        td.innerText=this.Grid[i][j].Value+"";
        td.classList.add("cell");
        row.append(td);
      }
      
      table.append(row);
    
    }
    
    return table;

  }







}