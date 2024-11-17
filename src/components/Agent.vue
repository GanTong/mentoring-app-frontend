<template>
  <div class="agents-section container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
    <h2 class="text-2xl font-semibold text-center mb-6">List of Agents</h2>

    <!-- Handle loading state -->
    <div v-if="loading" class="text-center text-blue-500">Loading agents...</div>

    <!-- Handle error state -->
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>

    <!-- Render the list of agents -->
    <div v-if="agents.length > 0" class="space-y-6">
      <div v-for="agent in agents" :key="agent.id" class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-2">{{ agent.full_name }}</h3>
        <p class="text-sm text-gray-600 mb-2">
          <strong>Introduction:</strong> {{ agent.introduction }}
        </p>
        <p class="text-sm text-gray-600 mb-4">
          <strong>Hourly Rate (£):</strong> {{ agent.hour_rate }}
        </p>

        <!-- List available slots with click functionality -->
        <div class="mb-4">
          <h4 class="text-sm font-semibold mb-2">Available Slots:</h4>
          <div
            v-for="(slot, index) in agent.available_slots"
            :key="index"
            :class="[
              'slot',
              'p-2 border rounded-lg mb-2 cursor-pointer',
              {
                'bg-blue-500 text-white': selectedSlot === slot,
                'bg-gray-100 hover:bg-blue-100': selectedSlot !== slot
              }
            ]"
            @click="selectSlot(slot)"
          >
            {{ slot }}
          </div>
        </div>

        <button
          class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!selectedSlot"
        >
          Book
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
//import { onMounted, ref } from 'vue'
import { useAgents } from '@/composable/useAgents'
import { ref } from 'vue'

const selectedSlot = ref(null)

const { loading, error, agents } = useAgents()

const selectSlot = (slot) => {
  selectedSlot.value = slot
}
</script>
