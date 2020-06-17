var age = Number(prompt("What is you age?"))

if (age == 0) {
    alert("You did not answer :)")
}
else if (age >= 18) {
    alert("You can go to the PARTY!!! but wait...")
    var license = prompt("Do you have a License?")
    if (license == "yes") {
        alert("Thats great WELCOME :)")
    }
    else {
        alert("Pls get the License")
    }
}
else {
    alert("SORRY :(")
}