// In an alternate universe, coins have a `true` and a `false` side.
// Write code that first gets a user via a getUser() call, then in the callback,
// flips a coin and tells the user whether or not their guess was correct

const coinToss = (guess, whoWon) => {
  const result = Math.round(Math.random());
  const didWin = guess === result;
  whoWon(didWin);
};

const getUser = callback => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    guess: Math.round(Math.random())
  };
  callback(user.guess, winner);

};


// const toss = coinToss(getUser);
const winner = (win) =>{
  if(win) {
    console.log( "Your guess was correct");
  }
 else {
 console.log( "Your guess was incorrect");
 }
}


const toss = getUser(coinToss)



