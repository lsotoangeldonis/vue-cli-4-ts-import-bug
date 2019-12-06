<template src="./indexPage.html"></template>
<style lang="scss" src="./indexPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import NavbarCategoriesComponent from '@/components/MyComponent'
  @Component({
      // All component options are allowed in here
      components: {
          'my-component': MyComponent,
      },
  })
export default class IndexPage extends Vue {
    public $loading!: any;
    public loader: any = {};
}
</script>
