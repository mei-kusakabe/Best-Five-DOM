const list = [];
let totalPlayerCost = 0, cnt = 0, totalCost = 0;


// display Player List
function displayPlayers() {

    const totalPlayers = document.getElementById("total-players");
    totalPlayers.innerText = list.length;

    const listContainer = document.getElementById("playerList");
    listContainer.textContent = '';

    for (let i = 0; i < list.length; i++) {

        // const tr = document.createElement("tr");
        // tr.innerHTML = `
        // <th class="text-white text-center">${i + 1}</th>
        // <td class="text-white text-center" >${list[i].pLName}</td>
        // `;
        // listContainer.appendChild(tr);

        const tr = document.createElement("p");
        tr.innerHTML = `
        <p class="text-white text-center"> &nbsp;${i + 1}. <span class="text-white text-center" >${list[i].pLName}</span></p>
        `;
        listContainer.appendChild(tr);

        //Player-Expense Calculate
        // const tp = document.getElementById('total-players');
        // totalPlayerCost = tp.innerText * pcost;
    }
}

function addList(element) {
    cnt++;

    if (cnt > 5) {
        alert('you can not buy more than 5 players!');
        return;
    }
    const pLName = element.parentNode.children[0].innerText;

    const pL = {
        pLName: pLName
    }
    if (list.length < 5) {
        list.push(pL);
    }
    displayPlayers();

    element.style.backgroundColor = '#808080';
    element.style.color = 'white';
    element.disabled = true;

}

// display Player Expenses
function playerExp(element) {

    const pcostField = document.getElementById('playerCost');
    const pcost = pcostField.value;
    console.log(pcost);

    pcostField.value = "";

    const tp = document.getElementById('total-players');
    const totalPlayerCost_string = tp.innerText * pcost;
    totalPlayerCost = parseInt(totalPlayerCost_string);

    // const tp = document.getElementById('total-players');
    // totalPlayerCost = tp.innerText * 1000;
    // console.log(totalPlayerCost);

    const tpCost = document.getElementById('playerExp');
    tpCost.textContent = '';

    const tr1 = document.createElement("span");
    tr1.innerHTML = `<span class="text-white text-center fw-bold">$${totalPlayerCost}</span>`;
    tpCost.appendChild(tr1);

}
// display total Expenses
document.getElementById("button3").addEventListener('click', function () {

    const manager_CostField = document.getElementById('managerCost');
    const manager_Cost_string = manager_CostField.value;
    const manager_Cost = parseInt(manager_Cost_string);
    console.log(manager_Cost);

    const coach_CostField = document.getElementById('coachCost');
    coach_Cost_string = coach_CostField.value;
    const coach_Cost = parseInt(coach_Cost_string);
    console.log(coach_Cost);

    totalCost = totalPlayerCost + manager_Cost + coach_Cost;
    console.log(totalCost);

    manager_CostField.value = "";
    coach_CostField.value = "";


    const tCost = document.getElementById('totalExp');
    tCost.textContent = '';

    const tr2 = document.createElement("span");
    tr2.innerHTML = `<span class="text-white  fw-bold">$${totalCost}</span>`;
    tCost.appendChild(tr2);

});


