<template>
  <Navbar/>
  <RouterView/>
  <Contacts v-if="contact" />
  <Footer/>
  <div class="mail" v-if="mail" @click="ONC">
    <img src="./assets/images/Contact_icons/email.png" alt="">
  </div>
  <div class="contacts-x" v-if="close" @click="close2">
      <img src="./assets/images/Contact_icons/close.png" alt="">
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Contacts from './components/Contacts.vue'
import Footer from './components/Footer.vue'
export default {
  components: { Navbar, Contacts, Footer },
  data() {
    return {
      contact: false,
      mail: true,
      close: false
    }
  },
  methods: {
    ONC(){
      this.contact = true,
      this.mail = false,
      this.close = true
    },
    close2(){
      this.contact = false,
      this.mail = true,
      this.close = false
    }
  },
}
</script>

<style>

</style>
