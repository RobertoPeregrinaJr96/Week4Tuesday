// Your code here
const Dragon = require("./dragon");
const FriendlyDragon = require(`./friendly-dragon`)
//console.log(FriendlyDragon)

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
        super(name, color)
        this.evilDoings
        this.nemesis
    }

    dontInviteThemOverForDinner() {
        return console.log(this.evilDoings.forEach(element => {
            console.log(element)
        }))
    }

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }
}
const enderDragon = new EvilDragon(
    "Ender Dragon",
    "black",
    [
        "spit a fireball at Steve",
        "rule over all the Endermen",
        "destroy all blocks in its way"
    ],
    "Steve"
);
console.log(enderDragon);
enderDragon.dontInviteThemOverForDinner();
    // console.log(enderDragon.breathesFire());
    // console.log(enderDragon.burnsNemesis());
