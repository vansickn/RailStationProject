const tripsList = document.querySelector('.trips');

//setup trips
const setupTrips = (data) => {
  let html = '';
  data.forEach(doc => {
    const trip = doc.data();
    const li = `
    <li>
      <div class="collapsible-header grey lighten-4">${trip.cost}</div>
      <div class="collapsible-body white">${trip.Arrival}</div>
    </li>
    `;
    html += li;

  });

  tripsList.innerHTML = html;

}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals); // initializing every single modal

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items); //initilaizing all the collapsible components for materialize

});
