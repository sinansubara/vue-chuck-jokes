<template>
  <main>
    <div class="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
      <div class="row" v-for="(jokes, index) in $store.getters.searchJokes" :key="index">
        <div class="col s12 m5">
          <div class="card-panel teal">
            <a class="btn-floating btn-small waves-effect waves-light right orng" v-if="!jokes.favorite" @click="addToFavorites(jokes)" title="ADD TO FAVORITES">
              <i class="material-icons">add</i>
            </a>
            <a class="btn-floating btn-small waves-effect waves-light right orng" v-else @click="removeFromFavorites(jokes)" title="REMOVE FROM FAVORITES">
              <i class="material-icons">remove</i>
            </a>
            <span class="white-text">{{ jokes.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Masonry from 'masonry-layout';
import uuid from 'uuid';

export default {
  mounted() {
    const grid = document.querySelector('.grid');
    this.msnry = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: 10,
    });
  },
  computed: {
    getJokes() {
      return this.$store.getters.listJokes;
    }
  },
  methods: {
    addToFavorites(joke) {
      joke.favorite = true;
      joke.id = uuid.v4();
      this.$store.dispatch('addFavJoke', joke);
    },
    removeFromFavorites(joke) {
      joke.favorite = false;
      this.$store.dispatch('removeFavJoke', joke.id);
    }
  }
}
</script>

<style scoped>
.grid {
    padding-top: 60px;
  }
  .orng {
    background-color: #F15A24;
  }
  main {
    flex: 1 0 auto;
  }
  .row {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .row::after {
    display:none;
  }
  .row .col.m5 {
    width: 20%;
  }
  .card {
    margin: 10px;
    display: inline-flex;
    font-size: 30px;
  }
  .grid-item  {
    margin-bottom: 10px;
    
  }
  .grid-item .card {
      padding: 10px;
  }
</style>