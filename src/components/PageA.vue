<template>
  <div>
    <h1>Page A</h1>
    <p>{{ msg }}</p>
    <ul>
      <router-link :to="{ name: 'a.b' }">Voir la vue B</router-link>
      <router-link :to="{ name: 'a.c' }">Voir la vue C</router-link>
    </ul>
    <h2>Sous vue</h2>
    <transition name="bounce" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'PageA',
  data () {
    return {
      msg: 'Salut'
    }
  },
  beforeRouteEnter (route, redirect, next) {
    window.setTimeout(() => {
      next(vm => {
        vm.msg = 'La route est bien chargée !'
      })
    }, 2000)
  },
  beforeRouteLeave (route, redirect, next) {
    if (window.confirm('Voulez-vous vraiment quitter la page ?')) {
      next()
    } else {
      redirect('/')
    }
  }
}
</script>
