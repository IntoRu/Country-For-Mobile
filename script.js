let options = '' // сюда будем записовать html выпадающий список

const imgName = document.querySelector('.nameImg')
const select = document.querySelector('select')
const btn = document.querySelector('button')
const optionTouch = document.querySelectorAll('.select')

// делаем выпадающий список
arr.forEach(el => {
    options += `
                <option>${el.name}</option>
            `
    select.innerHTML = `<option selected = 'selected'>Выберите страну</option>` + options
})

btn.addEventListener('click', () => {
    optionTouch.forEach(el => {
        // console.log(el.value) // значение каждого выпадающего списка
        arr.forEach(elArr => {
            if (el.value != 'Выберите страну') {
                if (elArr.name == el.value) {
                    imgName.src = elArr.flag
                }
            }
            else {
                imgName.src = ''
            }


        })
    })
})






