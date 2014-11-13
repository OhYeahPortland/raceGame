//function that creates an object and gets passed a name, speed, focus
function Animal(name, speed, focus) {
    //setting values for the object to the value of the property passed in
    this.name = name;
    //Values: 0-9
    this.speed = speed;
    this.focus = focus;
    this.position = 0;

    //a property isFocused that has a function as its value and that function returns a number
    this.isFocused = function () {
        return Math.floor(Math.random() * 10) < this.focus;
    };
    //sets value for advancing for each animal object
    this.advance = function () {
        if (this.isFocused()) {
            //this.position += this.speed;
            //for beginners below is same as above
            this.position = this.position + this.speed;
        }
    };
    //reports the progress based on value returned from function
    this.progressReport = function () {
        return this.name + " is at: " + this.position;
    }
}

// animal objects that are stored as variables name, speed focus
var rabbit = new Animal("Buggs", 8, 3);
var turtle = new Animal("Cecil", 3, 7);
//variable that will set what amount needs to be reached to finish the race.
var meters = 25;

var checkPoint = 0;

var end = "Finish!";

function firstLeg() {
    for (var i = 0; i < 0; i++) {
        //do something
        checkPoint = i++;
    }
}

function start() {

    if (rabbit.position < meters && turtle.position < meters){
        rabbit.advance();
        turtle.advance();
        //firstLeg should increment the checkPoint value
        firstLeg();

        //Replace innerHTML element that has an id of then update its contents
        var check02 = document.getElementById('buggs');
        check02.textContent = rabbit.position;

        //Replace innerHTML element that has an id of then update its contents
        var check03 = document.getElementById('cecil');
        check03.textContent = turtle.position;

        checkPoint += 1;
    } else {
        //Replace innerHTML element that has an id of then update its contents
        var check04 = document.getElementById('checkPoint');
        check04.textContent = end;

        //Replace innerHTML element that has an id of then update its contents
        var check05 = document.getElementById('leading');
        check05.textContent = end;

    }

}
