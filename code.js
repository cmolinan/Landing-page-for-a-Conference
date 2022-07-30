const queryMobileMenu = document.getElementById('MobileMenu');
const queryMobile_Nav = document.getElementById('mobile-nav');
const queryMain = document.body;
const queryExtra = document.getElementById('logo-extra-info');

function MobileMenu() {
  if ( queryMobileMenu.style.display == 'flex') {
    queryMobileMenu.style.display = 'none';
    queryExtra.style.display = 'flex';
    queryMain.style.overflow = 'visible';
  } else {
    queryMain.style.overflow = 'hidden';
    queryMobileMenu.style.display  = 'flex';
    queryExtra.style.display = 'none';
    }
}
