// Alternative Contact Form Script (No EmailJS Setup Required)
// Replace the existing contact form script with this for immediate functionality

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const form = this;
  const submitBtn = form.querySelector('.enhanced-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoader = submitBtn.querySelector('.btn-loader');
  const statusDiv = document.getElementById('form-status');
  
  // Show loading state
  btnText.style.display = 'none';
  btnLoader.style.display = 'inline-block';
  submitBtn.disabled = true;
  statusDiv.style.display = 'none';
  
  // Get form data
  const name = form.user_name.value;
  const email = form.user_email.value;
  const subject = form.subject.value;
  const message = form.message.value;
  
  // Simulate sending (replace with actual email service)
  setTimeout(function() {
    // Create mailto link
    const mailtoLink = `mailto:shaleelsandeepa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showStatus('success', 'Your email client should open now. If not, please send an email directly to shaleelsandeepa@gmail.com');
    
    // Reset form
    form.reset();
    
    // Reset button state
    btnText.style.display = 'inline-block';
    btnLoader.style.display = 'none';
    submitBtn.disabled = false;
  }, 1000);
});

function showStatus(type, message) {
  const statusDiv = document.getElementById('form-status');
  statusDiv.className = 'form-status ' + type;
  statusDiv.innerHTML = message;
  statusDiv.style.display = 'block';
  
  // Auto hide after 8 seconds for mailto message
  setTimeout(function() {
    statusDiv.style.display = 'none';
  }, 8000);
}

// Floating label animation
document.querySelectorAll('.floating-input').forEach(function(input) {
  input.addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
  });
  
  input.addEventListener('blur', function() {
    if (!this.value) {
      this.parentElement.classList.remove('focused');
    }
  });
  
  // Check on page load
  if (input.value) {
    input.parentElement.classList.add('focused');
  }
});
