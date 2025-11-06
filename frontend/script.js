function scrollToSignup() {
    document.getElementById('signup').scrollIntoView({ behavior: "smooth" });
}
function loadEvents() {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = `
        <div class="feature-card sophisticated">
            <div class="card-icon">🚀</div>
            <h3>Code4Campus Hackathon</h3>
            <p>Dec 12: Connect, code & win with your peers!</p>
        </div>
        <div class="feature-card sophisticated">
            <div class="card-icon">🤖</div>
            <h3>AI Workshop</h3>
            <p>Dec 19: Explore AI tools & build chatbots.</p>
        </div>
        <div class="feature-card sophisticated">
            <div class="card-icon">🎉</div>
            <h3>Cultural Fest</h3>
            <p>Jan 8: Music, art, and fun activities!</p>
        </div>
    `;
}
function registerUser(event) {
    event.preventDefault();
    alert("Your sophisticated CampusSync profile is ready! 🚀");
}
window.onload = loadEvents;

function registerUser(event) {
  event.preventDefault();

  const profileData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    skills: document.getElementById('skills').value.trim().split(',').map(s => s.trim()),
    interests: document.getElementById('interests').value.trim().split(',').map(i => i.trim()),
    goals: document.getElementById('goals').value.trim(),
    availability: document.getElementById('availability').value,
  };

  console.log("Profile Data Collected:", profileData);

  // For now, just alert user and reset form
  alert(`Thanks ${profileData.name}! Your profile has been created. Ready for matchmaking soon!`);
  document.getElementById('signup-form').reset();

  // TODO: Send 'profileData' to backend via API e.g., using fetch()
}

