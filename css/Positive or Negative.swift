Positive or Negative
Requirement
1.positive-0,1,2,3.....
2.Negative- -1,-2,-3......
Maths Logic
positive = Number>0 then number is positive number
Negative= Number<0 then number is Negative number
input: number--->eg:1,2,3....
outpuut:number--->eg:-1,-2,-3.....
flow:
1.get user input assign variable number
2.if number>0 print Positive
3.else if number<0 print Negative


current Bill
-----------
Requirement
1unit= 1.5rs
Maths Logic
price=unit * 1.5
input: no of unit
output:Current bill amount
flow:
get user unit input
and multiply unit with per unit price
then print current bill
 Requirement2 flow:
 get user unit input
 ---------------------
 then unit shoud be 100 or equal to hunderad multiply with 1.5 rupees 
 or unit shoud be more than 100,subtract the actual current bill with 100
 then mutiply the remaining amount with 2.5 and add both values and produce current bill to end user

 TN electicity bill
 ------------------
Requirement: 
   Unit 1--->100 =0
   unit 100-->200=2.35
   unit 200-->400=4.7

   input: user input
   output:100 unit user bill shoud be"you dont have any bill! u comes under the goverment privellege "
           more than 100 0r below 200 it shoud be " thank you! your bill amount"
           more than 200 0r bepow 400 it shoud be "thank you! your bill amount"
     flow
     ------> get user input
     ------>if it comes under or equal to 100 unit print 0 store in a variable
     .......>it unit<=200--->subtract with 100 unit...>remaining unit we have to multiply with unit*2.35
     ........>if unit 400---->subtract with  100 unit ....>remaining we haveto multiply with 4.7+add with 100*2.35

     4.
     input: 1,2,3....7
     output: monday,tuesday,wednesday....sunday
     flow:
      -------> get user input...
      --------> till the user input we run a for loop..
      -------->after that we have to write a if condition,if input is 1 it is a monday...till we have to write a sunday...

      5.
      input: a,b,c and get number from user like 1 2 3 or 10 -10 0..
      output: 3 or 10
      MathsLogic:
          ----->(a >= b and a >= c) it is true, print a is the greatest number
          ----->(b >= a and b >= c) it is true, print a is the greatest number
____________________________________________________________________________________________
Testcase for register page:
1.action:user visit register page and fill all the details and click register button..
Testcase1: user eneter all details and click ragister-->Allow ragister & succsessfully register message &navigate to Login page
Testcase2: user enter partial details and click register button--> show error message pls fill all the field
Testcase3: User register with same email id and click register button-->you are already register & navigate to Logi page..
Testcase4: user register with same details with different email id-->allow to regiseter..
Testcase5:         
------------------------------------------------------------------------------------------
Testcase for Login page
1.action:user enter emailId & password and click login button
Testcase1:user enter valid emailid & password and click login-->navigate to profile page
Testcase2:user enter new password & email and click login button--> navigate to register page and show ur already register
Testcase3:user fill partially--> show error
Tesrcase4:user enter valid email id and wrong password show enter valid password message
-------------------------------------------------------------------------------------------
Testcase for profile page
1.Action:user enter all the details and click submit
Testcase1:user enter all valid detail and click submit button--> show success msg
Testcase2:user enter partial detail and click submit button-->shoe error msg
Testcase3: