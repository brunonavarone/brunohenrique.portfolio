// Inicialize o EmailJS com suas credenciais
emailjs.init("2rbwEpGfZ0Ysb6vV9c3jN");

// Adicione um evento de envio para o formulário
document.getElementById("emailForm").onsubmit = function(event) {
  event.preventDefault();

  // Obtenha a mensagem digitada pelo usuário na textarea
  const userMessage = document.getElementById("userMessage").value;

  // Use o serviço EmailJS para enviar o e-mail
  emailjs.send("service_0hutqt6", "template_a784plf", { message: userMessage })
    .then(function(response) {
      alert("E-mail enviado com sucesso!");
    }, function(error) {
      alert("Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.");
    });
};
