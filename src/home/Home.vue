<template>
  <div>
    <server-status class="bottom-margin" v-for="(server, index) in servers" :server="server"
                   :key="index">
    </server-status>
  </div>
</template>

<script>
  import ServerStatus from '../ServerStatus.vue'

  export default {
    data: () => {
      return {
        servers: [
          {name: 'linux', age: 60},
          {name: 'windows', age: 120},
          {name: 'redhat', age: 11},
          {name: 'git', age: 50},
          {name: 'apple', age: 70}
        ]
      }
    },
    created:()=>{
      console.log('App Created')
    },
    components: {
      ServerStatus
    }
  }
</script>


<style scoped>
  .bottom-margin {
    margin-bottom: 10px;
  }
</style>
