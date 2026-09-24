function Footer() {
  return (
    <footer className="bg-gray900 rounded-tr-[80px] flex flex-col items-center gap-10 p-10 text-white text-center">
      <img src="/images/logo.svg" alt="logo" />

      <div>
        <h3>Product</h3>

        <ul>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>

      <div>
        <h3>Company</h3>

        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>

      <div>
        <h3>Connect</h3>

        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
