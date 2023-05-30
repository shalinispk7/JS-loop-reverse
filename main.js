//reverse order of the given number
let a,num=345;
sum=0;
for(a=345;a!=0;){
	rem=a%10;
	sum=sum*10+rem;
	a=parseInt(a/10);
}
document.write("Reverse of given number "+num +" is "+sum);