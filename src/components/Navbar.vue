<template>
  <nav class="navbar container">
    
    <div class="navbar-logo">
      <router-link to="/">
        <img src="../assets/images/logo_transparent.png" alt="">
  </router-link>
    </div>
    <div class="navbar-nav">
      <div class="navbar-nav__bar" @click="openMenu">
        <img src="../assets/images/menu.png" alt="">
      </div>
        <ul class="navbar-nav__list" >
          <router-link to="/">
            <button>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Home
      </button>
          </router-link>
          <router-link to="/about">
            <button>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        About
      </button>
          </router-link>   
          <router-link to="/skills">
      <button>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Skills
      </button>
          </router-link>
      <router-link to="/projects">
          <button>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Projects
      </button>
          </router-link>
        </ul>
        <ul class="navbar-nav__list2" v-if="list" @click="closeMenu">
          <router-link to="/">
            <button>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Home
      </button>
          </router-link>
          <router-link to="/about">
            <button>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        About
      </button>
          </router-link>   
          <router-link to="/skills">
      <button>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Skills
      </button>
          </router-link>
      <router-link to="/projects">
          <button>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Projects
      </button>
          </router-link>
        </ul>
    </div>
  </nav>
  
</template>

<script>
export default {
  data() {
    return {
      list: false
    }
  },
  methods: {
    openMenu(){
      this.list = !this.list
    },
    closeMenu(){
      this.list = !this.list
    }
  },
}
</script>

<style>

</style>