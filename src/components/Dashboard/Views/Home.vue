<template>
  <b-container>
    <b-jumbotron>
      <template slot="header">
        Bootstrap Vue
      </template>
      <template slot="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </template>
      <hr class="my-4">
      <p>
        It uses utility classes for typography and spacing to space content
        out within the larger container.
      </p>
      <router-link :to="{name: 'Material'}">
        <b-btn variant="primary">Material Demo</b-btn>
      </router-link>

      <b-btn variant="success" href="#">Do Something Else</b-btn>
    </b-jumbotron>
  </b-container>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>

</style>
