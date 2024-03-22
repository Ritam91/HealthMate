import Logo from "../assets/logo-white.png";

const Footer = () => (
  <footer data-scroll data-scroll-section className="bg-black text-white ">
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-10">
        <div className="flex flex-col">
          <img src={Logo} alt="healthmate_logo" className="w-32 h-auto mb-4" />
          <p className="text-sm">
            HealthMate, <br/> <span className="">All Rights Reserved</span>
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Links</h4>
          <p className="cursor-pointer">Emotion Detection</p>
          <p className="cursor-pointer">Community</p>
          <p className="cursor-pointer">Chatbot</p>
          <p className="cursor-pointer">Contact</p>
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <p className="cursor-pointer">Terms & Conditions</p>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Contact</p>
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Get in touch</h4>
          <p>Healthmate, Jalandhar, IN</p>
          <p>085-1234567</p>
          <p>info@abc.com</p>
        </div>
      </div>

      <div className="text-center p-6">
        <p className="text-xs"> &copy;2024 Healthmate. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
