const queryMobileMenu = document.getElementById('MobileMenu');
const queryMobile_Nav = document.getElementById('mobile-nav');
const queryMain = document.body;

function MobileMenu() {
  if ( queryMobileMenu.style.display == 'flex') {
    queryMobileMenu.style.display = 'none';
    queryMain.style.overflow = 'visible';
    // queryMobile_Nav.style.display = 'block';
  } else {
    queryMain.style.overflow = 'hidden';
    queryMobileMenu.style.display  = 'flex';
    // queryMobile_Nav.style.display = 'none';
    }
}
