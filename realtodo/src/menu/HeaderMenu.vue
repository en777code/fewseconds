<template>
    <v-app-bar app color="green" flat dark clipped-left>
        <v-app-bar-nav-icon v-on:click.stop="controlDrawerChild()"/>
        <v-toolbar-title>
            <span style="font-weight:bold; font-size:1.4em">Small</span>
        </v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default{
    data:()=>({
        drawer:false,
    }),

    methods:{
        controlDrawerChild(){
            this.drawer = !this.drawer
            this.$emit("controlDrawer",this.drawer)
        }
    }
}

</script>