const list = [];
// products-cart

function displayProduct() {
    // let totalPrice = 0;
    const totalPlayers = document.getElementById("total-players");
    totalPlayers.innerText = list.length;

    const cartContainer = document.getElementById("playerList");
    cartContainer.textContent = '';

    for (let i = 0; i < list.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${list[i].pLName}</td>
        `;
        cartContainer.appendChild(tr);
    }
}
cnt = 0;
function addList(element) {
    cnt++;

    if (cnt > 5) {
        alert('you can not buy more than 5 players!');
        return;
    }
    // console.log(element.parentNode.children[0].innerText);
    const pLName = element.parentNode.children[0].innerText;

    const pL = {
        pLName: pLName
    }
    if (list.length < 5) {
        list.push(pL);
    }



    displayProduct();
}