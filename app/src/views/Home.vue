<template>
  <section class="home">
    <div class="home-bg">
      <svg class="bubbles" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="bubble" cx="200" cy="500" r="32" fill="#42b983" fill-opacity="0.18" />
        <circle class="bubble" cx="600" cy="400" r="18" fill="#42b983" fill-opacity="0.12" />
        <circle class="bubble" cx="1200" cy="550" r="24" fill="#42b983" fill-opacity="0.15" />
        <circle class="bubble" cx="900" cy="350" r="14" fill="#42b983" fill-opacity="0.10" />
        <circle class="bubble" cx="400" cy="550" r="20" fill="#42b983" fill-opacity="0.13" />
      </svg>
    </div>
    <div class="home-content">
      <div class="avatar-container">
        <img src="@/assets/avatar.jpeg" alt="Avatar" class="avatar" />
      </div>
      <div class="presentation">
        <span>Hola, soy <span class="underline">Thomas Linares</span></span>
        <span>Desarrollador de software</span>
      </div>
    </div>
  </section>
</template>

<script setup>
// Puedes agregar lógica o datos aquí si lo necesitas
</script>

<style scoped>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  padding: 0 1rem;
}

.home-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.bubbles {
  width: 100vw;
  height: 100vh;
}

.bubble {
  animation: bubbleMove 7s infinite alternate ease-in-out;
}

.bubble:nth-child(2) {
  animation-delay: 2s;
}

.bubble:nth-child(3) {
  animation-delay: 4s;
}

.bubble:nth-child(4) {
  animation-delay: 1s;
}

.bubble:nth-child(5) {
  animation-delay: 3s;
}

@keyframes bubbleMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-60px) scale(1.1);
  }
}

.home-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.avatar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar {
  width: 350px;
  height: 350px;
  border-radius: 20%;
  box-shadow: 0 8px 32px rgba(23, 131, 88, 0.22); /* Sombra unificada */
  object-fit: cover;
}

.presentation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 40px;
  line-height: 1.2;
}

.presentation span {
  color: white;
  font-weight: bold;
  margin-bottom: 0;
}

.underline {
  text-decoration: underline;
  text-decoration-color: #42b983; /* Color unificado */
  text-underline-offset: 6px;
}

/* Media Queries para Responsividad */
@media (max-width: 1200px) {
  .home-content {
    gap: 2rem;
  }

  .avatar {
    width: 300px;
    height: 300px;
  }

  .presentation {
    font-size: 36px;
  }
}

@media (max-width: 992px) {
  .avatar {
    width: 250px;
    height: 250px;
  }

  .presentation {
    font-size: 32px;
  }
}

@media (max-width: 768px) {
  .home-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .avatar {
    width: 250px;
    height: 250px;
  }

  .presentation {
    align-items: center;
    font-size: 28px;
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .avatar {
    width: 200px;
    height: 200px;
  }

  .presentation {
    font-size: 24px;
  }
}

@media (max-width: 400px) {
  .avatar {
    width: 180px;
    height: 180px;
  }

  .presentation {
    font-size: 20px;
  }

  .home {
    padding: 0 0.5rem;
  }
}
</style>
