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

    function openModal(event) {
        event.preventDefault();

        overlay.classList.add('overlay-open');
        modal.classList.add('modal-open');
        fullName.focus();
    }

    function closeModal(event) {
        event.preventDefault();

        overlay.classList.remove('overlay-open');
        modal.classList.remove('modal-open');
        modal.classList.remove('modal-error');
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!fullName.value || !eMail.value || !message.value) {
            modal.classList.remove('modal-error');
            modal.offsetWidth = modal.offsetWidth;
            modal.classList.add('modal-error');
        } else {
            closeModal(event);
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.keyCode === 27) {
            event.preventDefault();

            if (modal.classList.contains('modal-open')) {
                modal.classList.remove('modal-open');
                overlay.classList.remove('overlay-open');
            }
        }
    });
};