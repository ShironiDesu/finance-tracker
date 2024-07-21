<template>
    <div>
    <IncomesListVue/>
    <SpendsListVue/>
    </div>
</template>

<script>
import IncomesListVue from './IncomesList.vue'
import SpendsListVue from './SpendsList.vue'

SpendsListVue
export default {
    name:'SpendAndincomeList',
    components:{
        IncomesListVue,
        SpendsListVue
    }
}
</script>
<style>

</style>