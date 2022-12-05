<template>
    <v-navigation-drawer app clipped v-model="drawerFlag">
        <v-list nav dense>
            <v-list-item link to="/">
            <v-list-item-icon>
                <v-icon large color ="black">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>HOME</v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>
            <!-- <v-list-item link to="/SignIn">
                <v-list-item-icon>
                    <v-icon>mdi-robot-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>サインイン</v-list-item-title>

            </v-list-item> -->
            <v-list-item link to="/Create">
                <v-list-item-icon>
                    <v-icon>mdi-playlist-plus</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Create Task</v-list-item-title>

            </v-list-item>
            <v-list-item link to="/Login">
                <v-list-item-icon>
                    <v-icon color="info">mdi-login-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-title>LogIn</v-list-item-title>

            </v-list-item>
            <v-list-item @click="signOut()">
                <v-list-item-icon>
                    <v-icon color="red">mdi-logout-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-title>SignOut</v-list-item-title>
                

            </v-list-item>
            
           
          

        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {signOut } from "firebase/auth";
export default{
    props:["drawer"],
    methods:{
        signOut(){
            signOut(this.auth).then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error)
                // An error happened.
            });
        }

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