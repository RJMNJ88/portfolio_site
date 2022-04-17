// modal functionality
const modal = document.querySelector('.modal');
const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    let status = document.getElementById("status");
    status.classList.remove('active');
    modal.close();
});


// Home section contact form functionality
var form = document.getElementById("contact-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.classList.add('active');
      status.innerHTML = "<i class='fa-solid fa-check'</i>";
      // status.innerHTML = "Thanks for your message!";
      form.reset();
      // form.close() // Attempt to close form
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.classList.add('active');
          status.innerHTML = "<i class='fa-solid fa-xmark'></i>";
          alert('Could not send message !');
          // status.innerHTML = "Oops! There was a problem submitting your form."
        }
      })
    }
  }).catch(error => {
    status.classList.add('active');
    status.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    alert('Could not send message !');
    // status.innerHTML = "Oops! There was a problem submitting your form."
  });
}
form.addEventListener("submit", handleSubmit)

// Remove contact form status => class="active"
function keyPress (e) {
  let status = document.getElementById("status");
  if(e.key === "Escape") {
    status.classList.remove('active');
  }
}

// Contact section contact form functionality
var form = document.getElementById("sub-contact");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("sub-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.classList.add('active');
      status.innerHTML = "<i class='fa-solid fa-check'</i>";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.classList.add('active');
          status.innerHTML = "<i class='fa-solid fa-xmark'></i>";
          alert('Could not send message !');
          // status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.classList.add('active');
    status.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    alert('Could not send message !');
    // status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

// Menu button functionality
let menuBtn = document.querySelector('#menu-btn');
let menu = document.querySelector('.menu');

menuBtn.onclick = () => {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('fa-xmark');
  menuBtn.classList.toggle('active');
}
