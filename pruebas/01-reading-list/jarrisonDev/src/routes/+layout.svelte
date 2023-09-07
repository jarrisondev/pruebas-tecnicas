<script>
	import '../app.css';
</script>

<div class="max-w-4xl mx-auto px-4">
	<header class="mt-10">
		<h1 class="text-3xl font-bold">Reading List</h1>
		<p class="mt-2 text-gray-600">A list of books you want to read.</p>
	</header>
	<main class="mt-12">
		<slot />
	</main>
</div>

<footer class="bg-slate-800 sticky bottom-0 w-full flex justify-center py-1">
	<p class="text-white">
		Made with ❤️ by <a href="https://jarrison.dev" class="font-bold">jarrison.dev</a>
	</p>
</footer>
