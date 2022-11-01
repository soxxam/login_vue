
<template>
	<div>
        <div class="card">
            <h5>Products</h5>
            <DataTable :value="customers2" :scrollable="true" scrollHeight="600px" :loading="loading" scrollDirection="both">
                <Column field="id" header="Id" footer="Id" style="width:100px"></Column>
                <Column field="title" header="title" footer="title" style="width:200px"></Column>
                <Column field="brand" header="brand" footer="brand" style="width:200px"></Column>
                <Column field="price" header="price" footer="price" style="width:200px"></Column>
                <Column field="category" header="category" footer="category" style="width:200px"></Column>
                <Column field="description" header="description" footer="description" style="width:200px"></Column>
            </DataTable>
        </div>
	</div>
</template>


<script setup>
    import { useProductStore } from '@/stores/products';
    // import { storeToRefs } from 'pinia';
    import { ref, onMounted, onUpdated } from 'vue';

    const customers2 = ref();
    const loading = ref(false);

    const productStore = useProductStore();
    // const { products } = storeToRefs(productStore);

    onMounted(() => {
        loading.value = true;
        productStore.getProducts().then( ()=>{
            customers2.value = productStore.products;
            loading.value = false;
        });
    })

</script>

<style scoped>

</style>