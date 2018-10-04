<template>
 <wrapper class="d-flex flex-column">
    <nav class="navbar navbar-light navbar-expand-sm bg-light">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a href="/" class="navbar-brand">Brand</a>
        <div class="navbar-collapse collapse" id="collapsingNavbar2">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Link <span class="sr-only">Home</span></a>
                </li>
            </ul>
        </div>
    </nav>
    <main class="container-fluid py-3 flex-fill">
        <h4>Content</h4>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia cor magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
            ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        </p>
    </main>
    <footer class="container-fluid w-100 bg-dark text-light py-3">
        Footer
    </footer>
</wrapper>
</template>

<script>

export default {
  name: 'material',
  data () {
    return {
      selected: ''
    }
  }
}
</script>

<style scoped>

</style>
