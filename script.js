document.addEventListener("DOMContentLoaded", () => {
    const produtos = document.querySelectorAll(".produto");
    produtos.forEach((produto, index) => {
        setTimeout(() => {
            produto.style.opacity = 1;
            produto.style.transform = "translateY(0)";
        }, index * 300);
    });
});