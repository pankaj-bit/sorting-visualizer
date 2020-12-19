
function Insertion()
{
    document.getElementById("info").innerHTML="Ω(n)";
    document.getElementById("info1").innerHTML="θ(n^2)";
    document.getElementById("info2").innerHTML="O(n^2)";
                                              
                                               
    
    c_delay=0;
    document.getElementById("pasu").innerHTML = 0;
    var comparision=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");//Color update
            comparision++;
        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            comparision++;//increment in comparision

            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[i+1],div_sizes[i+1],"red");//Height update
    
            div_update(divs[i],div_sizes[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        { 
            div_update(divs[t],div_sizes[t],"green");//Color update
        }
        document.getElementById("pasu").innerHTML = comparision;//to give comparision in each step

    }
    div_update(divs[j-1],div_sizes[j-1],"green");//Color update

    enable_buttons();
}

