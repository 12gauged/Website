<script setup>
import { Link } from "aleph/vue"

const pages = [
	"News",
	"About"
]
</script>

<template>
	<header class="bg-orange flex flex-row items-center justify-between p-4">
		<img src="/assets/images/logos/12gauged.png" class="" />
		<section>
			<Link 
				class="m-2 text-2xl" 
				v-for="page in pages" 
				to="/{{ page.toLowerCase() }}"
			>
				{{ page }}
			</Link>
		</section>
	</header>
</template>