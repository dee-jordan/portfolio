const firebaseConfig = {
  apiKey: "AIzaSyBrRcfTqgQ93ppwi9p-wvskd1JgcP7OVzU",
  authDomain: "mywebsite-cb358.firebaseapp.com",
  databaseURL: "https://mywebsite-cb358-default-rtdb.firebaseio.com",
  projectId: "mywebsite-cb358",
  storageBucket: "mywebsite-cb358.appspot.com",
  messagingSenderId: "58893526059",
  appId: "1:58893526059:web:d5f5477b45d06944c8766e",
};

// INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig);

// REFERENCE DATABASE

var contactFormDB = firebase.database().ref("myWebsite");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var textarea = getElementVal("textarea");

  saveMessages(name, email, textarea);

  //   ENABLE ALERT

  document.querySelector(".alert").style.display = "block";

  // REMOVING ALERT

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // FORM RESET

  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, textarea) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    textarea: textarea,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// RETRIEVING INFORMATION- JSON FORMAT

contactFormDB.once("value").then(function (snapshot) {
  var formData = snapshot.val();
  var formDataJSON = JSON.stringify(formData);
  console.log(formDataJSON);
});


// BEARS

// const apiAnime = "https://api.disneyapi.dev/character"
// async function animeList(){

//     const response = await fetch(apiAnime);
//     const info = await response.json()
//     const image = document.createElement('img')
//     image.src = info.data[0].imageUrl
//     const form = document.getElementById('contactForm')
//     form.appendChild(image)

//     console.log(info.data[0].imageUrl);

// }

// animeList()


