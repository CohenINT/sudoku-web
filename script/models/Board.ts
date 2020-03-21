
class Board {


   Grid: Cell[][];
  GroupsListDict: GroupDict= new GroupDict();
  


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




  //Validations

  public ValidationOnRow(value: number, column: number): boolean {

    for (let i: number = 0; i < 9; i++) {
      if (this.Grid[i][column].Value == value) {
        return true;
      }
    }

    return false;

  }

  public ValidationOnCol(value: number, row: number): boolean {

    for (let j: number = 0; j < 9; j++) {
      if (this.Grid[row][j].Value == value) {
         return true;
      }

    }
 
     return false;

  }


  public ValidationOnBox(value: number,groupName:string): boolean {
      
    let AmountOfOccurrences= this.GroupsListDict["grp_a"].filter(item=>item==value).length;
 
    //always at least one for the current value existness.
    if(AmountOfOccurrences >1)
    {
      return true;
    }
    else if(AmountOfOccurrences==1)
    {
      return false;
    }

    else{

      throw Error("Error: ValidationOnBox() has failed for value = "+value +" and group name = "+groupName);
      
    }


  }

  public FixSudokuTable() {//taking a full grid table , and fixing by the sudoku rules

    // let pos_i: number;
    // let pos_j: number;
    let pos_value: number;

    for (let i: number = 0; i < 9; i++) {
      for (let j: number = 0; j < 9; j++) {

        pos_value = this.Grid[i][j].Value;
  

        //check if exist under the 3 validation tests using While() loop
        //will exist While loop only when 
        //row validation
        let IsExist: boolean[] = [this.ValidationOnRow(pos_value, j), this.ValidationOnCol(pos_value,i), this.ValidationOnBox(pos_value,this.Grid[i][j].Group)];
        //col validation

        //tiny box validation

        //only if they are all retuned false, continue to next iteration.


        //else (one or more has returned true, which mean it's value already exist)
        //then get new random number and recheck again all the 3 validation tests (under while loop)


      }
    }


  }

  public SplitToGroups() {


    this.GroupsListDict["grp_a"] = new Array();
    this.GroupsListDict["grp_b"] = new Array();
    this.GroupsListDict["grp_c"] = new Array();
    this.GroupsListDict["grp_d"] = new Array();
    this.GroupsListDict["grp_e"] = new Array();
    this.GroupsListDict["grp_f"] = new Array();
    this.GroupsListDict["grp_g"] = new Array();
    this.GroupsListDict["grp_h"] = new Array();
    this.GroupsListDict["grp_i"] = new Array();


    for (let i: number = 0; i < 9; i++) {
      for (let j: number = 0; j < 9; j++) {


        if (i < 3 && j < 3) {
          //grp_a
          this.Grid[i][j].Group = "grp_a";
          this.GroupsListDict["grp_a"].push(this.Grid[i][j].Value);


        }

        else if (i < 3 && j < 6) {
          //grp_b
          this.Grid[i][j].Group = "grp_b";
          this.GroupsListDict["grp_b"].push(this.Grid[i][j].Value);


        }

        else if (i < 3 && j < 9) {
          //grp_c
          this.Grid[i][j].Group = "grp_c";
          this.GroupsListDict["grp_c"].push(this.Grid[i][j].Value);

        }




        else if (i < 6 && j < 3) {
          //grp_d
          this.Grid[i][j].Group = "grp_d";
          this.GroupsListDict["grp_d"].push(this.Grid[i][j].Value);

        }

        else if (i < 6 && j < 6) {
          //grp_e
          this.Grid[i][j].Group = "grp_e";
          this.GroupsListDict["grp_e"].push(this.Grid[i][j].Value);

        }

        else if (i < 6 && j < 9) {
          //grp_f
          this.Grid[i][j].Group = "grp_f";
          this.GroupsListDict["grp_f"].push(this.Grid[i][j].Value);

        }




        else if (i < 9 && j < 3) {
          //grp_g
          this.Grid[i][j].Group = "grp_g";
          this.GroupsListDict["grp_g"].push(this.Grid[i][j].Value);

        }

        else if (i < 9 && j < 6) {
          //grp_h
          this.Grid[i][j].Group = "grp_h";
          this.GroupsListDict["grp_h"].push(this.Grid[i][j].Value);

        }

        else if (i < 9 && j < 9) {
          //grp_i
          this.Grid[i][j].Group = "grp_i";
          this.GroupsListDict["grp_i"].push(this.Grid[i][j].Value);

        }


      }//column for loop


    }//row for loop





  }//end of function




  public RenderTable() {

    let table = document.createElement("table");
    table.id = "sudoku-table";
    let row = document.createElement("tr");
    let td = document.createElement("td");



    for (let i: number = 0; i < 9; i++) {

      row = document.createElement("tr");
      for (let j: number = 0; j < 9; j++) {
        td = document.createElement("td");
        td.id = "cell_i-" + i + "_j-" + j;
        td.innerText = this.Grid[i][j].Value + "";
        td.classList.add("cell");
        td.classList.add(this.Grid[i][j].Group);

        if (i == 2 || i == 5) {
          td.classList.add("border-buttom");
        }

        if (j == 2 || j == 5) {
          td.classList.add("border-right");
        }
        row.append(td);
      }
      //
      table.append(row);

    }

    return table;

  }







}