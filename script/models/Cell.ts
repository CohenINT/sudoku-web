 


class Cell{

  
  public Value:number;
  public  OptionTried = [];
  public Group:string;

    public constructor()
    {

     this.Value=this.GetRandomNumber();
     this.Group="";
     
  this.OptionTried[0]=true;
  this.OptionTried[1]=(this.Value==1);
  this.OptionTried[2]=(this.Value==2);
  this.OptionTried[3]=(this.Value==3);
  this.OptionTried[4]=(this.Value==4);
  this.OptionTried[5]=(this.Value==5);
  this.OptionTried[6]=(this.Value==6);
  this.OptionTried[7]=(this.Value==7);
  this.OptionTried[8]=(this.Value==8);
  this.OptionTried[9]=(this.Value==9);

    

   

    }


  public GetRandomNumber()
  {
   return Math.floor(Math.random() * 9) + 1  ;

  }


  


}