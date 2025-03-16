function footer() {
  return `<footer class="mt-auto bg-dark text-white">
    <div class="container py-3">
        <!-- Linha para as imagens -->
        <div class="row justify-content-center align-items-center text-center gap-3">
            <div class="col-auto"> <!-- "col-auto" ajusta a largura ao conteúdo -->
                <img src="img/decor/footerieee.png" alt="IEEE Logo" class="footerlogos img-fluid">
            </div>
            <div class="col-auto">
                <img src="img/decor/footeripvc.png" alt="IPVC Logo" class="footerlogos img-fluid">
            </div>
        </div>

        <hr class="border-light my-2">

        <!-- Linha para o texto e ícones -->
        <div class="mt-2 d-flex flex-wrap gap-3 align-items-center justify-content-center text-center">
            <small>&copy; IEEE SB IPVC - 2025</small>
            <a href="https://www.instagram.com/ieeeipvc_sb/" class="text-white" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/IEEE-IPVC-SB" class="text-white text-decoration-none" aria-label="GitHub">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
</footer>`;
}

document.getElementById('footer-container').innerHTML = footer();
