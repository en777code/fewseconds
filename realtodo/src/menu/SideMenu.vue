<template>
    <v-navigation-drawer app clipped v-model="drawerFlag">
        <v-list nav dense>
            <v-list-item link to="/setting-account">
            <v-list-item-icon>
                <v-icon large color ="orange">mdi-account-cirle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>アカウント情報</v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>
            <v-list-item link to="/setting">
                <v-list-item-icon>
                    <v-icon>mdi-robot-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>おしらせ</v-list-item-title>

            </v-list-item>
            <v-list-item link to="/setting">
                <v-list-item-icon>
                    <v-icon>mdi-robot-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>おしらせ</v-list-item-title>

            </v-list-item>
            <v-list-item link to="/setting">
                <v-list-item-icon>
                    <v-icon>mdi-robot-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>おしらせ</v-list-item-title>

            </v-list-item>
            <v-list-item link to="/setting">
                <v-list-item-icon>
                    <v-icon>mdi-robot-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>おしらせ</v-list-item-title>

            </v-list-item>
            <v-list-item link to="/setting">
                <v-list-item-icon>
                    <v-icon>mdi-robot-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>おしらせ</v-list-item-title>

            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>

export default{
    props:["drawer"],
    methods:{

    },
    data:()=>({
        drawerFlag:false,
    }),
    watch:{
        drawer(flag){
            this.drawerFlag =flag
        }
    }
}
</script>