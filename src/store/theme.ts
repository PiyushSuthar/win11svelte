import { writable } from 'svelte/store'

const theme = writable<"light" | "dark">('dark')

export default theme