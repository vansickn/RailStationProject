//get data
db.collection('Trips').get().then(snapshot => {
  setupTrips(snapshot.docs);
});

//listen for auth state changes
auth.onAuthStateChanged(user => {
  if (user){


    console.log('user logged in', user);
    setupUI(user);
  } else{
    setupUI();
    console.log('user logged out');
  }
})


//sign up

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
  e.preventDefault(); //doesn't refresh the page

  //user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  //signup user

  auth.createUserWithEmailAndPassword(email,password).then((cred) => {
    return db.collection('Users').doc(cred.user.uid).set({
      name: signupForm['signup-name'].value,
      age: signupForm['signup-age'].value,
      gender: signupForm['signup-gender'].value,
      email: signupForm['signup-email'].value,
    });
    
  }).then(() => {
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });

});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click',(e) => {
  e.preventDefault();
  auth.signOut();
});

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email,password).then((cred) => {
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});
