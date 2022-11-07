<template>
    <div>
        <h2>ああああ</h2>
        <p>{{count }}</p>
    </div>
</template>

<script>
export default{
    computed:{
        count(){
            return this.$store.state.count;
        }
    }
}
</script>