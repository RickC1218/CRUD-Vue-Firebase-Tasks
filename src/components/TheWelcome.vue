<script setup>
  import { db } from '../firebase.js'
  import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
  import { ref, onMounted } from 'vue'
  import AddOrUpdate from './AddOrUpdate.vue';

  const tasks = ref([])

  const show = ref(false)

  const data = ref({})

  const isNew = ref(true)

  onMounted(async() => {
    let tasksCollection = await getDocs(collection(db, 'tasks'))
    tasksCollection.forEach((task) => {
      tasks.value.push({
        ...task.data(),
        id: task.id
      })
    })
  })

  function toggleComponent(docData = {}, isNewDoc = true) {
    data.value = docData
    isNew.value = isNewDoc
    show.value = !show.value
  }

  async function deleteRecord(id) {
    await deleteDoc(doc(db, 'tasks', id))
    location.reload()
  }
</script>

<template>
  <div class="bg-slate-500 font-mono text-white px-2">
    <h1 class="text-3xl text-center">Welcome to the Vue Firebase CRUD app!</h1>
  </div>
  <div class="m-5 font-mono">
    <add-or-update @close="toggleComponent" v-if="show" :data="data" :isNew="isNew"></add-or-update>
    <button @click="toggleComponent()" class="bg-emerald-500 hover:bg-emerald-700 px-5 py-2 text-slate-100 rounded-lg  cursor-pointer">Add Task</button>
  </div>
  <div class="items-center m-5 font-mono cursor-pointer">
    <div v-for="task in tasks" :key="task.id" @click="toggleComponent(task, false)" class="bg-slate-300	p-5 my-5 rounded-lg">
      <div><b class="text-xl">NAME:</b> {{ task.name }} </div>
      <div><b class="text-xl">DESCRIPTION:</b> {{ task.description }}</div>
      <button @click.stop="deleteRecord(task.id)" class="bg-red-500 hover:bg-red-700 px-5 py-2 text-slate-100 rounded-lg">Delete</button>
    </div>
  </div>
</template>
