// JavaScript opcional para uma rolagem suave adicional 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  /*Aqui sobe notificação de que foi enviado seu fomulario*/
function handleSubmit(event){
    event.preventDefault();
    alert("Obrigado por entrar em contato!");
}