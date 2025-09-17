<template>
  <section class="skills">
    <h2 class="skills-title">Habilidades</h2>
    <div class="skills-list">
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
          alt="Vue.js"
        />
        <h3>Vue.js</h3>
      </div>
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
        />
        <h3>JavaScript</h3>
      </div>
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML5"
        />
        <h3>HTML5</h3>
      </div>
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS3"
        />
        <h3>CSS3</h3>
      </div>
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="Git"
        />
        <h3>Git</h3>
      </div>
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
        />
        <h3>Node.js</h3>
      </div>
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
          alt="Flutter"
        />
        <h3>Flutter</h3>
      </div>
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="Python"
        />
        <h3>Python</h3>
      </div>
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
          alt="FastAPI"
        />
        <h3>FastAPI</h3>
      </div>
      <!-- NUEVAS: Flask y Django -->
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
          alt="Flask"
          style="filter: invert(70%) sepia(20%) saturate(300%) hue-rotate(90deg)"
        />
        <h3>Flask</h3>
      </div>
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
          alt="Django"
        />
        <h3>Django</h3>
      </div>
      <!-- FIN NUEVAS: Flask y Django -->
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          alt="SQL"
        />
        <h3>SQL</h3>
      </div>
      <!-- NUEVAS HABILIDADES -->
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
          alt="Arduino"
        />
        <h3>Arduino</h3>
      </div>
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          alt="C++"
        />
        <h3>C++</h3>
      </div>
      <!-- FIN NUEVAS HABILIDADES -->
    </div>
  </section>
</template>

<script setup>
// Puedes agregar más habilidades o hacerlas dinámicas si lo deseas
</script>

<style scoped>
.skills {
  width: 80%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.skills-title {
  text-align: center;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
}
.skills-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)); /* Siempre 3 columnas */
  gap: 1.75rem 2rem;
  width: 100%;
  max-width: 960px;
  justify-items: center;
  box-sizing: border-box;
}
/* Card unificada con el diseño general */
.skill-card {
  background: transparent;
  border-radius: 12px;
  box-shadow: none;
  padding: 1rem 0.75rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; /* ocupa el track completo */
  max-width: 170px; /* evita tarjetas demasiado anchas en pantallas grandes */
  min-height: 130px;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  border: 1px solid #178358;
  box-sizing: border-box;
}
.skill-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 32px rgba(23, 131, 88, 0.22);
  border-color: #42b983;
}
.skill-card img {
  width: 56px;
  height: 56px;
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 8px rgba(23, 131, 88, 0.12));
}
.skill-card h3 {
  color: #42b983;
  font-size: 1rem;
  margin: 0;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.5px;
}
/* Ordenamos breakpoints de grande a pequeño para evitar overrides inesperados */
@media (max-width: 900px) {
  .skills-list {
    gap: 1.4rem 1.5rem;
  }
  .skill-card {
    min-height: 145px;
  }
}
@media (max-width: 600px) {
  .skills-list {
    gap: 1rem 0.9rem;
    padding: 0 0.4rem;
  }
  .skill-card {
    min-height: 135px;
    padding: 0.9rem 0.55rem 0.65rem;
  }
  .skill-card img {
    width: 48px;
    height: 48px;
    margin-bottom: 0.7rem;
  }
}
@media (max-width: 420px) {
  .skills-list {
    gap: 0.75rem 0.6rem;
    padding: 0 0.35rem;
  }
  .skill-card {
    min-height: 128px;
    padding: 0.75rem 0.4rem 0.55rem;
  }
  .skill-card img {
    width: 44px;
    height: 44px;
  }
  .skill-card h3 {
    font-size: 0.9rem;
  }
}
</style>
