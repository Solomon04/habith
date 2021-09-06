<template>
  <main class="bg-brand h-screen py-8">
    <div class="container mx-auto max-w-5xl mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Card -->
      <HabitCard/>
      <div class="bg-panel px-3 py-4 w-auto h-auto shadow-2xl overflow-hidden rounded-lg font-mono">
        <dt class="text-xl font-medium text-gray-200 text-right pr-2">
          <span class="text-xs">🔥 3</span>
        </dt>
        <div class="p-3">
          <div class="flex items-center">
            <!-- <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div> -->
            <div class="w-0 flex-1">
              <dl>
                <dt class="text-xl font-medium text-gray-200 text-center">
                  Make my bed
                </dt>
                <dd class="text-center items-center pt-3">
                  <div class="text-lg font-medium text-green-400">
                    1.12
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="px-5 py-3 text-sm ">
          <p class="text-gray-100 text-center mb-3">Did you make your bed today?</p>
          <span class="inline-flex w-full space-x-3">
          <!-- Answered Yes -->
          <button class="bg-green-600 w-full py-3 mr-1 text-center text-gray-200 flex justify-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </button>


          <!-- <button class="bg-green-600 w-full py-3 mr-1 text-center text-gray-200 flex justify-center">
           Yes
          <button> -->

            <!-- Answered No -->
            <!-- <button class="bg-red-500 w-full py-3 mr-1 text-center text-gray-200 flex justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
            <button> -->

            <!-- Answered No -->
            <!-- <button class="bg-red-500 w-full py-3 mr-1 text-center text-gray-200 flex justify-center">
              No
            <button> -->

        </span>
        </div>
      </div>
    </div>
  </main>

  <!-- When I click yes, it should show an animation before the checkmark -->
  <!-- When I click no, it should show an animation before the x mark -->
  <!-- When I click the card, it should flip the card via animation and show stats -->
  <!-- When I click the answered button, it should open a modal to change my answer -->

</template>

<script lang="ts">
import Vue from 'vue'
import HabitCard from '~/components/Card/HabitCard.vue'

export default Vue.extend({
  components: { HabitCard },
  data() {
    return {

    }
  }
})
</script>
