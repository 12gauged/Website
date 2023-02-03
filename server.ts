import { serve } from "aleph/vue-server"
// @ts-ignore a
import routes from "./routes/_export.ts"
import unocss from "./uno.config.ts"

import MDX from "aleph/mdx"
import remarkFrontmatter from "https://esm.sh/remark-frontmatter@4.0.1"
import remarkGFM from "https://esm.sh/remark-gfm@3.0.1"
import rehypeHighlight from "https://esm.sh/rehype-highlight@5.0.2"
import rehypeSlug from "https://esm.sh/rehype-slug@5.0.1"

serve(
	{
		router: {
			glob: "./routes/**/*.{ts,tsx,mdx,vue}",
			routes,
		},
		ssr: true,
		// @ts-ignore a
		unocss: {
			test: /\.vue$/,
			...unocss,
		},
		loaders: [
			new MDX({
				remarkPlugins: [remarkFrontmatter, remarkGFM],
				rehypePlugins: [rehypeHighlight, rehypeSlug],
				providerImportSource: "@mdx-js/vue"
			}),
		],
	},
)
