const queryMobileMenu = document.getElementById('MobileMenu');
const queryMobile_Nav = document.getElementById('mobile-nav');

function MobileMenu() {
  if ( queryMobileMenu.style.display == 'flex') {
    queryMobileMenu.style.display = 'none';
    // queryMobile_Nav.style.display = 'block';
  } else {
    queryMobileMenu.style.display  = 'flex';
    // queryMobile_Nav.style.display = 'none';
    }
}
