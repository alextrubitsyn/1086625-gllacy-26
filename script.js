const modalButton = document.querySelector('.button-message');
const closeButton = document.querySelector('.button-close');
const overlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.user-message');

if (modalButton && closeButton && overlay && modal) {
    modalButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();

        overlay.classList.add('modal-open');
        modal.classList.add('modal-open');
    }

    function closeModal(e) {
        e.preventDefault();

        overlay.classList.remove('modal-open');
        modal.classList.remove('modal-open');
    }
};