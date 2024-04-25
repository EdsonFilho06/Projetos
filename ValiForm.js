function validateForm() {
    document.getElementById("nomeError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("idadeError").textContent = "";
  
    // Get form inputs
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var idade = document.getElementById("idade").value;
  
    var isValid = true;
  
    // Validate name
    if (nome === "") {
      document.getElementById("nomeError").textContent = "Por favor, insira seu nome.";
      isValid = false;
    }
  
    // Validate email
    if (email === "") {
      document.getElementById("emailError").textContent = "Por favor, insira seu email.";
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById("emailError").textContent = "Por favor, insira um email válido.";
      isValid = false;
    }
  
    // Validate age
    if (age === "" || isNaN(idade)) {
      document.getElementById("idadeError").textContent = "Por favor, insira sua idade.";
      isValid = false;
    }
  
    return isValid;
  }
  
  function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }