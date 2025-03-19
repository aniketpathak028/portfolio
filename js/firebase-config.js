// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to update visit count
function updateVisitCount() {
  const visitCountElement = document.getElementById('visit-count');
  if (!visitCountElement) return;

  // Hide the count initially
  visitCountElement.style.opacity = '0';
  visitCountElement.style.transform = 'translateY(10px)';
  
  const visitCountRef = database.ref('visit');
  
  visitCountRef.once('value')
    .then((snapshot) => {
      let count = snapshot.val() || 0;
      count++;
      
      // Update the count in Firebase and return both the promise and count
      return Promise.all([visitCountRef.set(count), count]);
    })
    .then(([_, count]) => {
      // Update the display with a fade-in and slide-up effect
      visitCountElement.textContent = count;
      visitCountElement.style.color = '#5867e8';
      visitCountElement.style.opacity = '1';
      visitCountElement.style.transform = 'translateY(0)';
      visitCountElement.style.transition = 'all 0.3s ease-out';
    })
    .catch((error) => {
      console.error('Error updating visit count:', error);
      visitCountElement.textContent = 'Error';
      visitCountElement.style.color = '#ff4444';
      visitCountElement.style.opacity = '1';
      visitCountElement.style.transform = 'translateY(0)';
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateVisitCount); 