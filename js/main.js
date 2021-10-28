// Pobranie elementu z klasą .faq-item przez querySelectorAll
const items = document.querySelectorAll('.faq-item');
// Pobranie elementu .faq-content  przez querySelectorAll
const faqContent = document.querySelectorAll('.faq-content');
// Funkcja showItem dodająca eventlistener na click dla elementu item zgodnie z odpowiadjacym mu indexem w obiekcie tabelo podobnym oraz dodająca klasę do elementu faqContent zgdnie z indexem node listy.
const showItem = () => {
	for (let i = 0; i < faqContent.length; i++) {
		items[i].addEventListener('click', () => {
			faqContent[i].classList.toggle('show');
		});
	}
};
// Wywołanie Funckji
showItem();
