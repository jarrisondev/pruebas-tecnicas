<script lang="ts">
	import type { BookInterface } from '.';

	export let book: BookInterface;

	$: buttonClass = book.isfavorite ? 'bg-red-500' : 'bg-green-500';
</script>

<article class="flex flex-col w-60 h-[27rem]">
	<div class="relative group">
		<img
			src={book.cover}
			alt={book.title}
			class={`aspect-[2/3] ${
				book.isfavorite ? 'shadow-lg shadow-slate-500' : ''
			} group-hover:shadow-lg group-hover:shadow-slate-500 group-hover:scale-105 transform transition`}
		/>
		<div
			class="absolute bottom-0 w-full flex place-content-center gap-4 scale-0 group-hover:scale-100 transform transition"
		>
			<button on:click class={`${buttonClass} rounded-full p-3 text-white mb-2`}>
				{#if book.isfavorite}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-x"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M18 6l-12 12" />
						<path d="M6 6l12 12" />
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-check"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M5 12l5 5l10 -10" />
					</svg>
				{/if}
			</button>
		</div>
	</div>
	<div class="pr-2 pt-2">
		<h4 title={book.title} class="w-full text-lg font-semibold truncate">{book.title}</h4>
		<p class="text-sm">{book.author.name} - {book.year}</p>
	</div>
</article>
