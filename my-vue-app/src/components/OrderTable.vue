<template>
  <div class="order-table-container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Project Name</th>
          <th>Overtime</th>
          <th>Hours</th>
          <th>Created At</th>
          <th v-if="role === 'admin'">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td class="project-name">{{ order.project }}</td>
          <td>{{ order.overtime ? 'Yes' : 'No' }}</td>
          <td>{{ formatHours(order.hours) }}</td>
          <td>{{ order.created_at }}</td>
          <td v-if="role === 'admin'">
            <button @click="deleteOrder(order.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  role: String,
  orders: Array
})
const emits = defineEmits(['update-orders'])

function deleteOrder(id) {
  const newOrders = props.orders.filter(order => order.id !== id)
  emits('update-orders', newOrders)
}

function formatHours(hours) {
  return hours.toFixed(1)
}
</script>

<style scoped>
.order-table-container {
  flex: 1 1 60%;
  min-width: 420px;
  margin: 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  font-size: 1rem;
  box-shadow: 0 2px 8px #f0f1f2;
}
th, td {
  border: 1.5px solid #bfc4c9;
  padding: 10px 12px;
  text-align: center;
  vertical-align: middle;
}
th {
  background: #f5f7fa;
  font-weight: 600;
  font-size: 1.05rem;
}
.project-name {
  white-space: pre-line;
  text-align: left;
  word-break: break-all;
}
button {
  padding: 4px 16px;
  background: #e0e3e7;
  color: #222;
  border: 1.5px solid #bfc4c9;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background: #bfc4c9;
}
</style> 