<template>
  <Default>
    <router-view/>
  </Default>
</template>

<script>
// @ is an alias to /src
import LoginCom from '@/components/LoginCom.vue'
import Default from '@/layouts/Default.vue'

export default {
  name: 'HomeView',
  components: {
    LoginCom,
    Default
  }
}
</script>