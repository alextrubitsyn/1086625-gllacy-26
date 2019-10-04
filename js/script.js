const modalButton = document.querySelector('.button-message');
const closeButton = document.querySelector('.button-close');
const overlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal-user-message');
const form = modal.querySelector('form');
const fullName = modal.querySelector('[name=message-fullname]');
const eMail = modal.querySelector('[name=message-email]');
const message = modal.querySelector('[name=message-text]');



if (modalButton && closeButton && overlay && modal) {
    modalButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();

        overlay.classList.add('modal-open');
        modal.classList.add('modal-open');
        fullName.focus();

    }

    function closeModal(e) {
        e.preventDefault();

        overlay.classList.remove('modal-open');
        modal.classList.remove('modal-open');
        modal.classList.remove('modal-error');
    }

};
window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal.classList.contains('modal-open')) {
            modal.classList.remove('modal-open');
            overlay.classList.remove('modal-open');
        }

    }
});

form.addEventListener('submit', function(evt) {
    if (!fullName.value || !eMail.value || !message.value) {
        evt.preventDefault();
        modal.classList.remove('modal-error');
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add('modal-error');
    }
});