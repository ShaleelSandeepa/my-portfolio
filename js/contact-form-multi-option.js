// Enhanced Contact Form Script with Multiple Email Options
// This version gives users choice between Gmail, Outlook, or Default email client

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
  
  // Simulate sending
  setTimeout(function() {
    // Show email options
    showEmailOptions(name, email, subject, message);
    
    // Reset button state
    btnText.style.display = 'inline-block';
    btnLoader.style.display = 'none';
    submitBtn.disabled = false;
  }, 1000);
});

function showEmailOptions(name, email, subject, message) {
  const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  
  // Create modal for email options
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `;
  
  modal.innerHTML = `
    <div style="
      background: #2a2a2a;
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      max-width: 400px;
      border: 2px solid var(--theme-yellow);
    ">
      <h3 style="color: #fff; margin-bottom: 1.5rem;">Choose Email Client</h3>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <button onclick="openGmail('${encodeURIComponent(subject)}', '${encodeURIComponent(emailBody)}')" style="
          background: var(--theme-yellow);
          color: #000;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        ">📧 Open Gmail</button>
        
        <button onclick="openOutlook('${encodeURIComponent(subject)}', '${encodeURIComponent(emailBody)}')" style="
          background: #0078d4;
          color: #fff;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        ">📮 Open Outlook</button>
        
        <button onclick="openDefaultEmail('${encodeURIComponent(subject)}', '${encodeURIComponent(emailBody)}')" style="
          background: #555;
          color: #fff;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        ">✉️ Default Email Client</button>
        
        <button onclick="closeModal()" style="
          background: transparent;
          color: #999;
          border: 1px solid #555;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 1rem;
        ">Cancel</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  window.currentModal = modal;
}

function openGmail(subject, body) {
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shaleelsandeepa@gmail.com&su=${subject}&body=${body}`;
  window.open(gmailLink, '_blank');
  closeModal();
  showStatus('success', 'Gmail opened in a new tab!');
}

function openOutlook(subject, body) {
  const outlookLink = `https://outlook.live.com/mail/0/deeplink/compose?to=shaleelsandeepa@gmail.com&subject=${subject}&body=${body}`;
  window.open(outlookLink, '_blank');
  closeModal();
  showStatus('success', 'Outlook opened in a new tab!');
}

function openDefaultEmail(subject, body) {
  const mailtoLink = `mailto:shaleelsandeepa@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
  closeModal();
  showStatus('success', 'Default email client should open now!');
}

function closeModal() {
  if (window.currentModal) {
    document.body.removeChild(window.currentModal);
    window.currentModal = null;
  }
  
  // Reset form
  document.getElementById('contact-form').reset();
  
  // Remove focused class from floating labels
  document.querySelectorAll('.floating-label').forEach(label => {
    label.classList.remove('focused');
  });
}

function showStatus(type, message) {
  const statusDiv = document.getElementById('form-status');
  statusDiv.className = 'form-status ' + type;
  statusDiv.innerHTML = message;
  statusDiv.style.display = 'block';
  
  // Auto hide after 5 seconds
  setTimeout(function() {
    statusDiv.style.display = 'none';
  }, 5000);
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
