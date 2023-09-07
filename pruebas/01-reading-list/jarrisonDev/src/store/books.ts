import { writable } from 'svelte/store';
import type { BookLocalStorageInterface } from '../components/Book';

export const myBooks = writable<BookLocalStorageInterface[]>([]);
