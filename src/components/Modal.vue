<template>
    <transition name="modal-animation"  class="modal-mask">
        <div v-show="modalActive" class="modal modal-wrapper">
            <transition name="modal-animation-inner " class="modal-container">
                <div v-show="modalActive" class="modal-inner">
                    <slot />
                    <button @click="close" type="button" class="btn-can">Cancel</button>
                    <button @click="nextpage" type="button" class="btn-acc">Accept</button>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    import { useRouter } from 'vue-router'
    export default {
        props: ["modalActive"],
        setup(props, {emit}) {
            const router = useRouter()
            const close = () => {
                emit('close') 
            };
            const nextpage = ()=> {
                router.push({ path: '/login' })
            }
            return {close, nextpage}
        }
    };
</script>

<style>
.btn-acc, .btn-can {
    margin: 10px;
    font-size: 13px;
    padding: 10px;
    color: #fff;
    outline: none;
    border-radius: 4px;
    border: 1px solid transparent;
    cursor: pointer;
    float: right;
}
.btn-acc {
    background-color: red;
}
.btn-can {
    background-color: green;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;;
  background-color: rgba(147, 144, 144, 0.5);
  transition: opacity 0.1s ease;
}
.modal-wrapper {
  display: flex;
  align-items: center;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 10px 10px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  border-radius: 5px;
}
</style>