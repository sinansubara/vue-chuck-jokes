<template>
  <div class="navbar-fixed">
    <ul id="dropdown1" class="dropdown-content">
      <li v-for="(category, index) in categories" :key="index" >
        <a @click="selectCat(category)">{{ category }}</a>
      </li>
    </ul>
    <nav>
      <div class="nav-wrapper blue-grey">
        <a href="https://github.com/sinansubara" target="_blank" title="Open norrishub" class="brand-logo">
          <img src="../assets/chucknorris_logo.png" alt="Logo">
        </a>
        <ul>
          <li class="dropBtn">
            <a class="dropdown-trigger waves-effect waves-orange"
                data-target="dropdown1">Chuckdown
              <i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
        <form @submit="$event.preventDefault()">
          <div class="input-field">
            <input id="search" type="search" @input="$store.commit('searchJoke', $event.target.value)" :value="$store.state.search">
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <!-- <i class="material-icons xBtn">close</i> -->
          </div>
        </form>
        <a class="btn-floating btn-large halfway-fab waves-effect waves-dark orng"
              @click="getJoke">
        <i class="material-icons">add</i>
      </a>
        <a class="waves-effect waves-light btn-small btnCat" @click="removeCategory" v-if="selectCategorie !== ''">
          <i class="material-icons right closeBtn">close</i>{{ selectCategorie }}
        </a>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectCategorie: ''
    }
  },
  methods: {
    selectCat(category) {
      this.selectCategorie = category;
    },
    removeCategory(){
      this.selectCategorie = '';
    },
    async getJoke() {
      if (this.selectCategorie === '') {
        await this.$store.dispatch('getRandJoke');
      } else {
        await this.$store.dispatch('getJoke', this.selectCategorie);
      }
    }
  },
  computed: {
    categories() {
      return this.$store.getters.listCategories;
    }
  }
}
</script>

<style scoped>
img {
    max-width: 165px;
  }
  nav {
    height: 100px;
  }
  .dropBtn {
    margin: 0px 10px 0 15px;
  }
  .brand-logo {
    right: 15px;
  }
  nav .input-field {
    height: 50px;
  }
  .xBtn {
    right: 41rem !important;
    margin-top: 17px;
  }
  #search {
    width: 300px;
    position: absolute;
    left: 20rem;
    margin-top: 25px;
  }
  .label-icon {
    left: 21rem !important;
    margin-top: 20px;
  }
  .halfway-fab {
    right: 18rem !important;
    bottom: 20px !important;
  }
  #search:focus {
    background-color: #F15A24;
  }
  .orng {
    background-color: #F15A24;
  }
  nav ul a {
    color: #F15A24;
    font-size: 20px;
  }
  .btnCat {
    font-size: 17px;
    margin: -115px 0px 0px 30px;
  }
  .closeBtn {
    margin-top: -15px;
    font-size: 20px;
  }
</style>