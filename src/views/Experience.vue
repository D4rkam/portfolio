<template>
  <section class="experience">
    <h2>Proyectos</h2>
    <div class="experience-list">
      <div class="experience-item card">
        <div class="experience-info">
          <h3>Ya Paso - API REST</h3>
          <!-- <p class="location">Buenos Aires, Argentina</p> -->
          <p class="date">2024 - Actualidad</p>
          <div class="experience-tags">
            <span>Python</span>
            <span>SQLAlchemy</span>
            <span>FastAPI</span>
            <span>Firebase</span>
            <span>JWT Auth</span>
            <span>Mercado Pago</span>
          </div>
        </div>
        <div class="experience-desc">
          <p class="desc-text">
            Desarrollé una API REST con FastAPI para gestionar el ecosistema de "Ya Paso". El
            backend maneja la creación y administración de usuarios, autenticación con JWT, gestión
            de saldos, control de stock, pedidos en tiempo real y métricas de consumo. Además,
            integré Mercado Pago como pasarela de pago para que los estudiantes puedan recargar
            saldo de forma segura y rápida. La base de datos está implementada con SQLAlchemy y
            conectada a Firebase para la integración de notificaciones y almacenamiento. Esta
            arquitectura permite escalar el sistema fácilmente a múltiples instituciones educativas,
            asegurando seguridad, eficiencia y robustez en cada transacción.
          </p>
          <button class="read-more-btn" type="button">... Leer más</button>
          <div class="experience-actions">
            <a
              href="https://github.com/D4rkam/api-yapaso"
              class="btn-repo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el repositorio de YA PASO API en GitHub"
            >
              <svg class="icon-github" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              <span>Visitar Repositorio</span>
            </a>
            <a
              href="#"
              class="btn-live"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el sitio web de YA PASO API"
            >
              <svg class="icon-external" viewBox="0 0 24 24" aria-hidden="true">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3a15 15 0 0 0 0 18a15 15 0 0 0 0-18" />
                </g>
              </svg>
              <span>Visitar Sitio Web</span>
            </a>
          </div>
        </div>
      </div>
      <div class="experience-item card">
        <div class="experience-info">
          <h3>Ya Paso - APP</h3>
          <!-- <p class="location">Córdoba, Argentina</p> -->
          <p class="date">2024 - Actualidad</p>
          <div class="experience-tags">
            <span>Dart</span>
            <span>Flutter</span>
            <span>GetX</span>
          </div>
        </div>
        <div class="experience-desc">
          <p class="desc-text">
            Construí la aplicación móvil de "Ya Paso" con Flutter, orientada a brindar a los
            estudiantes una experiencia ágil e intuitiva. Desde la app pueden cargar saldo, realizar
            pedidos y recibir notificaciones en tiempo real del estado de sus compras. La interfaz
            está pensada para minimizar la fricción durante los recreos, permitiendo que los pedidos
            se realicen en segundos. Consume la API REST desarrollada especialmente para este
            proyecto.
          </p>
          <button class="read-more-btn" type="button">... Leer más</button>
          <div class="experience-actions">
            <a
              href="https://github.com/D4rkam/YaPasoApp"
              class="btn-repo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el repositorio de YA PASO APP en GitHub"
            >
              <svg class="icon-github" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              <span>Visitar Repositorio</span>
            </a>
          </div>
        </div>
      </div>
      <div class="experience-item card">
        <div class="experience-info">
          <h3>Coin Market</h3>
          <!-- <p class="location">Córdoba, Argentina</p> -->
          <p class="date">2023</p>
          <div class="experience-tags">
            <span>Vue.js</span>
            <span>Bootstrap</span>
          </div>
        </div>
        <div class="experience-desc">
          <p class="desc-text">
            Coin Market es una aplicación orientada a mostrar información sobre diferentes
            criptomonedas, sus precios y variaciones. El objetivo principal es ofrecer una interfaz
            sencilla para visualizar el estado actual del mercado y facilitar la toma de decisiones
            sobre compra/venta de activos digitales.
          </p>
          <button class="read-more-btn" type="button">... Leer más</button>
          <div class="experience-actions">
            <a
              href="https://github.com/D4rkam/coin-market"
              class="btn-repo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el repositorio del Proyecto Coin Market en GitHub"
            >
              <svg class="icon-github" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              <span>Visitar Repositorio</span>
            </a>
            <a
              href="https://d4rkam.github.io/coin-market/"
              class="btn-live"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el sitio web de Coin Market"
            >
              <svg class="icon-external" viewBox="0 0 24 24" aria-hidden="true">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3a15 15 0 0 0 0 18a15 15 0 0 0 0-18" />
                </g>
              </svg>
              <span>Visitar Sitio Web</span>
            </a>
          </div>
        </div>
      </div>
      <div class="experience-item card">
        <div class="experience-info">
          <h3>EMET - Estación Meteorológica</h3>
          <!-- <p class="location">Córdoba, Argentina</p> -->
          <p class="date">2023</p>
          <div class="experience-tags">
            <span>C++</span>
            <span>Arduino</span>
          </div>
        </div>
        <div class="experience-desc">
          <p class="desc-text">
            Este proyecto contiene el código de una Estación Meteorológica automatizada desarrollada
            en la Escuela Técnica N°2 de Berisso. El sistema está basado en microcontroladores
            Arduino (ATmega2560 y ESP8266) y sensores ambientales, y tiene como objetivo medir,
            mostrar y enviar datos meteorológicos relevantes.
          </p>
          <button class="read-more-btn" type="button">... Leer más</button>
          <div class="experience-actions">
            <a
              href="https://github.com/D4rkam/EMET-Arduino"
              class="btn-repo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el repositorio del Proyecto EMET en GitHub"
            >
              <svg class="icon-github" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              <span>Visitar Repositorio</span>
            </a>
          </div>
        </div>
      </div>
      <div class="experience-item card">
        <div class="experience-info">
          <h3>Scanpy</h3>
          <!-- <p class="location">Córdoba, Argentina</p> -->
          <p class="date">2023</p>
          <div class="experience-tags">
            <span>Python</span>
          </div>
        </div>
        <div class="experience-desc">
          <p class="desc-text">
            Scanpy es una utilidad desarrollada en Python que facilita el escaneo automático de
            puertos en equipos y redes, utilizando la potencia de Nmap. Su objetivo es simplificar
            el proceso de escaneo, permitiendo a los usuarios identificar servicios y posibles
            vulnerabilidades de manera rápida y eficiente.
          </p>
          <button class="read-more-btn" type="button">... Leer más</button>
          <div class="experience-actions">
            <a
              href="https://github.com/D4rkam/scanpy"
              class="btn-repo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el repositorio del Proyecto Scanpy en GitHub"
            >
              <svg class="icon-github" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              <span>Visitar Repositorio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

