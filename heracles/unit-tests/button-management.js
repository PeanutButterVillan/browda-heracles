
window.addEventListener("DOMContentLoaded",function(e) {

    const orderButtons = document.querySelectorAll("button[data-order]");
    
    orderButtons.forEach(function(button)
    {
        button.addEventListener("click", function(e){
            const entryValue = document.querySelector("input[id]");
            const button = e.currentTarget;

            moneyAmount = document.getElementById('money-amount').value;


            formattedMoneyValue2 = toFormat(moneyAmount, 'USD');


            document.getElementById('lbltipAddedComment').innerHTML = formattedMoneyValue2;
            document.getElementById('lbltipAddedComment').value = formattedMoneyValue2;

            const container = button.parentNode;
            const order = {
                id: button.getAttribute("data-order"),

            };

            localStorage.setItem("order", JSON.stringify(order));
            const url = window.location.href.replace("money.html", "order.html");

        });
    });

});