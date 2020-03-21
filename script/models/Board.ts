
class Board {


  Grid: Cell[][];



  public constructor() {

    this.InitilizeGrid();



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

        }

        if (i < 3 && j < 6) {
          //grp_b
        }

        if (i < 3 && j < 9) {
          //grp_c
        }




        if (i < 6 && j < 3) {
          //grp_d
        }

        if (i < 6 && j < 6) {
          //grp_e
        }

        if (i < 6 && j < 9) {
          //grp_f
        }




        if (i < 9 && j < 3) {
          //grp_g
        }

        if (i < 9 && j < 6) {
          //grp_h
        }

        if (i < 9 && j < 9) {
          //grp_i
        }


      }//column for loop


    }//row for loop





  }//end of function




  public RenderTable() {

    // let resultHTML = "";

    // resultHTML += "<table>";


    // for (let i = 0; i < 81; i += 9) {

    //   resultHTML += "<tr>";
    //   resultHTML += "<td id='cell_" + i + 0 + "'>" + this.Grid[i + 0].Value + "</td>";
    //   resultHTML += "<td id='cell_" + i + 1 + "'>" + this.Grid[i + 1].Value + "</td>";
    //   resultHTML += "<td id='cell_" + i + 2 + "'>" + this.Grid[i + 2].Value + "</td>";
    //   resultHTML += "<td id='cell_" + i + 3 + "'>" + this.Grid[i + 3].Value + "</td>";
    //   resultHTML += "<td id='cell_" + i + 4 + "'>" + this.Grid[i + 4].Value + "</td>";
    //   resultHTML += "<td id='cell_" + i + 5 + "'>" + this.Grid[i + 5].Value + "</td>";
    //   resultHTML += "<td id='cell_" + i + 6 + "'>" + this.Grid[i + 6].Value + "</td>";
    //   resultHTML += "<td id='cell_" + i + 7 + "'>" + this.Grid[i + 7].Value + "</td>";
    //   resultHTML += "<td id='cell_" + i + 8 + "'>" + this.Grid[i + 8].Value + "</td>";
    //   resultHTML + "</tr>";
    // }


    // resultHTML += "</table>";

    // return resultHTML;



  }







}