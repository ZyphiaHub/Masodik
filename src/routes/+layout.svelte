<!-- src/routes/+layout.svelte -->
<script>
    import Navbar from '$lib/Navbar.svelte';
    export const prerender = true;
</script>

<Navbar />

<slot />

