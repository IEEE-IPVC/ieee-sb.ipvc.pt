function nav() {
  return `<nav class="navbar sticky-top">
			<div class="container">
				<a class="navbar-brand" href="/">
					<img src="/img/decor/ieee-kite.png" alt="Logo IEEE" class="logo">
				</a>

				<a href="https://discord.com/invite/sEhaGwPWFC" class="btn btn-outline-light btn-bg text-center justify-content-center">Aderir</a>

				<div class="d-flex flex-lg-row text-center justify-content-center gap-3 ">
					<div class="d-flex flex-lg-row gap-3">
						<a href="/blog" class="btn btn-outline-light btn-sm">Blog</a>
						<a href="/board" class="btn btn-outline-light btn-sm">Board</a>
					</div>
				</div>
			</div>
		</nav>`;
}

document.getElementById('navbar-container').innerHTML = nav();
