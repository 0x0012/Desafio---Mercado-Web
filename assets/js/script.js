let products = []

$(document).ready(function() {
  products = JSON.parse(localStorage.getItem('products'))
  products = products ?? []
  products.forEach(i => addItemModal(i))
  toggleItemsCount()
})

$('.product-card').on('click', function() {
  const product = $(this).attr('id')

  if (!products.includes(product)) {
    products.push(product)
    toggleItemsCount()
    addItemModal(product)
    localStorage.setItem('products', JSON.stringify(products))
  }
})

$('#shoppingcar').on('click', function() {
  if (products.length > 0) {
    $('.modal').modal('show')
  } else {
    alert('El carro esta vacio')
  }
})

$('#clearitems').on('click', function() {
  products = []
  localStorage.clear()
  toggleItemsCount()
  $('#items-modal').empty()
  $('.modal').modal('hide')
})

const toggleItemsCount = _ => {
  items = products.length
  if (items > 0) {
    $('#shoppingcaritems').text(items)
    $('#shoppingcaritems').show()
  } else {
    $('#shoppingcaritems').hide()
  }
}

const addItemModal = item => {
  const html = `<div class="card col-1 mx-1 my-1 tooltip-test" title="${item}" style="width: 5rem"><img src="img/${item}.png" class="card-img"></div>`
  $('#items-modal').append(html)
}