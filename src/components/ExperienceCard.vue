<template>
  <div class="experience-item card">
    <div class="experience-info">
      <h3>{{ experience.title }}</h3>
      <p class="location">{{ experience.location }}</p>
      <p class="date">{{ experience.date }}</p>
    </div>
    <div class="experience-desc">
      <p :class="{ 'is-truncated': !isExpanded && isMobile }">
        {{ experience.description }}
      </p>
      <button v-if="isTruncatable && isMobile" @click="toggleExpand" class="read-more-btn">
        {{ isExpanded ? 'Leer menos' : '... Leer más' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
})

const isExpanded = ref(false)
const isMobile = ref(window.innerWidth <= 768)
const maxChars = 100 // Límite de caracteres para truncar

const isTruncatable = computed(() => {
  return props.experience.description.length > maxChars
})

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}

function checkMobile() {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
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
  transition:
    box-shadow 0.2s,
    transform 0.2s,
    border-color 0.2s;
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
}
.experience-desc {
  flex: 2;
  display: flex;
  flex-direction: column; /* Para que el botón quede debajo */
  align-items: flex-start;
  color: #fff;
}

.read-more-btn {
  background: none;
  border: none;
  color: #42b983;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .experience-item {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  .is-truncated {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Muestra 3 líneas */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
