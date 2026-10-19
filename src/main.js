import '@/main.scss'

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");
    const upBtn = document.querySelector(".footer__up-link");

    // Убедимся, что при загрузке кнопка плавает
    upBtn.classList.remove("docked");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Футер появился на экране - "приземляем" кнопку
                    upBtn.classList.add("docked");
                } else {
                    // Футер ушел из зоны видимости - снова делаем кнопку плавающей
                    upBtn.classList.remove("docked");
                }
            });
        },
        {
            // Срабатывает, когда до низа экрана остается 100px (настройте под себя)
            rootMargin: "0px 0px -150px 0px",
            threshold: 0,
        }
    );

    if (footer) {
        observer.observe(footer);
    }
});