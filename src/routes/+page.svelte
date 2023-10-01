<script lang="ts">
  import { mockQuestions } from "$lib/types/questions";
  import Question from "$lib/components/Question.svelte";

  let questions = [...mockQuestions];
</script>

<div class="m-10 flex flex-row justify-around lg:m-20">
  <section class="flex flex-col gap-5">
    {#each questions as question}
      <Question bind:question />
    {/each}
  </section>
</div>
