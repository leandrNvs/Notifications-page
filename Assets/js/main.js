const button = document.querySelector('.clear')
const notifications = document.querySelectorAll('.unread')

button.addEventListener('click', function() {

  notifications.forEach(item => {
    item.classList.remove('unread')
  })

  document.querySelector('.badge').innerHTML = '0'

})