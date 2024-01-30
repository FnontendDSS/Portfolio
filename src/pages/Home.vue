<template>
  <Header/>
  <About/>
  <Skills/>
  <Projects/>
</template>

<script>
import Header from '@/components/Header.vue'
import About from './About.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'
export default {
  components: { Header, About, Skills, Projects },

}
</script>
<style>

</style>