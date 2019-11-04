<!--@author Kalanka Siyambalapitiya-->
<template>
  <div class="row">
    <div class="col-md-4">
      filters
      <ul>
        <li>age</li>
        <li>age</li>
        <li>age</li>
        <li>age</li>
        <li>age</li>
        <li>age</li>
      </ul>
    </div>
    <div class="col-md-8">
      Dogs
      <div class="row">
        <div v-for="dog in dogs" :key="dog.id" class="card" style="width: 18rem;">
          <img :src="dog.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{dog.name}</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { API_URL } from "../common/config";

interface Dog {
  id: number;
  name: string;
  age: string;
  breed: string;
  behaviour: string;
  color: string;
  image: string;
  location: string;
  type: string;
  gender: string;
  size: string;
}

export default class Dogs extends Vue {
  private dogs: Dog[] = [];
  private async created() {
    const response = await axios.get("http://localhost:4001/api/dogs");
    this.dogs = await response.data;
  }
}
</script>
