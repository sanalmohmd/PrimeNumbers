// function printnumber (){
//     for(i=1 ; i<=100; i++){

//     }
// }

let count=0

let i,j 

for(j=2;j<=100;j++)

{
for( i=1;i<=j;i++)

{
  if(j%i==0)
  
  count++
  
}

if(count==2)

document.write(j +"<br>")

count=0


  
}
