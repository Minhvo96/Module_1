function clicked() {
    alert('Hệ thống đang bảo trì, xin quý khách thông cảm ^^');
}

const btn = document.querySelectorAll('button')
btn.forEach(function (button, index) {
    button.addEventListener('click', function (event) {
        {
            let btnItem = event.target;
            let product = btnItem.parentElement;
            let productImg = product.querySelector('img').src;
            var productName = product.querySelector('h1').innerText;
            var productPrice = product.querySelector('span').innerText;
            addcart(productPrice, productName, productImg)
        }
    })
})

function addcart(productPrice, productName, productImg) {
    let addtr = document.createElement('tr');
    let trcontent = '<tr><td style="display: flex;align-items: center;"><img src="' + productImg + '" class="mini_img">' + productName + '</td><td><span>' + productPrice + '</span><sup>đ</sup></td><td><input class="input" type="number" value="1" min="1"></td><td class="delete"><span class="cart-delete">Xóa</span></td></tr >';
    addtr.innerHTML = trcontent
    let cartTable = document.querySelector('tbody');
    cartTable.append(addtr)
    cartTotal()
    deleteCart()
}

function cartTotal() {
    let cartItem = document.querySelectorAll('tbody tr')
    let totalC = 0;
    for (i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector('input').value
        let productPrice = cartItem[i].querySelector('span').innerText
        totalA = parseFloat(inputValue) * parseFloat(productPrice) * 1000000;
        totalC = totalC + totalA
    }
    let cartTotalA = document.querySelector('.price_total span')
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputChange()
}

function deleteCart() {
    let cartItem = document.querySelectorAll('tbody tr')
    for (i = 0; i < cartItem.length; i++) {
        let productT = document.querySelectorAll('.cart-delete')
        productT[i].addEventListener('click', function (event) {
            let cartDelete = event.target
            let cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            cartTotal()
        })
    }
}

function inputChange() {
    let cartItem = document.querySelectorAll('tbody tr')
    for (i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector('input')
        inputValue.addEventListener('change', function () {
            cartTotal()
        })
    }
}