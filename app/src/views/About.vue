<template>
  <section class="about">
    <h2 id="title">Sobre mí</h2>
    <div class="about-content">
      <div class="about-img">
        <img src="@/assets/about.jpg" alt="Foto sobre mí" />
      </div>
      <div class="about-info">
        <h2>
          <span class="name">Thomas Linares</span>,<br /><span class="profession"
            >Desarrollador de Software</span
          >
        </h2>
        <p>
          Soy Técnico Informático egresado de la Escuela Técnica N.° 2 de Berisso y actualmente
          estudio Ingeniería en Sistemas en la UTN. Me apasiona la tecnología, disfruto aprender de
          forma constante y llevar a cabo proyectos que me permitan crecer. Python es mi fuerte,
          aunque siempre busco experimentar con nuevos lenguajes y herramientas para ampliar mis
          horizontes.
        </p>
        <div class="social-links social-bottom">
          <a
            href="https://www.linkedin.com/in/thomas-linares-469902323/"
            target="_blank"
            class="btn-social"
          >
            <svg width="28" height="28" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.102-.021-2.521-1.537-2.521-1.537 0-1.773 1.2-1.773 2.438v4.687h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.6 2 3.6 4.59v4.739z"
                fill="#42b983"
              />
            </svg>
            LinkedIn
          </a>
          <a href="https://github.com/D4rkam" target="_blank" class="btn-social">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.39 7.863 10.918.575.107.787-.25.787-.557 0-.275-.01-1.004-.016-1.97-3.198.695-3.873-1.542-3.873-1.542-.523-1.328-1.278-1.682-1.278-1.682-1.044-.714.08-.7.08-.7 1.155.082 1.764 1.187 1.764 1.187 1.027 1.76 2.695 1.252 3.35.958.104-.744.402-1.252.732-1.54-2.553-.29-5.238-1.277-5.238-5.682 0-1.255.449-2.281 1.184-3.086-.119-.29-.513-1.457.112-3.037 0 0 .966-.309 3.166 1.18a11.02 11.02 0 0 1 2.884-.388c.979.005 1.967.132 2.884.388 2.2-1.489 3.165-1.18 3.165-1.18.626 1.58.232 2.747.113 3.037.737.805 1.184 1.831 1.184 3.086 0 4.416-2.69 5.39-5.254 5.676.414.356.783 1.057.783 2.131 0 1.538-.014 2.779-.014 3.157 0 .309.21.67.793.556A10.995 10.995 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z"
              />
            </svg>

            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Puedes agregar datos personales aquí
</script>

<style scoped>
.about {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#title {
  text-align: center;
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 1rem;
  width: 100%;
}

.about-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;
  max-width: 800px;
}
.about-img {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.about-img img {
  width: 300px;
  height: 300px;
  border-radius: 20%; /* Igual que Home */
  object-fit: cover;
  box-shadow: 0 8px 32px rgba(23, 131, 88, 0.22); /* Igual que Home */
}
.about-info {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-top: 0;
  height: 300px;
}
.about-info h2 {
  font-size: 1.3rem;
  margin: 0 0 0 0;
  font-weight: bold;
}
.name {
  color: #fff;
}
.profession {
  color: #42b983; /* Color unificado */
}
.about-info p {
  color: #bdc3c7; /* Color más suave para descripción */
  margin-bottom: 1rem;
}
.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.social-bottom {
  margin-top: auto;
}
.btn-social {
  background: transparent;
  color: #42b983;
  border: 1px solid #178358;
  border-radius: 12px;
  font-weight: 600;
  transition:
    box-shadow 0.2s,
    transform 0.2s,
    background 0.2s,
    color 0.2s;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.btn-social svg {
  width: 28px;
  height: 28px;
}
.btn-social:hover {
  background: transparent;
  color: #42b983;
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 32px rgba(23, 131, 88, 0.22);
}
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .about-img img {
    width: 200px; /* antes 160px */
    height: 200px; /* ajustado proporcionalmente */
    border-radius: 20%; /* redondeado como en Home */
  }
  .about-info {
    align-items: center; /* centra contenido */
    text-align: center; /* centra texto */
    height: auto; /* permite crecer si el texto ocupa más */
  }
  .social-links {
    justify-content: center; /* centra los botones */
  }
}
</style>
