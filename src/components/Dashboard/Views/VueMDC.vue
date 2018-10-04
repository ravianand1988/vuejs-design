<template>
  <b-container>
    <!--<mdc-card style="width: 200px; height: 200px; margin: 10px;">-->
      <!--<mdc-card-primary-action>-->
        <!--<mdc-card-media src="../../static/img/vue-logo.png" style="background-size: contain;">-->
        <!--</mdc-card-media>-->
      <!--</mdc-card-primary-action>-->
      <!--<mdc-card-header-->
        <!--title="Title goes here"-->
        <!--subtitle="subtitle here">-->
      <!--</mdc-card-header>-->
      <!--<mdc-card-actions>-->
        <!--<mdc-card-action-buttons>-->
          <!--<mdc-card-action-button>ACTION</mdc-card-action-button>-->
        <!--</mdc-card-action-buttons>-->
        <!--<mdc-card-action-icons>-->
          <!--<mdc-card-action-icon icon="star"/>-->
        <!--</mdc-card-action-icons>-->
      <!--</mdc-card-actions>-->
    <!--</mdc-card>-->
    <!--&lt;!&ndash; MDC select box example&ndash;&gt;-->
    <!--<mdc-select v-model="selected" label=">Please select one" outline="true" style="width: 200px;" >-->
  <!--<optgroup label="Meats">-->
    <!--<option value="steak">Steak</option>-->
    <!--<option value="hamburger">Hamburger</option>-->
  <!--</optgroup>-->
    <!--<optgroup label="Vegetables">-->
    <!--<option value="beet">Beet</option>-->
    <!--<option value="carrot">Carrot</option>-->
  <!--</optgroup>-->
<!--</mdc-select>-->
    <!--<span>Selected: {{ selected }}</span>-->
  </b-container>
</template>

<script>

export default {
  name: 'VueMDC',
  data () {
    return {
      card: '../../../assets/logo.png',
      selected: ''
    }
  }
}
</script>

<style scoped>

</style>
