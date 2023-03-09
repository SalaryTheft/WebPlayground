document.addEventListener("DOMContentLoaded", () => {
    const menu_btn = document.querySelector("#menu_btn");
    const menu = document.querySelector("#main_menu");
    const content = document.querySelector("#main_content");

    menu_btn.addEventListener("click", () => {
        menu.classList.toggle("menu-folded");
        content.classList.toggle("menu-folded");
    });

    document.querySelectorAll(".menu-list > a").forEach((a_tag) => {
        a_tag.addEventListener("click", (e) => {
            if (e.target.closest("a").classList.contains("active")) return;
            document.querySelector(".menu-list > a.active").classList.add("tmp");
            setTimeout(() => {
                document.querySelector(".menu-list > a.active.tmp").classList.remove("active", "tmp");
            }, 100);
            e.target.closest("a").classList.add("active");
        });
    });
});
