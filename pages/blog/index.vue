<template>
	<main>
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
		<p class="mt-2 text-lg leading-8 text-gray-600">
			Read the things I've written and, for some reason, decided to put on the internet.
		</p>
		<div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
			<article
				v-for="article in data"
				:key="article.path"
				class="relative isolate flex flex-col gap-8 lg:flex-row"
			>
				<div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
					<img
						:src="article.imageUrl"
						alt=""
						class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
					/>
					<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
				</div>
				<div>
					<div class="flex items-center gap-x-4 text-xs">
						<time
							:datetime="article.date ? new Date(article.date).toISOString() : ''"
							class="text-gray-500"
							>{{ article.date ? new Date(article.date).toLocaleDateString() : "No date" }}</time
						>
					</div>
					<div class="group relative max-w-xl">
						<h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
							<NuxtLink :to="article.path">
								<span class="absolute inset-0" />
								{{ article.title }}
							</NuxtLink>
						</h3>
						<p class="mt-5 text-sm leading-6 text-gray-600">
							{{ article.description }}
						</p>
					</div>
					<div class="mt-6 flex border-t border-gray-900/5 pt-6">
						<div class="relative flex items-center gap-x-4">
							<img :src="article.author?.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
							<div class="text-sm leading-6">
								<p class="font-semibold text-gray-900">
									<NuxtLink>
										<span class="absolute inset-0" />
										{{ article.author?.name }}
									</NuxtLink>
								</p>
								<p class="text-gray-600">{{ article.author?.role }}</p>
							</div>
						</div>
					</div>
				</div>
			</article>
		</div>
	</main>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("blog-list", () =>
	queryCollection("content")
		.where("path", "LIKE", "/blog/%")
		.where("path", "NOT LIKE", "/blog/.%")
		.order("date", "DESC")
		.limit(50)
		.all(),
);
</script>
<style lang="scss">
h2 {
	margin-bottom: 0;
	font-size: 1.2rem;
}
</style>
