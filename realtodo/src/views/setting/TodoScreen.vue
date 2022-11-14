<template>
    <v-container class="grey lighten-5">
    <v-row no-gutters>
        <v-col cols="4" align="center"
              ><v-card outlined tile>大タスク</v-card>
              <v-text-field
              v-model="BigTask"
              label="大タスクを追加"
              type="text"              
              >
            <template v-slot:append-outer>
                <v-btn text color="blue">追加</v-btn>
            </template>
            </v-text-field>
              </v-col
            >
            
            <v-col cols="4" align="center"
              ><v-card outlined tile>中タスク</v-card>
              <v-text-field
              v-model="MediumTask"
              label="中タスクを追加"
              type="text"              
              >
            <template v-slot:append-outer>
                <v-btn text color="blue">追加</v-btn>
            </template>
            </v-text-field>
            </v-col
            >
            
            <v-col cols="4" align="center"
              ><v-card outlined tile>小タスク</v-card>
              <v-text-field
              v-model="SmallTask"
              label="小タスクを追加"
              type="text"   
              >
            <template v-slot:append-outer>
                <v-btn text color="blue">追加</v-btn>
            </template>
            </v-text-field></v-col>
    </v-row>
  </v-container>
</template>
<script>
// import {
//     getFirestore,

// }from "firebase/firestore"

export default{
    methods: {
    AddBigData(){
        


      
    },
},
    data:()=>({
        BigTask:"",
        MediumTask:"",
        SmallTask:"",
    }),
        
}
</script>