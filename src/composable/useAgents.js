import { onMounted, ref } from 'vue'
import axios from 'axios'

export function useAgents() {
  const loading = ref(false)
  const error = ref(null)
  const agents = ref([])

  const getAllAgents = async () => {
    loading.value = true
    error.value = null
    const url = `http://127.0.0.1/agents`

    axios
      .get(url)
      .then((response) => {
        console.log('Agents:', JSON.stringify(response.data, null, 2)) // Log structure to check
        agents.value = response.data
      })
      .catch((err) => {
        error.value = err.response?.data?.message || err.message || 'An error occurred'
      })
      .finally(() => {
        loading.value = false
      })
  }

  onMounted(getAllAgents)

  return { loading, error, agents }
}
