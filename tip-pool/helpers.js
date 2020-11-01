// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
const sumPaymentTotal = (type) => {
    let total = 0;
    for (let key in allPayments) {
        let payment = allPayments[key];
        total += Number(payment[type]);
    }
    return total;
}

// converts the bill and tip amount into a tip percent
const calculateTipPercent = (billAmt, tipAmt) => Math.round(100 / (billAmt / tipAmt))

// expects a table row element, appends a newly created td element from the value
const appendTd = (tr, value) => {
    let newTd = document.createElement('td');
    newTd.innerText = value;

    tr.append(newTd);
}

// append delete button and click handler for removing server from allServers and DOM td
const appendDeleteBtn = (tr, type) => {
    let newTd = document.createElement('td');
    newTd.className = 'deleteBtn';
    newTd.innerText = 'X';
    newTd.addEventListener('click', removeEle);
    tr.append(newTd);
}

const removeEle = (evt) => {
    let ele = evt.target.closest('tr');
    delete allServers[ele.id];
    ele.parentNode.removeChild(ele);
    updateServerTable();
}