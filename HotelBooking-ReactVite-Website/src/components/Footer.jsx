const Footer = () => (
  <footer className='bg-primary py-12'>
    <div className='container mx-auto text-white flex items-center gap-5 sm:justify-between flex-col sm:flex-row'>
      <a href="/" >
        <img className="w-[160px]" src="src/assets/img/StayWise/logo-light.png" alt="Logo White" />
      </a>
      <div className="flex flex-col items-center">
        <p>Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
