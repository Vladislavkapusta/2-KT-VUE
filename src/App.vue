<script>
import { RouterLink, RouterView } from 'vue-router'
export default{

}

</script>

<template>
  <header>
    <ul>
      <RouterLink to ='/'>
        Public
      </RouterLink>
      <RouterLink to ='/login'>
        Login
      </RouterLink>
      <RouterLink to ='/private'>
        Private
      </RouterLink>
    </ul>
  </header>
  <RouterView>

  </RouterView>

</template>

<style scoped>
  header{
    padding: 15px;
    background-color: bisque;
    ul{
      list-style-type: none;
      display: flex;
      gap: 25px;
    }
    a{
      text-decoration: none;
      color: black;

    }
  }
</style>
