{
    const welcome = () => {
        console.log("Hello World")
    };


    const toggleText = () => {
        const textRegular = document.querySelector(".js-section__text-regular")
        const buttonActionName = document.querySelector(".js-button-action-name")

            textRegular.classList.toggle("section__text-regular--hidden")

            textRegular.classList.contains("section__text-regular--hidden") ? buttonActionName.innerText = "Pokaż " : buttonActionName.innerText = "Ukryj "

    };

    const init = () => {
        const button = document.querySelector(".js-button")
        button.addEventListener("click", toggleText)

        welcome();
    };

    init ();
}