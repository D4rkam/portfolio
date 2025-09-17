<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <a href="./">
        <img src="@/assets/logo.svg" alt="Logo" class="navbar-logo-img" />
      </a>
    </div>
    <div
      class="navbar-hamburger"
      @click="toggleMenu"
      role="button"
      aria-label="Abrir menú"
      aria-expanded="false"
      tabindex="0"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="navbar-links">
      <li><a href="#experience" @click="scrollToSection">Proyectos</a></li>
      <li><a href="#about" @click="scrollToSection">Sobre mí</a></li>
      <li><a href="#skills" @click="scrollToSection">Habilidades</a></li>
      <li>
        <a :href="cvPublicPath" class="btn-cv" :download="cvFileName" @click="downloadCV">
          <span>Descargar CV</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      cvFileName: 'Thomas_Linares_CV.pdf',
      cvPublicPath: `${import.meta.env.BASE_URL}cv.pdf`,
    }
  },
  methods: {
    toggleMenu() {
      const navbar = document.querySelector('.navbar')
      navbar.classList.toggle('open')
      const btn = navbar.querySelector('.navbar-hamburger')
      if (btn)
        btn.setAttribute('aria-expanded', navbar.classList.contains('open') ? 'true' : 'false')
    },
    scrollToSection(event) {
      event.preventDefault()
      const href = event.target.getAttribute('href')
      const section = document.querySelector(href)
      if (section) section.scrollIntoView({ behavior: 'smooth' })
      const navbar = document.querySelector('.navbar')
      navbar.classList.remove('open')
    },
    async downloadCV(event) {
      event.preventDefault()
      const cvPath = `${import.meta.env.BASE_URL}cv.pdf`
      try {
        const response = await fetch(cvPath, { cache: 'no-store' })
        if (!response.ok)
          throw new Error('No se pudo descargar el CV. Verifique que cv.pdf está en /public.')
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', this.cvFileName)
        document.body.appendChild(link)
        link.click()
        link.remove()
        window.URL.revokeObjectURL(url)
      } catch (e) {
        console.error(e)
        alert(e.message)
      }
      const navbar = document.querySelector('.navbar')
      if (navbar.classList.contains('open')) navbar.classList.remove('open')
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
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 3rem;
  background: #171717;
  color: #fff;
  z-index: 1000;
  box-sizing: border-box;
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

@media (min-width: 1400px) {
  .navbar {
    padding: 1rem 4rem;
  }
}
@media (max-width: 768px) {
  .navbar {
    padding: 0.6rem 0.85rem;
  }
  .navbar-logo-img {
    height: 56px;
  }
  .navbar-links {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: #171717;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 0 0.75rem; /* se añade padding interno, el contenido se revela con animación */
    margin: 0;
    box-shadow: 0 8px 24px -6px #42b983;
    overflow: hidden;
    display: flex; /* siempre flex; controlamos visibilidad con max-height/opacidad */
    max-height: 0;
    opacity: 0;
    transform: translateY(-8px);
    pointer-events: none;
    transition:
      max-height 0.4s ease,
      opacity 0.32s ease,
      transform 0.4s ease,
      padding 0.3s ease;
  }
  .navbar.open .navbar-links {
    padding: 1.3rem 0.75rem 1.6rem;
    max-height: 480px; /* suficiente para todos los enlaces */
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
  /* Animación escalonada de enlaces */
  .navbar-links li {
    opacity: 0;
    transform: translateY(-6px);
    transition:
      opacity 0.35s ease,
      transform 0.35s ease;
  }
  .navbar.open .navbar-links li {
    opacity: 1;
    transform: translateY(0);
  }
  .navbar.open .navbar-links li:nth-child(1) {
    transition-delay: 0.05s;
  }
  .navbar.open .navbar-links li:nth-child(2) {
    transition-delay: 0.1s;
  }
  .navbar.open .navbar-links li:nth-child(3) {
    transition-delay: 0.15s;
  }
  .navbar.open .navbar-links li:nth-child(4) {
    transition-delay: 0.2s;
  }
  .navbar-hamburger {
    position: absolute;
    right: 0.85rem;
    top: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    cursor: pointer;
    z-index: 1100;
    background: rgba(23, 23, 23, 0.6);
    border: 1px solid #2b2b2b;
    border-radius: 10px;
    backdrop-filter: blur(4px);
  }
  /* Reinicio para spans */
  .navbar-hamburger span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 26px;
    height: 3px;
    background: #42b983;
    border-radius: 2px;
    transition: 0.35s ease;
  }
  .navbar-hamburger span:nth-child(1) {
    top: 12px;
  }
  .navbar-hamburger span:nth-child(2) {
    top: 20px;
  }
  .navbar-hamburger span:nth-child(3) {
    top: 28px;
  }
  /* Estado abierto -> formar X */
  .navbar.open .navbar-hamburger span:nth-child(1) {
    top: 20px;
    transform: translateX(-50%) rotate(45deg);
  }
  .navbar.open .navbar-hamburger span:nth-child(2) {
    opacity: 0;
  }
  .navbar.open .navbar-hamburger span:nth-child(3) {
    top: 20px;
    transform: translateX(-50%) rotate(-45deg);
  }
  /* Mejora de accesibilidad al enfocar */
  .navbar-hamburger:focus-visible {
    outline: 2px solid #42b983;
    outline-offset: 3px;
  }
}

/* Sugerencia: agrega en App.vue o en tu vista principal un margin-top: 72px (o el alto del navbar)
para evitar que el contenido quede oculto. */
</style>
