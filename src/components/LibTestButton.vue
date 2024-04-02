<template>
  <v-btn @click="onClick">{{text}}</v-btn>
  <v-progress-linear indeterminate></v-progress-linear>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-facing-decorator";

@Component
export default class LibTestButton extends Vue {

  @Prop
  text!: string;

  @Emit('click')
  onClick() {}

}

</script>


<style scoped>
.btn-cta {
  background-color: #d0d0d5;
  border-width: 3px;
  border-color: #1b1b32;
  border-radius: 0;
  border-style: solid;
  color: #1b1b32;
  display: block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 18px;
  line-height: 1.42857143;
}

.btn-cta:active:hover,
.btn-cta:focus,
.btn-cta:hover {
  background-color: #1b1b32;
  border-width: 3px;
  border-color: #000;
  background-image: none;
  color: #f5f6f7;
}
</style>
