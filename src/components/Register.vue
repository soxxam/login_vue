<template>
    <div class="login-page">
        <div class="form">
            <form class="login-form" v-on:submit="login">
                <h2>Register</h2>
                <p>Email:</p>
                <input type="email" placeholder="Email" v-model="userinfo.email" required/>
                <span v-if="notify?.email">{{notify?.email}}</span>
                <p>Full name:</p>
                <input type="text" placeholder="Full name" v-model="userinfo.name" required/>
                <span v-if="notify?.name">{{notify?.name}}</span>
                <p>Username:</p>
                <input type="text" placeholder="username" v-model="userinfo.username" required/>
                <span v-if="notify?.username">{{notify?.username}}</span>
                <p>Password:</p>
                <input type="password" placeholder="password"  v-model="userinfo.password" required/>
                <span v-if="notify?.password">{{notify?.password}}</span>
                <br>
                <button type="submit" :disabled="isDisabled">login</button>

                <p style=" text-align: center;"> Already account? <router-link class="link" to="/login" style="text-decoration: none; color: red ">Sign in</router-link></p> 

            </form>
        </div>
    </div>
</template>
  
<script setup>
    import { watch, ref, reactive, computed  } from "vue";

    let notify = ref([])
    let userinfo = reactive({
        username: "",
        password: ""
    })

    watch(userinfo, (user) => {
        notify.value = []
        if (!user.username) 
        {
            notify.value['username'] = "Username is required";    
        }
        if (!user.password) 
        {
            notify.value['password'] = "Password is required";
        }
    });

    const isDisabled = computed(()=> {
        if (userinfo.username === "admin" && userinfo.password === "Admin123")
            return false
        else
            return true
    })
    
    const login = (e) => {
        console.log("Login");
        alert(`Username: ${userinfo.username}, password: ${userinfo.password}`);
        e.preventDefault();
    }
</script>

<style scoped>
    span {
        color: rgb(235, 35, 35);
        font-size: 10px;
    }
    .login-page {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2 {
        text-align: center;
        margin-bottom: 30px;
    }
    .form {
    /* position: relative; */
    /* z-index: 1; */
    width: 360px;
    background: #FFFFFF;
    max-width: 360px;
    /* margin: 0 auto 100px; */
    padding: 45px;
    /* text-align: center; */
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    }
    .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #dc6262;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    cursor: pointer;
    }

</style>
