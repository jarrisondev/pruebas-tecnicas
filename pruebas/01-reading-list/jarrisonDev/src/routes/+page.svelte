<script lang="ts">
	import { onMount } from 'svelte';
	import books from '../../../books.json';
	import { myBooks } from '../store/books';
	import { booksAdapter } from '../utils/adapter';
	import Book from '../components/Book/index.svelte';
	import { LOCAL_STORAGE_MY_BOOKS } from '../utils/constants';
	import type { BookInterface, BookLocalStorageInterface } from '../components/Book';

	let my_favorites: BookLocalStorageInterface[] = [];
	$: listOfBooksAvailable = [...booksAdapter(books.library, my_favorites)] as BookInterface[];

	function addBook(book: BookInterface) {
		const exists = my_favorites.find((b) => b.ISBN === book.ISBN);
		if (exists) {
			myBooks.update((value) => {
				return value.filter((b) => b.ISBN !== book.ISBN);
			});
		} else myBooks.update((pv) => [...pv, { ISBN: book.ISBN }]);
	}

	onMount(() => {
		let ls = window.localStorage.getItem(LOCAL_STORAGE_MY_BOOKS);
		if (ls) myBooks.update(() => JSON.parse(ls as string));

		myBooks.subscribe((value) => {
			my_favorites = value;
			localStorage.setItem(LOCAL_STORAGE_MY_BOOKS, JSON.stringify(value));
		});

		window.addEventListener('storage', (e) => {
			if (e.key === LOCAL_STORAGE_MY_BOOKS) {
			}
		});
	});
</script>

<section class="flex flex-wrap gap-12 place-content-center">
	{#each listOfBooksAvailable as book}
		<Book {book} on:click={() => addBook(book)} />
	{/each}
</section>
