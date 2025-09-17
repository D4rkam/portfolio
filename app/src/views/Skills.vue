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
      <div class="skill-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          alt="SQL"
        />
        <h3>SQL</h3>
      </div>
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
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  justify-items: center;
}
/* Card unificada con el diseño general */
.skill-card {
  background: transparent;
  border-radius: 12px;
  box-shadow: none;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  min-height: 120px;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  border: 1px solid #178358;
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
@media (max-width: 900px) {
  .skills-list {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
  }
  .skill-card {
    width: 160px;
    min-height: 180px;
    padding: 1.2rem 0.5rem 0.5rem 0.5rem;
  }
}
</style>
