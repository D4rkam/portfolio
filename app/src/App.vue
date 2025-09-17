<script setup>
import Navbar from './components/navbar.vue'
import Home from './views/Home.vue'
import Experience from './views/Experience.vue'
import About from './views/About.vue'
import Skills from './views/Skills.vue'
import './assets/base.css'
import { ref, onMounted, onUnmounted } from 'vue'
const showScrollTop = ref(false)
function handleScroll() {
  showScrollTop.value = window.scrollY > 200
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <main>
      <section id="home">
        <Home />
      </section>
      <hr />
      <section id="experience">
        <Experience />
      </section>
      <hr />
      <section id="about">
        <About />
      </section>
      <hr />
      <section id="skills">
        <Skills />
      </section>
    </main>
    <button
      v-show="showScrollTop"
      class="scroll-top-btn"
      @click="scrollToTop"
      aria-label="Volver arriba"
    >
      <svg
        class="icon-arrow-up"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  </div>
</template>

<style>
html,
body,
#app {
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  margin: 30px;
}
hr {
  width: 80%;
  border: none;
  border-top: 1px solid #3b3b3b;
  margin: 2rem auto;
}
.scroll-top-btn {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1200;
  background: rgba(23, 23, 23, 0.95);
  color: #42b983;
  border: 2px solid #42b983;
  border-radius: 50%;
  box-shadow: 0 6px 24px -6px #42b983;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.92;
  transition:
    opacity 0.2s,
    transform 0.2s,
    box-shadow 0.2s;
  backdrop-filter: blur(2px);
}
.scroll-top-btn .icon-arrow-up {
  width: 28px;
  height: 28px;
  stroke: currentColor;
  stroke-width: 2.5;
  fill: none;
}
.scroll-top-btn:hover {
  opacity: 1;
  transform: scale(1.12) translateY(-4px);
  box-shadow: 0 12px 32px -8px #42b983;
  background: rgba(23, 23, 23, 1);
}
.scroll-top-btn:active {
  transform: scale(0.98);
  box-shadow: 0 2px 8px -2px #42b983;
}
</style>
