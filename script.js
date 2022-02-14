var userNumber = Number(prompt("Enter The Number " , 0))

var sum = 0 

for (var i = 0; (userNumber / 10 ) != 0; i++) {

    sum = sum + (userNumber % 10)
    userNumber = Math.floor(userNumber / 10)

}

alert("Sum Of The Digits " + sum);