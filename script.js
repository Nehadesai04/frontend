const boxes = document.querySelectorAll('.box')
const totalDisplay = document.querySelector('.total')
const sizes = ['S', 'M', 'L', 'XL', 'XXL']
const colors = ['Black', 'White', 'Red', 'Blue', 'Green', 'Pink']

function populateDropdowns(box) {
  const sizeSelects = box.querySelectorAll('.size-select')
  const colorSelects = box.querySelectorAll('.color-select')

  sizeSelects.forEach(select => {
    select.innerHTML = '<option>Size</option>' + sizes.map(s => `<option>${s}</option>`).join('')
  })

  colorSelects.forEach(select => {
    select.innerHTML = '<option>Colour</option>' + colors.map(c => `<option>${c}</option>`).join('')
  })
}

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(b => {
      b.classList.remove('selected')
      b.querySelector('.content')?.classList.add('hidden')
      b.querySelector('input[type="radio"]').checked = false
    })

    box.classList.add('selected')
    box.querySelector('input[type="radio"]').checked = true
    box.querySelector('.content')?.classList.remove('hidden')

    const price = parseFloat(box.getAttribute('data-price'))
    totalDisplay.textContent = `Total : $${price.toFixed(2)} USD`

    populateDropdowns(box)
  })
})
