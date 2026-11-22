
class Subscriber {
    constructor(name, email, agreement) {
        this.name = name;
        this.email = email;
        this.agreement = agreement;
    }

    printInfo() {
        console.log("Новый подписчик:");
        console.log(`Имя: ${this.name}`);
        console.log(`Электронная почта: ${this.email}`);
        console.log(`Согласие на рассылку: ${this.agreement ? "Да" : "Нет"}`);
    }
}

const form = document.getElementById("subscribe-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("subscriber-name").value;
    const email = document.getElementById("subscriber-email").value;
    const agreement = document.getElementById("subscriber-agreement").checked;

    const subscriber = new Subscriber(name, email, agreement);

    subscriber.printInfo();

    document.getElementById("subscribe-message").textContent =
        "Спасибо за подписку!";

    form.reset();
});
