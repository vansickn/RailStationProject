const tripsList = document.querySelector('.trips');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  console.log("hello")
  if(user){
    //account info
    db.collection('Users').doc(user.uid).get().then(doc => {
      const html = `
        <div> These are your account details, ${doc.data().name}!</div>
        <div>Age: ${doc.data().age}, Gender: ${doc.data().gender} </div>
        <div>Logged in as ${user.email}</div>
        `;
      accountDetails.innerHTML = html;
    })

    //toggle ui elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  }else{
    //account details
    accountDetails.innerHTML = '';
    //toggle ui elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}

//setup trips
const setupTrips = (data) => {
  let html = '';
  data.forEach(doc => {
    const trip = doc.data();
    const li = `
    <li>
      <div class="collapsible-header grey lighten-4">
      ${trip.arrivalLocationString} -> ${trip.departureLocationString}
      </div>
      <div class="collapsible-body white">
      Cost: ${trip.cost}, Departure Date/Time: ${trip.Departure.toDate()}
      <div>
      <a class="waves-effect waves-light btn" style="margin-top:5px" onclick="bookTrip()"><i class="material-icons right"></i>BOOK</a>
      </div>
      </div>
    </li>
    `;
    html += li;

  });

  tripsList.innerHTML = html;

}

function bookTrip(){
  console.log("Trip Booked!");
}



// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals); // initializing every single modal

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items); //initilaizing all the collapsible components for materialize

});
