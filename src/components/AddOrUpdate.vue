<script setup>
    import { defineComponent, onMounted, ref } from 'vue';
    import { db } from '../firebase.js'
    import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'

    const props = defineProps({
        data: Object,
        isNew: Boolean
    })

    defineComponent({
        name: 'AddOrUpdate'
    })

    const emits = defineEmits(['close'])

    onMounted(() => {
        task.value = {
            ...task.value,
            ...props.data
        }
    })

    const task = ref({
        name: '',
        description: ''
    })

    async function addOrUpdate(){
        if(props.isNew){
            // add
            await addDoc(collection(db, 'tasks'), task.value).then((res) => {
                emits('close')
                location.reload()
            })
        } else {
            // update
            await updateDoc(doc(db, 'tasks', task.value.id), task.value).then((res) => {
                emits('close')
                location.reload()
            })
        }
    }
</script>

<template>
    <transition name="modal">
        <div class="modal-overlay m-1 absolute h-screen	w-screen bg-neutral-950/50 opacity-95 inset-0">
            <div class="model-wrapper flex justify-center items-center h-full">
                <div class="modal-container font-mono m-8 p-8 w-2/4 bg-green-50">
                    <input type="text" placeholder="Enter name" v-model = "task.name" class="px-5 py-2 bg-slate-200 rounded-lg mb-5 w-full" />
                    <textarea placeholder="Enter description" v-model = "task.description" class="px-5 py-2 bg-slate-200 rounded-lg mb-5 w-full" />
                    <button @click="emits('close')" class="bg-gray-500 hover:bg-gray-700 px-5 py-2 text-slate-100 rounded-lg mr-2">Close</button>
                    <button @click="addOrUpdate()" class="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-slate-100 rounded-lg ml-2 truncate">{{ isNew ? 'Add' : 'Update' }}</button>
                </div>
            </div>
        </div>
    </transition>
</template>