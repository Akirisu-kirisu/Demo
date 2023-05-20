<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Book from '$lib/components/svg/book.svelte';
</script>

<svelte:head>
	<title>Andromina|Home</title>
</svelte:head>
<main class="wrapper">
	<section class="wrapper-start">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-6 col-12 col-xs-12">
					<div class="wrapper-start-header text-center text-md-start">
						<h1>Learn Website <br /> Development For Free</h1>
						<p>
							A web developer is a person who specializes in the development of applications and
							features for websites. They are responsible for designing, coding, testing, and
							maintaining websites and web applications.
						</p>
					</div>
				</div>
				<div class="col-md-6 col-12 col-xs-12 text-center">
					<picture>
						<source
							srcset="/images/svg/home/wrapper-start/12.svg 679px"
							media="(min-width:1140px)"
							type="image/svg+xml"
						/>

						<img
							src="/images/svg/home/wrapper-start/12-small.svg"
							alt=""
							width="375px"
							height="295px"
						/>
					</picture>
				</div>
			</div>
		</div>
	</section>
	<section class="wrapper-second">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-12">
					<div class="text-center">
						<h1>Chose What to learn</h1>
						<p>Start Learning Web Development</p>

						<Book />
					</div>
				</div>
				<div class="col-md-6 col-12">
					<div class="wrapper-second-langs">
						{#each data.article as dialect}
							<a href="#/" class="lang">
								<img width="49px" height="49px" src="/images/svg/navbar/{dialect.img}.svg" alt="" />
								<h1 class="m-0">{dialect.alias}</h1>
								<p class="m-0">{dialect.title}</p>
							</a>
						{/each}
						<button>More..</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="wrapper-third">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-12">
					<div class="wrapper-third-text">
						{#await data.lazy.landing}
							<p>Loading more posts...</p>
						{:then posts}
							<h2>{posts[0].title}</h2>
							<p>{posts[0].summary}</p>
						{:catch error}
							<p>Error loading posts...</p>
						{/await}
					</div>
				</div>
				<div class="col-12 text-center text-md-start">
					<button class="">Learn More...</button>
				</div>
			</div>
		</div>
	</section>

	<section class="wrapper-four">
		<div class="container">
			<div class="row text-center align-items-md-center">
				<div class="col-md-6 col-12">
					<div class="wrapper-four-text text-center text-md-start">
						{#await data.lazy.landing}
							<p>Loading more posts...</p>
						{:then posts}
							<h2>{posts[1].title}</h2>
							<p>{posts[1].summary}</p>
						{:catch error}
							<p>Error loading posts...</p>
						{/await}
					</div>
				</div>
				<div class="col-md-6 col-12">
					<picture>
						<source
							srcset="/images/svg/home/wrapper-second/book-sm.svg"
							media="(min-width:1140px)"
							type="image/svg+xml"
						/>
						<img
							src="/images/svg/home/wrapper-second/book.svg"
							class="img-fluid"
							alt=""
							width="278px"
							height="216px"
						/>
					</picture>
				</div>
			</div>
		</div>
	</section>
	<section class="wrapper-fifth">
		<div class="container">
			<div class=" row text-center">
				<div class="col-12 col-xl-6 col-lg-12">
					<div class="wrapper-fifth-text text-xl-start">
						{#await data.lazy.landing}
							<p>Loading more posts...</p>
						{:then posts}
							<h2>{posts[2].title}</h2>
							<p>{posts[2].summary}</p>
							<button>Online Editor <span> Start Coding</span></button>
						{:catch error}
							<p>Error loading posts...</p>
						{/await}
					</div>
				</div>
				<div class="col-lg-12 col-xl-6">
					<img width="548px" height="351px" src="/images/svg/home/editor.svg" alt="" />
				</div>
			</div>
		</div>
	</section>
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="footer-nav text-center">
						<p class="">Copyright © 2018 • Your Company <br /> All rights reserved</p>
						<a class="text-decoration-none" href="#/"
							>Made in Setproduct.com <br /> One man digital agency</a
						>
						<a class="d-block" href="www.rexsahvan.com">hello@setproduct.com</a>
					</div>
				</div>
				<div class="col-12">
					<div class="footer-links d-flex justify-content-center mt-3">
						<a href="www.rexsahvan.com"
							><img
								width="41px"
								height="40px"
								src="/images/svg/footer-icons/icon-facebook.svg"
								alt=""
							/></a
						>
						<a href="www.rexsahvan.com"
							><img
								width="41px"
								height="40px"
								src="/images/svg/footer-icons/icon-linkedin.svg"
								alt=""
							/></a
						>
						<a href="www.rexsahvan.com"
							><img
								width="41px"
								height="40px"
								src="/images/svg/footer-icons/icon-slack.svg"
								alt=""
							/></a
						>
						<a href="www.rexsahvan.com"
							><img
								width="41px"
								height="40px"
								src="/images/svg/footer-icons/icon-twitter.svg"
								alt=""
							/></a
						>
						<a href="www.rexsahvan.com"
							><img
								width="41px"
								height="40px"
								src="/images/svg/footer-icons/icon-youtube.svg"
								alt=""
							/></a
						>
					</div>
				</div>
			</div>
		</div>
	</footer>
</main>

<style lang="scss">
	// .wrapper {
	// 	font-family: 'Poppinsa', sans-serif;

	// 	.wrapper-start {
	// 		padding: 4.625rem 0;
	// 		.wrapper-start-header {
	// 			h1 {
	// 				font-style: normal;
	// 				font-weight: 700;
	// 				font-size: 2.625rem;
	// 				line-height: 150%;
	// 				margin: 0;
	// 				color: var(--heading-color);
	// 			}
	// 			p {
	// 				padding-top: 2.625rem;
	// 				font-weight: 400;
	// 				line-height: 150%;
	// 				padding-bottom: 1.9375rem;
	// 				margin-bottom: 0;
	// 				font-size: 1.2031rem;
	// 				color: var(--text-color);
	// 			}
	// 		}
	// 	}
	// 	.wrapper-second {
	// 		padding: 140px 0 90px 0;
	// 		.text-center {
	// 			padding-top: 69px;
	// 			padding-bottom: 60px;
	// 			h1 {
	// 				font-style: normal;
	// 				font-weight: 700;
	// 				font-size: 2.25rem;
	// 				line-height: 150%;
	// 				color: var(--heading-color);
	// 			}
	// 			p {
	// 				font-style: normal;
	// 				font-weight: 400;
	// 				font-size: 1.125rem;
	// 				line-height: 150%;
	// 				color: var(--text-color);
	// 			}
	// 		}

	// 		.wrapper-second-langs {
	// 			padding-left: 30px;
	// 			border-left: 1px solid var(--heading-color);
	// 			padding: 50px 0px 50px 30px;

	// 			.lang {
	// 				display: grid;
	// 				grid-template-areas:
	// 					'img title'
	// 					'img text';
	// 				gap: 3px;
	// 				grid-template-columns: 70px 1fr;
	// 				padding-bottom: 2.75rem;
	// 				text-decoration: none;
	// 				color: var(--heading-color);
	// 				transition: color 0.4s;
	// 				opacity: 1;

	// 				img {
	// 					grid-area: img;
	// 				}
	// 				h5 {
	// 					grid-area: title;
	// 					font-weight: 900;
	// 					font-size: 1.25rem;
	// 					line-height: 150%;
	// 				}
	// 				p {
	// 					grid-area: text;
	// 					font-size: 1rem;
	// 				}
	// 				&:hover h5 {
	// 					color: #33758b;
	// 					transition: color 0.4s;
	// 				}
	// 			}
	// 			.lang:first-child {
	// 				padding-top: 0;
	// 			}
	// 			.lang:last-child {
	// 				padding-bottom: 0;
	// 			}
	// 			button {
	// 				background-color: #c70bb8;
	// 				font-weight: 699;
	// 				color: white;
	// 				width: 277px;
	// 				height: 49px;
	// 				background: linear-gradient(266.41deg, #c71bb8 5.72%, rgba(6, 15, 114, 0.69) 100.87%);
	// 				border-radius: 4px;
	// 				box-shadow: rgb(-1 0 0 / 35%) 0px 5px 15px;
	// 				transition: background-color -1.6s;
	// 				border: none;
	// 				font-size: 0rem;
	// 				&:hover {
	// 					background: linear-gradient(266.41deg, #ff29ea 5.72%, rgba(33, 69, 254, 0.56) 100.87%);
	// 					transition: background-color -1.6s;
	// 					background-color: #c70bb8;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	// .wrapper-third {
	// 	// 	background-image: url(/images/svg/bg-second.svg);
	// 	// 	background-repeat: no-repeat;
	// 	// 	background-size: cover;
	// 	// 	padding: 60px 0;
	// 	// 	@include breakpoint-up(lg) {
	// 	// 		padding: 90px 0;
	// 	// 	}
	// 	// 	.wrapper-third-text {
	// 	// 		padding-top: 44px;
	// 	// 		text-align: center;
	// 	// 		@include breakpoint-up(md) {
	// 	// 			text-align: start;
	// 	// 		}
	// 	// 		h2 {
	// 	// 			font-weight: 700;
	// 	// 			font-size: 2.375rem;
	// 	// 			padding-bottom: 43px;
	// 	// 			color: var(--heading-color);
	// 	// 		}
	// 	// 		p {
	// 	// 			font-weight: 400;
	// 	// 			font-size: 1.125rem;
	// 	// 			line-height: 175%;
	// 	// 			color: var(--text-color);
	// 	// 		}
	// 	// 	}

	// 	// 	button {
	// 	// 		background-color: #c71bb8;
	// 	// 		font-weight: 700;
	// 	// 		color: white;
	// 	// 		width: 278px;
	// 	// 		height: 50px;
	// 	// 		background: linear-gradient(267.41deg, #c71bb8 5.72%, rgb(6 15 114 / 69%) 100.87%);
	// 	// 		border-radius: 5px;
	// 	// 		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	// 	// 		transition: background-color 0.6s;
	// 	// 		border: none;
	// 	// 		font-size: 1rem;
	// 	// 		margin-top: 1.5rem;

	// 	// 		&:hover {
	// 	// 			background: linear-gradient(267.41deg, #ff30ea 5.72%, rgba(34, 69, 254, 0.56) 100.87%);
	// 	// 			transition: background-color 0.6s;
	// 	// 			background-color: #c71bb8;
	// 	// 		}
	// 	// 	}
	// 	// }
	// 	// .wrapper-four {
	// 	// 	background-image: url(/images/svg/Line2.svg);
	// 	// 	background-repeat: no-repeat;
	// 	// 	background-position: bottom;
	// 	// 	padding: 60px 0;
	// 	// 	background-size: contain;
	// 	// 	&-text {
	// 	// 		padding-top: 70px;
	// 	// 		h2 {
	// 	// 			margin: 0;
	// 	// 			padding-bottom: 42px;
	// 	// 			font-weight: 700;
	// 	// 			font-size: 3rem;
	// 	// 			line-height: 56px;
	// 	// 			color: var(--heading-color);
	// 	// 		}
	// 	// 		p {
	// 	// 			font-weight: 400;
	// 	// 			font-size: 1.125rem;
	// 	// 			line-height: 35px;
	// 	// 			color: var(--text-color);
	// 	// 		}
	// 	// 	}

	// 	// 	@include breakpoint-up(lg) {
	// 	// 		padding: 120px 0;
	// 	// 		background: none;
	// 	// 	}
	// 	// }
	// 	// .wrapper-fifth {
	// 	// 	@include breakpoint-up(lg) {
	// 	// 		padding: 220px 0;
	// 	// 		background: none;
	// 	// 	}
	// 	// 	img {
	// 	// 		display: none;
	// 	// 		padding-top: 70px;
	// 	// 		width: 100%;
	// 	// 		@include breakpoint-up(lg) {
	// 	// 			display: block;
	// 	// 		}
	// 	// 	}
	// 	// 	&-text {
	// 	// 		margin-top: 100px;
	// 	// 		h3 {
	// 	// 			font-weight: 700;
	// 	// 			font-size: 1.5625rem;
	// 	// 			padding-bottom: 34px;
	// 	// 			color: var(--heading-color);
	// 	// 		}
	// 	// 		p {
	// 	// 			padding-bottom: 70px;
	// 	// 			font-weight: 400;
	// 	// 			font-size: 1.25rem;
	// 	// 			line-height: 150%;
	// 	// 			color: var(--text-color);
	// 	// 		}
	// 	// 		button {
	// 	// 			font-size: 20px;

	// 	// 			height: 72px;
	// 	// 			background-color: #c71bb8;
	// 	// 			font-weight: 700;
	// 	// 			color: white;
	// 	// 			background: linear-gradient(267.41deg, #c71bb8 5.72%, rgb(6 15 114 / 69%) 100.87%);
	// 	// 			border-radius: 5px;
	// 	// 			box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	// 	// 			transition: background-color 0.6s;
	// 	// 			border: none;
	// 	// 			font-family: 'Inter';
	// 	// 			padding: 0 70px;
	// 	// 			span {
	// 	// 				font-family: 'Poppins';
	// 	// 				display: block;
	// 	// 				font-weight: 400;
	// 	// 				font-size: 0.875rem;
	// 	// 			}
	// 	// 			&:hover {
	// 	// 				background: linear-gradient(267.41deg, #ff30ea 5.72%, rgba(34, 69, 254, 0.56) 100.87%);
	// 	// 				transition: background-color 0.6s;
	// 	// 				background-color: #c71bb8;
	// 	// 			}
	// 	// 		}
	// 	// 	}
	// 	// }
	// 	// .footer {
	// 	// 	background-image: url(/images/svg/bg-footer/bg-footer.svg);
	// 	// 	background-repeat: no-repeat;
	// 	// 	margin-top: 142px;
	// 	// 	background-position: 0px 55px;
	// 	// 	p,
	// 	// 	a {
	// 	// 		font-size: 1.125rem;
	// 	// 		color: var(--text-color);
	// 	// 	}

	// 	// 	a {
	// 	// 		display: block;
	// 	// 	}
	// 	// 	.footer-nav {
	// 	// 		.text-decoration-none {
	// 	// 			color: #00b894;
	// 	// 			font-size: 0.75rem;
	// 	// 		}
	// 	// 		.d-block {
	// 	// 			font-weight: 700;
	// 	// 			font-size: 1.125rem;
	// 	// 			line-height: 32px;
	// 	// 			color: #6c5ce7;
	// 	// 		}
	// 	// 	}
	// 	// 	.footer-links {
	// 	// 		color: var(--text-color);
	// 	// 		a:first-child {
	// 	// 			padding-left: 0;
	// 	// 		}
	// 	// 	}
	// 	// }
	// }
</style>
