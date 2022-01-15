<template>
    <div>
        欢迎{{nickname}}回来！<br>
        <button type="button" @click="outLogin()">安全退出</button>
    </div>
</template>

<script>
    import {mapState,mapActions} from "vuex";
    export default {
        name: "ucenter",
        data(){
            return {

            }
        },
        created(){
            this.safeUser({success:(res)=>{
                    console.log(res);
                    if (res.code!==200){
                        this.$router.replace("/login");
                    }
                }});
        },
        computed:{
            ...mapState({
                nickname:(state)=>state.user.nickname
            })
        },
        methods:{
            ...mapActions({
                outUserLogin:"user/outLogin",
                safeUser:"user/safeUser"
            }),
            outLogin(){
                this.outUserLogin();
                this.$router.replace("/login");
            }
        },
        beforeRouteEnter(to,from,next){
            if (Boolean(localStorage['isLogin'])){
                next();
            } else {
                next("/login");
            }
        }
    }
</script>

<style scoped>

</style>