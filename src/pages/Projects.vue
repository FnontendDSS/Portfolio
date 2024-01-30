<template>
  <div class="projects container">
    <div class="skills-title">
    <h1>Projects</h1>
    <h1>Projects</h1>
    <h1>Projects</h1>
    </div>
    <div class="projects-main">
      <splide :options="options" class="projects-main__splide">
    <splide-slide class="projects-main__splide--slide">
      <img src="../assets/images/pro_stenoP/st1.png" alt="">
      <img src="../assets/images/pro_stenoP/st2.png" alt="">
      <img src="../assets/images/pro_stenoP/st4.png" alt="">
      <div class="projects-main__splide--slide___info">
        <h3>Steno Printe</h3>
        <p>"Steno Print" project from Figma. Vue CLI is used for fast website development. Animations, routers, hover effects, and a good color palette are included. It is a multi-page website.</p>
        <div class="neon__button">
<a href="https://fnontenddss.github.io/StenoPrint/">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        View project
    </a>
</div>
      </div>
    </splide-slide>
    <splide-slide class="projects-main__splide--slide">
      <img src="../assets/images/sq_mebel/sq1.png" alt="">
      <img src="../assets/images/sq_mebel/sq2.png" alt="">
      <img src="../assets/images/sq_mebel/sq3.png" alt="">
      <div class="projects-main__splide--slide___info">
        <h3>SQ-Mebel</h3>
        <p>SQ Mebel custom project. Vue CLI is used for fast website development. Animations, routers, hover effects, and a good color palette are used. The website is multipage and designed without designers. </p>
        <div class="neon__button">
<a href="https://fnontenddss.github.io/SQobilMebel/" id="neon2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        View project
    </a>
</div>
      </div>
    </splide-slide>
    <splide-slide class="projects-main__splide--slide">
      <img src="../assets/images/Interioo/in1.png" alt="">
      <img src="../assets/images/Interioo/in2.png" alt="">
      <img src="../assets/images/Interioo/in3.png" alt="">
      <div class="projects-main__splide--slide___info">
        <h3>Interio</h3>
        <p>Interio Figma Project. Vue-Cli is used for quick access. Harmonious colors. One-page website. </p>
        <div class="neon__button">
<a href="https://fnontenddss.github.io/Interioo/" id="neon3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        View project
    </a>
</div>
      </div>
    </splide-slide>
    <splide-slide class="projects-main__splide--slide">
      <img src="../assets/images/GitHubPh/gt1.png" alt="">
      <img src="../assets/images/GitHubPh/gt2.png" alt="">
      <img src="../assets/images/GitHubPh/gt3.png" alt="">
      <div class="projects-main__splide--slide___info">
        <h3>GitHub Finder</h3>
        <p>GitHub Finder - a website for searching GitHub users using API and Vue.js. Vue-Vite is used for quick access. The website can find a user by their username and display their repositories. </p>
        <div class="neon__button">
<a href="https://fnontenddss.github.io/githubfinder/" id="neon4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        View project
    </a>
</div>
      </div>
    </splide-slide>
    <splide-slide class="projects-main__splide--slide">
      <img src="../assets/images/Clock/cl1.png" alt="">
      <img src="../assets/images/Clock/cl2.png" alt="">
      <img src="../assets/images/Clock/cl3.png" alt="">
      <div class="projects-main__splide--slide___info">
        <h3>Clock</h3>
        <p>Typical clocks are made using HTML, CSS, and JavaScript. They have animations for the clock hands and a second counter. </p>
        <div class="neon__button">
<a href="https://fnontenddss.github.io/githubfinder/" id="neon5">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        View project
    </a>
</div>
      </div>
    </splide-slide>
    <splide-slide class="projects-main__splide--slide">
      <img src="../assets/images/Vue-cinema/vc1.png" alt="">
      <img src="../assets/images/Vue-cinema/vc2.png" alt="">
      <img src="../assets/images/Vue-cinema/vc3.png" alt="">
      <div class="projects-main__splide--slide___info">
        <h3>Vue-cinema</h3>
        <p>An ordinary HTML project is used with HTML and CSS. </p>
        <div class="neon__button">
<a href="https://fnontenddss.github.io/Vue-cinema/" id="neon6">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        View project
    </a>
</div>
      </div>
    </splide-slide>
    <splide-slide class="projects-main__splide--slide">
      <img src="../assets/images/adidas/ad1.png" alt="">
      <img src="../assets/images/adidas/ad2.png" alt="">
      <img src="../assets/images/adidas/ad3.png" alt="">
      <div class="projects-main__splide--slide___info">
        <h3>Adidas</h3>
        <p>An ordinary HTML project is used with HTML and CSS. </p>
        <div class="neon__button">
<a href="https://fnontenddss.github.io/Adidas_template/" id="neon7">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        View project
    </a>
</div>
      </div>
    </splide-slide>
    <splide-slide class="projects-main__splide--slide">
      <img src="../assets/images/bank/bn1.png" alt="">
      <img src="../assets/images/bank/bn2.png" alt="">
      <img src="../assets/images/bank/bn3.png" alt="">
      <div class="projects-main__splide--slide___info">
        <h3>Bank</h3>
        <p>An ordinary HTML project is used with HTML and CSS. </p>
        <div class="neon__button">
<a href="https://fnontenddss.github.io/Tan_bil_bank/">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        View project
    </a>
</div>
      </div>
    </splide-slide>
  </splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
      return {
        options: {
          rewind : true,
          gap    : '1rem',
        },
      };
    },
}
</script>

<style>

</style>