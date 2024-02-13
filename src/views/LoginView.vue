

<script>
export default{
    data(){
        return{
            pass_code: ''
        }
    },
    methods:{
        auth(e){
            if (e.key === 'Enter'){
            localStorage.setItem('password', this.pass_code)
            }
        }
    }
}
</script>

<template>
    <h1>Login</h1>
    Enter Password
    <input v-model="pass_code" @keydown="auth">
    {{ pass_code }}
</template>

<style>

</style>