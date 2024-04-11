document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var package = document.getElementById("package").value;
  
    // Basic validation
    if (name.trim() === "" || email.trim() === "" || package === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Example AJAX request to submit booking data to server
    // Replace this with your actual backend endpoint
    var formData = {
      name: name,
      email: email,
      package: package
    };
    
    // Example of using fetch API for AJAX request (modern approach)
    fetch("https://example.com/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert("Booking submitted successfully!");
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
      alert("Failed to submit booking. Please try again later.");
    });
  });
  