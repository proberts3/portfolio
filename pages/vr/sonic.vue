<template>
  <main>
    <section>
          <div class="frame-container-4x3">
            <iframe src="/html/sonic.html" allowfullscreen width="100%" height="600px"></iframe>
          </div>
  </section>
</main>
</template>

<script>
export default {
  head: {
    title: '🦔'
  }
}
</script>

<style>
.frame-container {
  position: relative;
  height: 0;
  overflow: hidden;
}
.frame-container-16x9 {
  padding-bottom: 56.25%;
}
.frame-conatiner-4x3 {
  padding-bottom: 75%;
}
.frame-container iframe {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
