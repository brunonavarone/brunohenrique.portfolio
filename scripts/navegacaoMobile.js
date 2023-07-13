class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind();
  }

  animatedLinks() {
    this.navLinks.forEach((link) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animattion = "navLinkFade 0.5 ease fowards 0.3s");
    });
  }

  handleClick = () => {
    console.log(this);
    this.navList.classList.toggle(this.activeClass);
  };

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".menu-mobile",
  ".paginacao",
  ".paginacao li"
);
mobileNavbar.init();
