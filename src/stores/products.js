import { defineStore } from "pinia";

import { ref, computed, reactive } from "vue";
import axios from 'axios';

export const useProductStore = defineStore("products", () => {
    const products = reactive({})

    async function getProducts(){
        await axios.get(`https://dummyjson.com/products`)
            .then(response => {
            this.products = response.data.products
            })
            .catch(e => {
            console.log(e)
        })
    }

    return { products, getProducts };
});
