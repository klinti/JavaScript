function CountSecond()
{
   var seconds =1;

    var obj =
      {
           "increase" : function (){
           seconds++;
           console.log(seconds);
                },

           "reset" : function (){
            seconds=0;
            console.log(seconds);

                }          

       }

  return obj;
}

var closuretest =CountSecond();
closuretest.increase();
CountSecond();
closuretest.increase();
closuretest.reset();
closuretest.increase();
