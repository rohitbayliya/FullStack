    let form = document.getElementById('form');
    let ctgInput = document.getElementById('ctg');
    let amountInput = document.getElementById('expense');
    let balanceDisplay = document.getElementById('balance');
    let incomeDisplay = document.getElementById('income');
    let expenseDisplay = document.getElementById('expenseTotal');
    let list = document.getElementById('list');

    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    form.addEventListener('submit', function(e) {
    e.preventDefault();

    let category = ctgInput.value.trim();
    let amount = parseFloat(amountInput.value);
    if (category === '') {
        alert('Please fill out both fields correctly.');
        return;
    }

    let transaction = {
        id: Date.now(),
        category,
        amount
    };

    transactions.push(transaction);
    updateLocalStorage();
    showTransactions();
    form.reset();
    });

    function deleteTransaction(id) {
    transactions = transactions.filter(txn => txn.id !== id);
    updateLocalStorage();
    showTransactions();
    }

    function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    function showTransactions() {
    list.innerHTML = '';
    let total = 0, income = 0, expense = 0;

    transactions.forEach(txn => {
        let li = document.createElement('li');
        li.className = txn.amount >= 0 ? 'plus' : 'minus';
        li.style.borderColor = txn.amount >= 0 ? 'green' : 'red';

        li.innerHTML = `
        ${txn.category} <span>₹${txn.amount}</span>
        <button class="delete-btn" onclick="deleteTransaction(${txn.id})">❌</button>
        `;

        list.appendChild(li);

        total += txn.amount;
        if (txn.amount >= 0) income += txn.amount;
        else expense += txn.amount;
    });

    balanceDisplay.textContent = total.toFixed(2);
    incomeDisplay.textContent = `₹${income.toFixed(2)}`;
    expenseDisplay.textContent = `₹${Math.abs(expense).toFixed(2)}`;
    }
