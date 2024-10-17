const prompt = require('prompt-sync')();
const username = prompt(`What is your name?: `);
console.log(`Your name is ${username}`);
let sword = false; // this will be found during the game
let gold = 0;
 
console.log(`You awaken to find yourself in a dark cave. Your last memory being falling off your horse while on your way to destroy the evil ogre.`); 
console.log(`Apparently while you were unconscious you were robbed as you cannot find your sword. At least you can remember that your name is ${username}`);
const firstAction = prompt(`What would you like to do?(You can type "leave" to leave): `);
while(firstAction !== 'leave'){
    const decision = prompt('No you have to leave the cave to start your adventure type "leave" to leave.: ')
    if(decision === 'leave'){ 
        break;
    } else {
        console.log(firstAction)
    }
}
console.log(`Looking around you, you see horse tracks going to the North. From the West you hear the sounds of a river, and to the east you hear what sounds like the roar of an angry dragon.`);
const secondAction = prompt('Would you like to travel North, East, or West? (you can input "North","East", or "West to choose(for some reason you cannot go south): ');

if(secondAction === "West") {
    console.log("You have stumbled upon a beautiful babling brook, you take a moment to take a drink and wash yourself before heading back and find a pouch of 10 gold in the water. You go back to the clearing and choosing not to commit suicide decide to head north")
    gold = 10;
    const swordWest = prompt(`As you travel you find a clearing wherein you find your dead horse with your sword stuck in it's head like a twisted sword in the stone. Do you take your sword from your former companion?(y or n): `);
    if(swordWest === 'y'){
        sword = true
        console.log(`Ripping your sword free from your dead companion you head north hearing the sounds of the ogre roaring its way down the path`);
    } else {
        console.log(`You hear the sounds of an angry ogre barelling down the path`);
    }
    const climaxWest = prompt (`Are you ready?(fight or hide)`)
    if(climaxWest === "fight" && sword === true){
        console.log(`Raising your blade as the ogre charges you you swing out and cut off it's head!`);
        console.log(`Victory is yours, you have defeated the ogre and managed to find ${gold} gold`);
    } else if (climaxWest === 'fight' && sword === false){
        console.log(`You try to fight the ogre with your bare hands, you die for your troubles.`);
        console.log("Game Over")
    } else if(climaxWest === 'hide' && sword === true){
        console.log('You dive into a bush holding your sword out in front of you, unfortunately your cowardice gets you killed as the ogre jumps through the air and lands on you breaking your sword like a toothpick');
        console.log("Game Over");
    } else {
        console.log('The Ogre finds you and squashes you like the bug you are');
        console.log("Game Over");
    }
} else if(secondAction === "East"){
    console.log(`You take a few steps Eastward before realizing suicide by dragon is a bad idea, you turn back and then head North`);
    const swordEast = prompt(`As you travel you find a clearing wherein you find your dead horse with your sword stuck in it's head like a twisted sword in the stone. Do you take your sword from your former companion?(y or n): `)
    if(swordEast === 'y'){
        sword = true
        console.log(`Ripping your sword free from your dead companion you head north hearing the sounds of the ogre roaring its way down the path`);
    } else {
        console.log(`You hear the sounds of an angry ogre barelling down the path`)
    }
    const climaxEast = prompt (`Are you ready?(fight or hide)`)
    if(climaxEast === "fight" && sword === true){
        console.log(`Raising your blade as the ogre charges you you swing out and cut off it's head!`);
        console.log(`Victory is yours, you have defeated the ogre and managed to find ${gold} gold`);
    } else if (climaxEast === 'fight' && sword === false){
        console.log(`You try to fight the ogre with your bare hands, you die for your troubles.`);
        console.log("Game Over")
    } else if(climaxEast === 'hide' && sword === true){
        console.log('You dive into a bush holding your sword out in front of you, unfortunately your cowardice gets you killed as the ogre jumps through the air and lands on you breaking your sword like a toothpick');
        console.log("Game Over");
    } else {
        console.log('The Ogre finds you and squashes you like the bug you are');
        console.log("Game Over");
    }
} else if(secondAction === "North"){
    console.log(`Grumbling in annoyance you head North after your horse`);
    const swordNorth = prompt(`As you travel you find a clearing wherein you find your dead horse with your sword stuck in it's head like a twisted sword in the stone. Do you take your sword from your former companion?(y or n): `)
    if(swordNorth === 'y'){
        sword = true
        console.log(`Ripping your sword free from your dead companion you head north hearing the sounds of the ogre roaring its way down the path`)
    } else {
        console.log(`You hear the sounds of an angry ogre barelling down the path`)
    }
    const climaxNorth = prompt (`Are you ready?(fight or hide)`)
    if(climaxNorth === "fight" && sword === true){
        console.log(`Raising your blade as the ogre charges you you swing out and cut off it's head!`);
        console.log(`Victory is yours, you have defeated the ogre and managed to find ${gold} gold`);
    } else if (climaxNorth === 'fight' && sword === false){
        console.log(`You try to fight the ogre with your bare hands, you die for your troubles.`)
        console.log("Game Over")
    } else if(climaxNorth === 'hide' && sword === true){
        console.log('You dive into a bush holding your sword out in front of you, unfortunately your cowardice gets you killed as the ogre jumps through the air and lands on you breaking your sword like a toothpick');
        console.log("Game Over");
    } else {
        console.log('The Ogre finds you and squashes you like the bug you are');
        console.log("Game Over");
    }
    
} else{
    console.log(`That was not an option`);
}
