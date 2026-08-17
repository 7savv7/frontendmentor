function Footer() {
  return (
    <footer
      className="flex flex-col items-center text-center gap-8 bg-blue950 text-white p-10 
    md:px-5 lg:py-20 lg:px-35 xl:px-50 md:flex-row md:justify-between md:items-start md:h-48 lg:h-67"
    >
      <div className="flex flex-col items-center gap-8 md:items-start md:justify-between md:h-full">
        <img src="/images/logo-light.svg" alt="logo" />

        <div className="flex gap-4">
          <img
            className="cursor-pointer"
            src="images/icon-facebook.svg"
            alt="facebook"
          />
          <img
            className="cursor-pointer"
            src="images/icon-youtube.svg"
            alt="youtube"
          />
          <img
            className="cursor-pointer"
            src="images/icon-twitter.svg"
            alt="twitter"
          />
          <img
            className="cursor-pointer"
            src="images/icon-pinterest.svg"
            alt="pinterest"
          />
          <img
            className="cursor-pointer"
            src="images/icon-instagram.svg"
            alt="instagram"
          />
        </div>
      </div>

      <nav className="md:flex-1">
        <ul
          className="flex flex-col items-center gap-4 md:text-left 
          md:ml-10 md:grid md:grid-cols-2 [&>li]:cursor-pointer [&>li]:w-fit [&>li]:hover:text-green500"
        >
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </nav>

      <div className="flex flex-col items-center gap-8 md:items-end">
        <button
          type="button"
          className="w-fit cursor-pointer text-white text-[16px] font-semibold rounded-full px-8 py-3 
        bg-linear-to-tr from-cyan400 to-green500 hover:opacity-60"
        >
          Request Invite
        </button>

        <p className="text-gray600">© Digitalbank. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
