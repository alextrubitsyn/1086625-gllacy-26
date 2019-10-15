var modalButton = document.querySelector('.button-message');
var closeButton = document.querySelector('.button-close');
var overlay = document.querySelector('.modal-overlay');
var sentButton = document.querySelector('.button-user-message')
var modal = document.querySelector('.modal-user-message');
var form = modal.querySelector('form');
var fullName = modal.querySelector('[name=message-fullname]');
var eMail = modal.querySelector('[name=message-email]');
var message = modal.querySelector('[name=message-text]');

if (modalButton && closeButton && overlay && modal) {
    modalButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    function openModal(event) {
        event.preventDefault();

        overlay.classList.add('overlay-open');
        modal.classList.add('modal-open');
        fullName.focus();
    }

    function closeModal(event) {
        if (event && event.preventDefault) {
            event.preventDefault();
        }

        overlay.classList.remove('overlay-open');
        modal.classList.remove('modal-open');
        modal.classList.remove('modal-error');
        modal.classList.remove('modal-sent');
        fullName.value = '';
        eMail.value = '';
        message.value = '';

    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!fullName.value || !eMail.value || !message.value) {
            modal.classList.remove('modal-error');
            modal.offsetWidth = modal.offsetWidth;
            modal.classList.add('modal-error');
        } else {
            modal.classList.add('modal-sent');
            setTimeout(closeModal, 500);
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.keyCode === 27) {
            event.preventDefault();

            if (modal.classList.contains('modal-open')) {
                closeModal();
            }
        }
    });
};