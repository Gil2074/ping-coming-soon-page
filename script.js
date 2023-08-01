const form = document.querySelector('form')
const mail = document.getElementById('submail')
const subtn = document.getElementById('subbtn')
const notif = document.getElementById('notification')

form.addEventListener('submit', e => {
    e.preventDefault()
    let val = mail.value.trim();
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (val === '') {
        notif.innerText = 'Empty Email Field'
        mail.classList.add('error')
    }
    else if (!pattern.test(val)) {
        notif.innerText = 'Please provide a valid email adress'
        mail.classList.add('error')
    }
    else {
        notif.innerText = 'Succesfuly subscribed. You will be notified as soon as we launch'
        notif.classList.add('success')
    }
}
)