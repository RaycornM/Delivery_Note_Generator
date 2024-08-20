document.getElementById('add-product').addEventListener('click', function () {
    const productItem = document.createElement('div');
    productItem.className = 'product-item form-group';
    productItem.innerHTML = `
        <label for="productName">产品名称:</label>
        <input type="text" class="productName" placeholder="输入产品名称" required>
        <label for="quantity">数量:</label>
        <input type="number" class="quantity" placeholder="输入数量" required>
        <label for="unit">单位:</label>
        <select class="unit">
            <option value="件">件</option>
            <option value="箱">箱</option>
            <option value="公斤">公斤</option>
            <option value="米">米</option>
        </select>
        <button type="button" class="remove-product"><i class="fas fa-trash"></i> 删除</button>
    `;
    document.getElementById('product-list').appendChild(productItem);

    productItem.querySelector('.remove-product').addEventListener('click', function () {
        productItem.remove();
    });
});

document.getElementById('invoice-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const invoiceDate = document.getElementById('invoiceDate').value;

    document.getElementById('outputCustomerName').textContent = customerName;
    document.getElementById('outputCustomerAddress').textContent = customerAddress;
    document.getElementById('outputInvoiceDate').textContent = invoiceDate;

    const productList = document.querySelectorAll('.product-item');
    const outputTable = document.getElementById('outputProductTable');
    outputTable.innerHTML = `
        <tr>
            <th>产品名称</th>
            <th>数量</th>
            <th>单位</th>
        </tr>
    `;

    productList.forEach(item => {
        const productName = item.querySelector('.productName').value;
        const quantity = item.querySelector('.quantity').value;
        const unit = item.querySelector('.unit').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${productName}</td>
            <td>${quantity}</td>
            <td>${unit}</td>
        `;
        outputTable.appendChild(row);
    });

    document.getElementById('invoice-output').style.display = 'block';
});
