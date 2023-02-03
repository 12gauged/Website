<script>
import { MDXProvider } from "@mdx-js/vue"
export default {
    props: [
        'foo'
    ]
}
</script>

<template>
    <MDXProvider class="p-4 text-white">
        <slot />
    </MDXProvider>
</template>
