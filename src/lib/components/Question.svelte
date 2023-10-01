<script lang="ts">
  import type { Question } from "../types/questions";
  export let question: Question;
</script>

<div class="w-xl flex flex-col overflow-x-auto rounded px-4 py-3 shadow-md">
  <div class="mb-2">
    <div class="flex flex-row items-center gap-1 whitespace-nowrap">
      {#if question.type === "singleChoice" || question.type === "multipleChoice"}
        <div class="i-fluent-emoji-flat-ab-button-blood-type" />
      {:else if question.type === "singleFillInBlank" || question.type === "multiFillInBlank"}
        <div class="i-fluent-emoji-flat-bookmark-tabs" />
      {/if}
      <h3 class="font-bold">{question.title}</h3>
    </div>
    <h4 class="text-xs">{question.description}</h4>
  </div>

  {#if question.type === "singleChoice" || question.type === "multipleChoice"}
    {#each question.choices as choice}
      {#if choice.type === "choice"}
        <div>- {choice.content}</div>
      {:else}
        <pre>{JSON.stringify(choice)}</pre>
      {/if}
    {/each}
  {:else if question.type === "singleFillInBlank"}
    <input bind:value={question.answer} />
  {:else if question.type === "multiFillInBlank"}
    <div class="flex flex-col gap-1">
      {#each question.items as { label, answer }}
        <div>{label}</div>
        <input bind:value={answer} />
      {/each}
    </div>
  {:else if question.type === "rating"}
    <div class="flex flex-row gap-1">
      {#each Array.from({ length: question.scale }) as _}
        <div class="i-fluent-emoji-flat-star" />
      {/each}
    </div>
  {/if}
</div>

<style>
  input {
    --uno: b-2 rounded outline-none py-0.5 px-1.5;
  }
</style>
