<?php
// $a=5;
// $b=10;
// function add($a=15,$b=30){
//     $c=$a+$b;
//     return $c;
// }
// function sub($a,$b){
//     $c=$a-$b;
//     return $c;
// }
//  $addition = add($a);
//  $subtract = sub($a,$b);
//  echo "Addition".$addition."";
//  echo "subtraction".$subtract;
$a=0;
$b=1;
$sum=0;
echo $a ."<br>";
echo $b ."<br>";
for($i=1;$i<=10; $i++){
$sum=$a+$b;
echo $sum ."<br>";
$a=$b;
$b=$sum;

}
?>