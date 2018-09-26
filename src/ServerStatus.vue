<template>

      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">serveur status</h5>
          <p class="card-text"> Server Status : {{ server.name}} et {{ server.age}}</p>
          <a @click="changeStatus" class="btn btn-primary">change status</a>
        </div>
      </div>


</template>

<script>
    export default {
      props : ['server'],
        data :  () => {
            return {
                status : 'Critical',
            }
        },
        methods:{
            changeStatus() {
                this.server.name = 'fuck'
                this.server.age += 1
            }
        }
    }
</script>


<style scoped>

</style>
