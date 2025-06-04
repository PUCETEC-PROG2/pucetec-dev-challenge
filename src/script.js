document.addEventListener("DOMContentLoaded", () => {
  const btnTema = document.getElementById("cambiar-tema");
  const body = document.body;

  btnTema.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
  });

  const form = document.getElementById("registroForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const carrera = document.getElementById("carrera").value.trim();

    if (!nombre || !correo || !carrera) {
      alert("Por favor completa todos los campos.");
      return;
    }

    alert("Formulario enviado con éxito. ¡Gracias por registrarte!");
    form.reset();
  });

  // Cargar participantes desde la API
  fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {
      const participantes = document.getElementById("participantes");
      data.results.forEach(persona => {
        const div = document.createElement("div");
        div.innerHTML = `
          <img src="${persona.picture.thumbnail}" alt="${persona.name.first}">
          <span>${persona.name.first} ${persona.name.last}</span>
        `;
        participantes.appendChild(div);
      });
    })
    .catch(error => console.error("Error al cargar participantes:", error));
});
