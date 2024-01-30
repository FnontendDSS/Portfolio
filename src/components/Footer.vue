<template>
  <div class="footer container">
    <div class="footer-logo">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="footer-list">
      <ul class="footer-list_main">
        <router-link to="/">
        <li>Home</li>
        </router-link>
        <router-link to="/about">
        <li>About</li>
        </router-link>
        <router-link to="/skills">
        <li>Skills</li>
        </router-link>
        <router-link to="/projects">
        <li>Projects</li>
        </router-link>
      </ul>
    </div>
   <div class="footer-info">
    <p>Database used by GitHub</p>
   </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
