//An array of 5 of my friends
myFriends = ['James', 'Torry', 'Frances', 'Desean', 'Mike'];


//newNum = currentNum - 1;


for (i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i])

    for (num = 99; num >= 1; num--) {
        if (num > 2) {
            console.log(num + " lines of code in the file, " + num + " lines of code; " + myFriends[i] + " clears it all out, " + (num - 1) + " lines of code in the file")
        }
        if (num === 1) {
            console.log(num + " line of code in the file, " + num + " line of code; " + myFriends[i] + " clears it all out, no more lines of code in the file")
        }
    }
}