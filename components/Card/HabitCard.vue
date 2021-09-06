<template>
  <div class='bg-panel px-3 py-4 w-auto h-auto shadow-2xl overflow-hidden rounded-lg font-mono mx-2'>
    <dt class='text-xl font-medium text-gray-200 text-right pr-2'>
      <span class='text-xs'>{{ streak }}</span>
    </dt>
    <div class='p-3'>
      <div class='flex items-center'>
        <!-- <div class="flex-shrink-0">
          <svg class="h-6 w-6 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        </div> -->
        <div class='w-0 flex-1'>
          <dl>
            <dt class='text-xl font-medium text-gray-200 text-center'>
              {{ habit.title }}
            </dt>
            <dd class='text-center items-center pt-3'>
              <div class='text-lg font-medium' v-bind:class='streak > 1 ? `text-green-400`: `text-red-400`'>
                {{ habit.score }}
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class='px-5 py-3 text-sm'>
<!--      <span class='inline-flex w-full space-x-3'>-->
          <!-- answer Yes -->

        <template v-if='habit.answer === null'>
          <p class='text-gray-100 text-center mb-3'>{{ habit.prompt }}</p>
          <div class='inline-flex w-full space-x-3'>

            <button class='bg-green-600 w-full py-3 mr-1 text-center text-gray-200 flex justify-center'>
              Yes
            </button>

            <button class='bg-red-500 w-full py-3 mr-1 text-center text-gray-200 flex justify-center'>
              No
            </button>
          </div>
        </template>

        <template v-else-if='habit.answer === true'>
          <p class='text-gray-100 text-center mb-3'>You didn't do this today</p>
          <div class='inline-flex w-full space-x-3'>
             <button class='bg-green-500 w-full py-3 mr-1 text-center text-gray-200 flex justify-center'>
               <EmojiHappyIcon/>
             </button>
          </div>
        </template>

        <template v-else-if='habit.answer === false'>
          <p class='text-gray-100 text-center mb-3'>You didn't do this today</p>
          <div class='inline-flex w-full space-x-3'>
             <button class='bg-red-500 w-full py-3 mr-1 text-center text-gray-200 flex justify-center'>
               <EmojiSadIcon />
             </button>
          </div>
        </template>
        <!-- <button class="bg-green-600 w-full py-3 mr-1 text-center text-gray-200 flex justify-center">
         Yes
        <button> -->

        <!-- answer No -->
        <!-- <button class="bg-red-500 w-full py-3 mr-1 text-center text-gray-200 flex justify-center">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
        <button> -->

        <!-- answer No -->
        <!-- <button class="bg-red-500 w-full py-3 mr-1 text-center text-gray-200 flex justify-center">
          No
        <button> -->

<!--        </span>-->
    </div>
  </div>
</template>

<script lang="ts">
import { EmojiHappyIcon, EmojiSadIcon } from "@vue-hero-icons/solid"

export default {
  name: 'HabitCard',
  components: { EmojiHappyIcon, EmojiSadIcon },
  computed: {
    streak(): string {
      if (this.habit.streak >= 3) {
        return '🔥 ' + this.habit.streak;
      } else if (this.habit.streak > 0 && this.habit.streak < 2) {
        return '😈 ' + this.habit.streak;
      } else if (this.habit.streak > -2 && this.habit.streak < 0) {
        return '😳 ' + this.habit.streak
      } else if (this.habit.streak <= -3) {
        return '💩 ' + this.habit.streak;
      } else {
        return this.habit.streak;
      }
    }
  },
  props: {
    // habit: {
    //   type: Habit
    // }
  },
  data() {
    return {
      habit: {
        title: 'Make my bed',
        score: 1.12,
        prompt: 'Did you make your bed today?',
        streak: 3,
        answer: false
      }
    }
  }
}
</script>

<style scoped>

</style>