function applyClamp() {
  const isMobile = window.innerWidth <= 768
  // Para cada card, decidir si truncar y mostrar/ocultar el botón según overflow
  document.querySelectorAll('.experience-desc').forEach((desc) => {
    const p = desc.querySelector('.desc-text')
    const btn = desc.querySelector('.read-more-btn')
    if (!p || !btn) return

    // Reset estado
    p.classList.remove('truncated', 'expanded')

    if (!isMobile) {
      btn.style.display = 'none'
      return
    }

    // Aplicar truncado temporal para medir
    p.classList.add('truncated')

    // Si no hay overflow (contenido no supera el clamp), ocultar botón
    const isOverflowing = p.scrollHeight > p.clientHeight + 1
    btn.style.display = isOverflowing ? 'inline' : 'none'

    // Estado inicial: no expandido
    btn.textContent = '... Leer más'
    btn.onclick = () => {
      const expanded = p.classList.toggle('expanded')
      if (expanded) {
        p.classList.remove('truncated')
        btn.textContent = 'Leer menos'
      } else {
        p.classList.add('truncated')
        btn.textContent = '... Leer más'
      }
    }
  })
}

onMounted(() => {
  applyClamp()
  window.addEventListener('resize', applyClamp)
})

onUnmounted(() => {
  window.removeEventListener('resize', applyClamp)
})
</script>

<style scoped>
.experience {
  display: flex;
  flex-direction: column;
  /* Evitamos centrar hijos para que el ancho 100% del contenedor interno no genere efectos ópticos */
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
}
.experience h2 {
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
}
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1020px; /* ligero ajuste para compensar bordes y escala hover */
  margin-inline: auto;
  /* Gutter fluido pero consistente y perfectamente simétrico */
  padding-left: clamp(1rem, 5vw, 1.5rem);
  padding-right: clamp(1rem, 5vw, 1.5rem);
  box-sizing: border-box;
}
.experience-item {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  background: transparent;
  border-radius: 12px;
  border: 1px solid #178358;
  box-shadow: none;
  box-sizing: border-box;
  transition:
    box-shadow 0.2s,
    transform 0.2s,
    border-color 0.2s;
  transform-origin: center center; /* Evita desplazamiento óptico en hover */
}
.experience-item:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 32px rgba(23, 131, 88, 0.22);
  border-color: #42b983;
}
.experience-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem; /* Añadido para espaciar los elementos internos */
  min-width: 200px;
}
.experience-info h3 {
  margin: 0 0 0.2rem 0;
  font-size: 30px;
  font-weight: bold;
  color: #42b983;
}

.location,
.date {
  color: #bdc3c7; /* Color más suave para detalles */
  font-size: 0.9rem;
  margin: 0; /* Reseteo de margen */
}
.experience-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.experience-tags span {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background-color: rgba(66, 185, 131, 0.15);
  color: #42b983;
  font-size: 0.8rem;
  font-weight: bold;
}
.experience-desc {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  color: #fff;
}
.btn-repo {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid #4a4a4a;
  color: #bdc3c7;
  text-decoration: none;
  font-weight: bold;
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s,
    transform 0.2s;
}
.btn-repo:hover {
  background-color: #fff;
  color: #171717;
  border-color: #fff;
  transform: translateY(-3px);
}
.btn-live {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid #4a4a4a;
  color: #bdc3c7;
  text-decoration: none;
  font-weight: bold;
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s,
    transform 0.2s;
}
.btn-live:hover {
  background-color: #fff;
  color: #171717;
  border-color: #fff;
  transform: translateY(-3px);
}
.icon-github {
  width: 18px;
  height: 18px;
  fill: currentColor;
}
.icon-external {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}
.read-more-btn {
  display: none;
  background: none;
  border: none;
  color: #42b983;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
}
.experience-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 900px) {
  .experience-item {
    gap: 1.5rem;
    padding: 1.6rem 1.6rem 1.7rem;
  }
}
@media (max-width: 768px) {
  .experience-item {
    flex-direction: column;
    gap: 1rem;
    padding: 1.1rem 1rem 1.35rem; /* simétrico con gutter externo */
  }
  /* Truncado sólo en móvil */
  .desc-text.truncated {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 3 líneas visibles */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .read-more-btn {
    display: inline;
  }
  /* Reducimos escala hover para que no parezca que se pega al borde derecho */
  .experience-item:hover {
    transform: translateY(-4px) scale(1.015);
  }
}

@media (max-width: 480px) {
  .experience-list {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .experience-item {
    padding: 1rem 0.9rem 1.2rem;
  }
}
</style>
