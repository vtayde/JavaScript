var image=1;
slide(image);
function main(n)
{

    slide(image+=n)
};
function slide(n)
{
    var i;
    var x=document.getElementsByClassName("mySlide");

    if(n<1)
    {
        image=x.length;
    }
    if(n>x.length)
    {
        image=1;
    }
   
    for(i=0;i<x.length;i++)
    {
        x[i].style.display='none';
        
    }

    x[image-1].style.display='block';
    console.log(image);
    switch(image)
        {
            case 1:
                    document.querySelector('.heading').style.color='#e67e22';
                    break;
            case 2:
                    document.querySelector('.heading').style.color='#ebda0a';
                    break;
            case 3:
                    document.querySelector('.heading').style.color='#2fe20f';
                    break;
            case 4:
                    document.querySelector('.heading').style.color='#aa22bc';
                    break;
            case 5:
                    document.querySelector('.heading').style.color='#ef103b';
                    break;
            default:
                    document.querySelector('.heading').style.color='#c9536e';


        }

};