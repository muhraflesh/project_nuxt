<template>
<table class="table table-bordered">
    <tr v-for="spouse in data">
        <td> Spouse </td>
        <td>
            <span>{{spouse.row}}</span>
            {{spouse.form}}
        </td>
    </tr>
</table>
</template>

<script>
export default {
    data(){
        return{
            data:[
                {row:'Name :',
                form:''},
                {row:'Date Of Birth :',
                form:''}
            ]
        }
    }
}
</script>