<!-- <script lang="ts">
	import { Container, Icon } from 'sveltestrap';
	import { NavbarBrand, Nav, NavItem, NavLink } from 'sveltestrap';
	import { navbar } from '$lib/database/data';
	import { fade } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '$app/forms';
	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');
		console.log('🚀 ~ file: +layout.svelte:8 ~ theme:', theme);

		if (theme) {
			document.documentElement.setAttribute('dark-theme', theme);
		}
	};
	let isOpen = false;
</script>

<header>
	<nav class="navbar navbar-expand-sm pb-3 pb-sm-4">
		<Container class="align-items-end">
			<NavbarBrand href="/">
				<img src="/images/navbar/title.svg" alt="" />
			</NavbarBrand>
			{#if !isOpen}
				<button class="btn-menu" on:click={() => (isOpen = !isOpen)}>
					<img src="/images/navbar/small/burger.svg" alt="" />
				</button>
			{/if}

			<div class="collapse navbar-collapse">
				<Nav class="ms-auto align-items-center" navbar>
					<NavItem>
						<NavLink
							class="text-white "
							style="padding-bottom:6px;font-size:1rem;margin-right: 20px;"
							on:click={() => (isOpen = !isOpen)}
							href="#/">Tutorials <Icon style="font-size:10px" name="chevron-down" /></NavLink
						>
					</NavItem>
					<form method="POST" use:enhance={submitUpdateTheme}>
						<button class="border-0" formaction="/?/setTheme&theme=dark">
							<img src="/images/navbar/moon-and-stars-svgrepo-com 1.svg" alt="" />
						</button>
					</form>
				</Nav>
			</div>
		</Container>
	</nav>

	{#if isOpen}
		<div transition:fade={{ duration: 150 }} class="nav-sm">
			<Container fluid style="padding-bottom: 2.5rem;">
				<button class="btn-close" on:click={() => (isOpen = !isOpen)}><Icon name="x-lg" /></button>

				<Container class="mt-5">
					<Nav style="flex-direction:column">
						<NavItem>
							<NavLink
								style="color: rgb(133, 168, 230);
									font-size: 19px;
									font-weight: 700;"
								href="#/">Tutorials</NavLink
							>
						</NavItem>

						{#each navbar as nav}
							<li class="nav-link mt-3" style="display:flex;">
								<a href="/tutorials/{nav.title}">
									{nav.title}
									<img class="img-lg" src="/images/navbar/{nav.img}.svg" alt="img" />
									<img class="img-sm" src="/images/navbar/small/{nav.img}.svg" alt="img" />
									<p class="p-lg">{nav.text}</p>
									<p class="p-sm">{nav.text_sm}</p>
								</a>
							</li>
						{/each}
					</Nav>
				</Container>
			</Container>
		</div>
	{/if}
</header>

<style type="scss">
	header {
		padding: 20px;
		z-index: 10;
		position: relative;
		.navbar {
			background-color: #2d3436;
			// background-color: rgb(37, 40, 42);
			padding: 0;
			border-radius: 15px;
			.btn-menu {
				display: block;
				background: transparent;
				color: white;
				border: none;
				font-size: 25px;
				border-radius: 5px;
				transition: background-color 0.3s;
				cursor: pointer;
				@include breakpoint-up(sm) {
					display: none;
				}
				&:hover {
					background-color: #4a89ff3d;
				}
			}
			.border-0 {
				background-color: transparent;
				&:hover {
					background: none;
				}
			}
		}
		.nav-sm {
			position: fixed;
			background: #26221d;
			top: 0;
			right: 0;
			left: 0;
			min-height: 50vh;
			margin: 20px;
			border-radius: 12px;

			.container-fluid {
				.btn-close {
					position: absolute;
					right: 15px;
					top: 4px;
					color: white;
					background: transparent;
					border: none;
					font-size: 1.5625rem;
				}
				.nav-link {
					transition: all 0.3s;
					opacity: 1;
					border-radius: 10px;

					a {
						align-items: center;
						display: grid;
						grid-template-areas:
							'img title'
							'img text';
						grid-template-columns: 40px 1fr;
						color: white;
						text-decoration: none;
						@include breakpoint-up(xs) {
							align-items: center;
							display: grid;
							grid-template-areas:
								'img title'
								'img text';
							grid-template-columns: 70px 1fr;
							grid-area: title;

							font-size: 15px;
							grid-gap: 5px;
						}

						img {
							grid-area: img;
						}
						.img-lg {
							display: none;
							@include breakpoint-up(xs) {
								display: block;
							}
						}
						.img-sm {
							@include breakpoint-up(xs) {
								display: none;
							}
						}
						p {
							color: rgb(157, 149, 136);
							grid-area: text;
							font-size: 13px;
							margin: 0;
						}
						.p-sm {
							display: block;
							@include breakpoint-up(xs) {
								display: none;
							}
						}
						.p-lg {
							display: none;

							@include breakpoint-up(xs) {
								display: block;
							}
						}
					}

					&:hover a {
						color: #4a89ff;
					}
					&:hover {
						background-color: rgba(129, 153, 180, 0.137);
						cursor: pointer;
					}
				}
			}
		}
	}
</style> -->
