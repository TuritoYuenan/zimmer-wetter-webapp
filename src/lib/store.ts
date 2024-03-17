import { writable } from "svelte/store";

export const lastMeasured = writable<Date>(new Date(0));
