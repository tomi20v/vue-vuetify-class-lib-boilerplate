<script lang="ts">
import {Component, Prop, Vue} from "vue-facing-decorator";
import LibTestButton from "./LibTestButton.vue";

// @Component
@Component({
  components: {
    LibTestButton,
  }
})
export default class LibTestHelloWorld extends Vue {

  @Prop
  msg!: string;

  count: number = 0;

}

</script>

<template>
  <h1>{{ msg }}</h1>

  <v-dialog>
    <template v-slot:activator="{props: activatorProps}">
      <v-btn v-bind="activatorProps">open v-dialog</v-btn>
    </template>
    <v-card>
      <v-card-title>
        dialog here!
      </v-card-title>
    </v-card>
  </v-dialog>

  <div class="card">
    <LibTestButton @click="count++" :text="'count is: ' + count"></LibTestButton>{{count}}
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
