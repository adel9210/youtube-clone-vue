<template>
  <section class="header">
    <div class="container header__container">
      <a href="#" class="header__logo">
        <img
          class="header__logo__image"
          src="../../assets/logo.png"
          alt="Logo"
        />
      </a>

      <form action="#" class="header__form">
        <input
          type="text"
          class="form-control header__form__search-input"
          :value="inputSearchValue"
          @input="updateSearchTerm"
        />
        <button class="header__form__search-button" @click="fetchData($event)">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderComponent",
  data: function () {
    return {
      searchTerm: "",
    };
  },
  methods: {
    fetchData: function (e) {
      e.preventDefault();
      this.$router.push({ name: "Result" });

      this.$store.dispatch("getVideos", true);
    },
    updateSearchTerm(e) {
      this.$store.commit("updateSearchTerm", e.target.value);
    },
  },
  computed: {
    inputSearchValue: function () {
      return this.$store.state.searchTerm;
    },
  },
};
</script>

<style lang="scss">
@import "./Header.scss";
</style>
