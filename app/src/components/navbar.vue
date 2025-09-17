<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <a href="/">
        <img src="@/assets/logo.svg" alt="Logo" class="navbar-logo-img" />
      </a>
    </div>
    uh
    <div class="navbar-hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="navbar-links">
      <li><a href="#experience" @click="scrollToSection">Experiencia</a></li>
      <li><a href="#about" @click="scrollToSection">Sobre mí</a></li>
      <li><a href="#skills" @click="scrollToSection">Habilidades</a></li>
      <li>
        <a href="/cv.pdf" class="btn-cv" download="Thomas_Linares_CV.pdf" @click="downloadCV">
          <span>Descargar CV</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleMenu() {
      const navbar = document.querySelector('.navbar')
      navbar.classList.toggle('open')
    },
    scrollToSection(event) {
      event.preventDefault()
      const href = event.target.getAttribute('href')
      const section = document.querySelector(href)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
      const navbar = document.querySelector('.navbar')
      navbar.classList.remove('open')
    },
    async downloadCV(event) {
      event.preventDefault() // Prevenimos la navegación normal
      const navbar = document.querySelector('.navbar')
      const cvPath = '/cv.pdf'
      const cvName = 'Thomas_Linares_CV.pdf'

      try {
        // Hacemos la petición para obtener el archivo como un blob
        const response = await fetch(cvPath)
        if (!response.ok) {
          throw new Error(
            'No se pudo descargar el CV. Verifique que el archivo existe en la carpeta `public`.',
          )
        }
        const blob = await response.blob()

        // Creamos un enlace temporal en memoria para iniciar la descarga
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', cvName) // El nombre que tendrá el archivo descargado
        document.body.appendChild(link)
        link.click()

        // Limpiamos el enlace temporal
        link.parentNode.removeChild(link)
        window.URL.revokeObjectURL(url)
      } catch (error) {
        console.error(error)
        alert(error.message)
      }

      // Cerramos el menú en móvil después de la operación
      if (navbar.classList.contains('open')) {
        navbar.classList.remove('open')
      }
    },
  },
}
</script>

<style scoped>
a {
  background: transparent;
}
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: #171717;
  color: #fff;
  z-index: 1000;
}

.navbar-logo-img {
  height: 90px;
}

.navbar-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.navbar-links a {
  display: inline-block;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
  background: transparent;
  box-shadow: none;
  transition:
    color 0.2s,
    transform 0.2s,
    box-shadow 0.2s,
    border-color 0.2s;
  padding: 0.5rem 0;
}

.btn-cv {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: #42b983; /* Color principal para destacar */
  line-height: 1;
  border-radius: 8px;
  animation: pulse-text-glow 2.5s infinite ease-in-out;
  transition:
    transform 0.2s,
    text-shadow 0.2s;
}
.btn-cv:hover {
  animation: none; /* Pausar la animación de pulso */
  text-shadow: 0 0 12px rgba(66, 185, 131, 1);
  transform: translateY(-6px) scale(1.03);
  color: #50e3a4; /* Un poco más brillante al pasar el cursor */
}
.btn-cv:focus-visible {
  outline: 2px solid #42b983;
  outline-offset: 2px;
}
.icon-download {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

@keyframes pulse-text-glow {
  0%,
  100% {
    text-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
  }
  50% {
    text-shadow: 0 0 10px rgba(66, 185, 131, 0.9);
  }
}

.navbar-links a:hover {
  color: #42b983;
  transform: translateY(-6px) scale(1.03);
  border-radius: 0;
  background: transparent;
}

.navbar-hamburger {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  .navbar-logo-img {
    height: 56px;
  }
  .navbar-links {
    position: absolute;
    top: 72px;
    left: 0;
    width: 100vw;
    background: #171717;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 0;
    margin: 0;
    box-shadow: 0 8px 24px -6px #42b983;
    display: none;
  }
  .navbar.open .navbar-links {
    display: flex;
  }
  .navbar-hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 1100;
  }
  .navbar-hamburger span {
    display: block;
    width: 28px;
    height: 4px;
    margin: 4px 0;
    background: #42b983;
    border-radius: 2px;
    transition: 0.3s;
  }
}

/* Sugerencia: agrega en App.vue o en tu vista principal un margin-top: 72px (o el alto del navbar)
para evitar que el contenido quede oculto. */
</style>
