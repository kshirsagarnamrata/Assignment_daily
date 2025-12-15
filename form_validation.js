
  function login() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    document.getElementById("loginEmailError").innerText = "";
    document.getElementById("loginPasswordError").innerText = "";

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "" && password === "") {
      document.getElementById("loginEmailError").innerText = "Email is required";
      document.getElementById("loginPasswordError").innerText = "Password is required";
      return;
    }

    if (!emailPattern.test(email)) {
      document.getElementById("loginEmailError").innerText = "Invalid email format";
      return;
    }

    if (password === "") {
      document.getElementById("loginPasswordError").innerText = "Password is required";
      return;
    }

    if (password.length < 6) {
      document.getElementById("loginPasswordError").innerText = "Password must be at least 6 characters";
      return;
    }

    alert("Login Successful");
    document.getElementById("registerCard").classList.remove("d-none");
  }

  function register() {
    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let phone = document.getElementById("regPhone").value.trim();
    let password = document.getElementById("regPassword").value.trim();

    document.getElementById("regNameError").innerText = "";
    document.getElementById("regEmailError").innerText = "";
    document.getElementById("regPhoneError").innerText = "";
    document.getElementById("regPasswordError").innerText = "";

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;

    if (name === "" || email === "" || phone === "" || password === "") {
      if (name === "") document.getElementById("regNameError").innerText = "Name is required";
      if (!emailPattern.test(email)) document.getElementById("regEmailError").innerText = "Invalid email";
      if (!phonePattern.test(phone)) document.getElementById("regPhoneError").innerText = "Phone must be 10 digits";
      if (password === "") document.getElementById("regPasswordError").innerText = "Password is required";
      return;
    }

    alert("Registration Successful");
  }
