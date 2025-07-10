<template>
  <div class="home-container">
    <h2>Tasks</h2>
    <div class="main-content">
      <OrderTable @update-orders="updateOrders" :role="role" :orders="orders" />
      <OrderChart :orders="orders" :role="role" @delete-project="deleteProjectOrders" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import OrderTable from './OrderTable.vue'
import OrderChart from './OrderChart.vue'

const orders = ref([])
const role = ref('user')

onMounted(() => {
  role.value = sessionStorage.getItem('role') || 'user'
  orders.value = [
    {
      id: '001',
      project: 'Road Project A',
      overtime: true,
      hours: 3.5,
      created_at: '2024-04-10 10:30'
    },
    {
      id: '002',
      project: 'Bridge Maintenance B',
      overtime: false,
      hours: 2,
      created_at: '2024-04-09 13:00'
    },
    {
      id: '003',
      project: 'Pipeline Fix C',
      overtime: true,
      hours: 4.5,
      created_at: '2024-04-08 08:00'
    },
    {
      id: '004',
      project: 'Bridge Maintenance B',
      overtime: true,
      hours: 3,
      created_at: '2024-04-07 16:45'
    },
    {
      id: '005',
      project: 'Tunnel Cleaning D',
      overtime: false,
      hours: 8.1,
      created_at: '2024-04-03 11:43'
    }
  ]
})

function updateOrders(newOrders) {
  orders.value = newOrders
}

function deleteProjectOrders(project) {
  orders.value = orders.value.filter(order => order.project !== project)
}
</script>

<style scoped>
.home-container {
  max-width: 1100px;
  margin: 40px auto;
  padding: 32px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px #eee;
}
.home-container h2 {
  text-align: left;
  margin-bottom: 18px;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
}
.main-content {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: flex-start;
}
</style> 