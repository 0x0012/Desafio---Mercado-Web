// Arreglo del productos del carro
let products = []

// Al cargar documento, comprueba si existen elementos del carro guardados localmente y los carga si hay
$(document).ready(function() {
  products = JSON.parse(localStorage.getItem('products'))
  products = products ?? []
  products.forEach(i => addItemModal(i))
  toggleItemsCount()
})

// Al hacer click en un producto lo agrega al carro si es que no esta
$('.product-card').on('click', function() {
  const product = $(this).attr('id')

  if (!products.includes(product)) {
    products.push(product)
    toggleItemsCount()
    addItemModal(product)
    localStorage.setItem('products', JSON.stringify(products))
  }
})

// Muestra modal con items en el carro actualmente si es que los hay
$('#shoppingcar').on('click', function() {
  if (products.length > 0) {
    $('.modal').modal('show')
  } else {
    alert('El carro esta vacio')
  }
})

// Elimina todos los items del carro
$('#clearitems').on('click', function() {
  products = []
  localStorage.clear()
  toggleItemsCount()
  $('#items-modal').empty()
  $('.modal').modal('hide')
})

// Muestra el contador de items en el carro
const toggleItemsCount = _ => {
  items = products.length
  if (items > 0) {
    $('#shoppingcaritems').text(items)
    $('#shoppingcaritems').show()
  } else {
    $('#shoppingcaritems').hide()
  }
}

// Agrega un item del carro a la ventana modal
const addItemModal = item => {
  const html = `<div class="card col-1 mx-1 my-1 tooltip-test" title="${item}" style="width: 5rem"><img src="img/${item}.png" class="card-img"></div>`
  $('#items-modal').append(html)
}