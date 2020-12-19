
function Bubble()
{
    document.getElementById("info").innerHTML="Ω(n)";
    document.getElementById("info1").innerHTML="θ(n^2)";
    document.getElementById("info2").innerHTML="O(n^2)";
                                              
    c_delay=0;
    document.getElementById("pasu").innerHTML = 0; //passes==0 to reset it
    var comparision=0;
    var count=0;
   
    for(var i=0;i<array_size-1;i++)
    {
        comparision++;//increment in comparision

        for(var j=0;j<array_size-i-1;j++)
        { 
            comparision++;//increment in comparision

        
            div_update(divs[j],div_sizes[j],"yellow");//Color update
              
            if(div_sizes[j]>div_sizes[j+1])
            {
                count++;
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "blue");//Color updat
        }
        div_update(divs[j],div_sizes[j], "green");//Color update
        
    }
    
    if(count!=0)
        { document.getElementById("pasu").innerHTML = comparision;} //to give comparision in each step
    else 
       {document.getElementById("pasu").innerHTML = array_size;}
         
    
        div_update(divs[0],div_sizes[0], "green");//Color update

    enable_buttons();
}

