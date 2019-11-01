// const entryPoint =
// document.querySelector(".cards");


/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):*/
          //  https://api.github.com/users/<your name>


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function */
//  Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return the following DOM element:

function gitCard(data){
  const newCard = document.createElement("div"),
        newImage = document.createElement("img"),
        newInfo = document.createElement("div"),
        newName = document.createElement("h3"),
        newUsername = document.createElement("p"),
        newLocation = document.createElement("p"),
        newProfile = document.createElement("a"),
        newFollowers = document.createElement("p"),
        newFollowing = document.createElement("p"),
        newBio = document.createElement("p");

    newImage.src = data.url;
    newName.textContent = data.name;
    newUsername.textContent = data.login;
    newLocation.textContent = data.location;
    newProfile.src = data.html_url;
    newFollowers.textContent = data.followers;
    newFollowing.textContent = data.following;
    newBio.textContent = data.bio;


    newCard.classList.add('card');
    newInfo.classList.add('card-info');
    newName.classList.add('name');
    newUsername.classList.add('username');

    
    newCard.appendChild(newImage);
    newCard.appendChild(newInfo);
    newInfo.appendChild(newName);
    newInfo.appendChild(newUsername);
    newInfo.appendChild(newLocation);
    newInfo.appendChild(newProfile);
    newInfo.appendChild(newFollowers);
    newInfo.appendChild(newFollowing);
    newInfo.appendChild(newBio);

//add eventlisteners here



}

axios.get("https://api.github.com/users/luminatrix")
.then(response =>{
  console.log(response);
  response.forEach(data => {
    const cards = document.querySelector('.cards');

cards.appendChild(
  gitCard(response.data)
);
  });
});



/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['cladams0203', 'fishmanjohn', 'coltynw', 'Rae-Glazier', 'weng7533', 'dijahdeen'];

followersArray.forEach((name) => {

  axios.get(`https://api.github.com/users/${name}`)

  //if successfull, do this!
.then(response => {

const cards = document.querySelector('.cards');

cards.append(
  gitCard(response.data)
);
console.log(response);
})
//if not successful do this!
.catch(error => console.log(error));
});







/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):*/
          //  https://api.github.com/users/<your name>

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function */
