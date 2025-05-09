/**
 * Contact Form Validation and Submission
 * Vanilla JS implementation replacing React hooks and state management
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get form elements
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const propertyTypeInput = document.getElementById('propertyType');
  const messageInput = document.getElementById('message');
  
  // Get error elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const propertyTypeError = document.getElementById('propertyTypeError');
  const messageError = document.getElementById('messageError');
  
  // Get form status messages
  const formSuccess = document.getElementById('formSuccess');
  const formError = document.getElementById('formError');
  
  // Get submit button elements
  const submitButton = document.getElementById('submitButton');
  const submitText = document.getElementById('submitText');
  const submitSpinner = document.getElementById('submitSpinner');
  
  if (!contactForm) return;
  
  // Hide status messages initially
  formSuccess.style.display = 'none';
  formError.style.display = 'none';
  submitSpinner.style.display = 'none';
  
  // Validation functions
  const validators = {
    name: function(value) {
      if (!value.trim()) {
        return 'Name is required';
      }
      return '';
    },
    
    email: function(value) {
      if (!value.trim()) {
        return 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Invalid email format';
      }
      return '';
    },
    
    phone: function(value) {
      if (value && !/^\+?[\d\s-]{10,}$/.test(value)) {
        return 'Invalid phone number format';
      }
      return '';
    },
    
    propertyType: function(value) {
      if (!value) {
        return 'Please select a property type';
      }
      return '';
    },
    
    message: function(value) {
      if (!value.trim()) {
        return 'Message is required';
      }
      return '';
    }
  };
  
  // Handle input blur events for validation feedback
  const attachValidation = (input, errorElement, validatorFn) => {
    if (!input || !errorElement) return;
    
    input.addEventListener('blur', function() {
      const error = validatorFn(input.value);
      errorElement.textContent = error;
      
      if (error) {
        input.classList.add('has-error');
        errorElement.style.display = 'block';
      } else {
        input.classList.remove('has-error');
        errorElement.style.display = 'none';
      }
    });
    
    input.addEventListener('input', function() {
      // Clear error on input
      if (errorElement.textContent) {
        errorElement.textContent = '';
        input.classList.remove('has-error');
        errorElement.style.display = 'none';
      }
    });
  };
  
  // Attach validation to inputs
  attachValidation(nameInput, nameError, validators.name);
  attachValidation(emailInput, emailError, validators.email);
  attachValidation(phoneInput, phoneError, validators.phone);
  attachValidation(propertyTypeInput, propertyTypeError, validators.propertyType);
  attachValidation(messageInput, messageError, validators.message);
  
  // Validate the entire form
  const validateForm = () => {
    let isValid = true;
    
    // Validate each field
    const fields = [
      { input: nameInput, error: nameError, validator: validators.name },
      { input: emailInput, error: emailError, validator: validators.email },
      { input: phoneInput, error: phoneError, validator: validators.phone },
      { input: propertyTypeInput, error: propertyTypeError, validator: validators.propertyType },
      { input: messageInput, error: messageError, validator: validators.message }
    ];
    
    fields.forEach(field => {
      if (!field.input || !field.error) return;
      
      const error = field.validator(field.input.value);
      field.error.textContent = error;
      
      if (error) {
        field.input.classList.add('has-error');
        field.error.style.display = 'block';
        isValid = false;
      } else {
        field.input.classList.remove('has-error');
        field.error.style.display = 'none';
      }
    });
    
    return isValid;
  };
  
  // Form submission handler
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset status messages
    formSuccess.style.display = 'none';
    formError.style.display = 'none';
    
    // Validate the form
    if (!validateForm()) {
      return;
    }
    
    // Show loading state
    submitText.textContent = 'Sending...';
    submitSpinner.style.display = 'inline-block';
    submitButton.disabled = true;
    
    // Collect form data
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      propertyType: propertyTypeInput.value,
      message: messageInput.value
    };
    
    // Simulate form submission with a delay
    // In a real implementation, this would be an API call or form submission to a backend
    setTimeout(function() {
      try {
        // Simulate successful form submission
        console.log('Form submitted:', formData);
        
        // Show success message
        formSuccess.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Reset visual state after 5 seconds
        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 5000);
      } catch (error) {
        // Show error message
        formError.style.display = 'block';
        
        // Reset visual state after 5 seconds
        setTimeout(() => {
          formError.style.display = 'none';
        }, 5000);
      } finally {
        // Reset button state
        submitText.textContent = 'Send Message';
        submitSpinner.style.display = 'none';
        submitButton.disabled = false;
      }
    }, 1500);
  });
}); 