<template>
  <f7-page name="settings">
      <h1>Pesquisar personagem Rick and Morty</h1>
      <f7-input label="nome" type="text" :value="nome_usuario" @input="nome_usuario=$event.target.value"/>
      <f7-button type="button" @click="pesquisar"> pesquisar </f7-button> 
      <f7-card outline-md class="demo-card-header-pic" v-for="personagem in personagens">
      <f7-card-header
        valign="bottom"
        :style="`background-image: url(${personagem.image}); height:400px; background-repeat:no-repeat; background-size:cover;`"
        ></f7-card-header
      >
      <f7-card-content>
        <p class="date">{{personagem.name}}</p>
        <p>
          {{personagem.species}} - {{personagem.gender}}
        </p>
      </f7-card-content>
      <f7-card-footer>
        <f7-link>Favoritar</f7-link>
      </f7-card-footer>
    </f7-card>
    <p v-if="!personagens"> nao foi possivel encontrar o personagem    
    </p>
  </f7-page>
</template>
<script setup>
    import {ref} from 'vue'
    const nome_usuario=ref('')
    const personagens=ref()

    async function pesquisar(){
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nome_usuario.value}&status=alive`)
        const data=await response.json()
     personagens.value=data.results 
    }
    </script> 