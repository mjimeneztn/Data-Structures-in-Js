/* const lunch = "for lunch i had a pb&J whole wheat sandwhich with apple and grape juice"

const lunch= {
    bread: "whole wheat",
    drink: "grape juice",
    snack: "apple",
    sandwhich: "PB&j"

}

const lunch = ["lunch", "pb&j", "whole wheat", "grape juice", "apple"]

const newSet= new Set([lunch]) */


const cats = [
    {
      name: "Henry",
      bio: "Eat plants, meow, and throw up because I ate plants. Knock over christmas tree, stare at imaginary bug, and meow and walk away. Lick master's hand at first then bite because im moody purrrrrr do not try to mix old food with new one to fool me!"
    },
    {
      name: "Jessica",
      bio: "Spend all night ensuring people don't sleep. Sleep all day. Meowzer for when in doubt, destroy the couch."
    },
    {
      name: "Jake",
      bio: "Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked munch on tasty moths for meow meow mama meow all night murr I hate humans they are so annoying."
    }
  ]
  // Write out a brief list of steps needed to display this data.

  //create a function that returns html representation and takes object as arguemnt
  //refrence the html element and store in variable
  //write another function that will iterate the array 

  const catComponent = (cats) => {
      return `
      <section class ="elements">
      <h2> ${cats.name} </h2>
      <p>${cats.bio}</p>
      </section>
      `
  }
const component = document.getElementById("container")

const displayCats= () =>{
    cats.forEach(element => {
    const html= catComponent(element)
    component.innerHTML += html

})
}

displayCats(cats)