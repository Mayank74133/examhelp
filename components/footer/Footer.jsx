import { IconBrandAmongUs } from "@tabler/icons-react";
import price from "@/public/images/price_11.jpg";

const Footer = () => {
  return (
    <div
      className="bg-gradient-to-t from-blue-900 to-blue-400"
      style={{ background: `url(${price.src})` }}
    >
      <footer className="footer p-10  text-black flex justify-around">
        <aside>
          <IconBrandAmongUs className="w-24 h-24" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="text-slate-600 text-lg">Services</header>
          <div className="link link-hover">Branding</div>
          <div className="link link-hover">Design</div>
          <div className="link link-hover">Marketing</div>
          <div className="link link-hover">Advertisement</div>
        </nav>
        <nav>
          <header className="text-slate-600 text-lg">Company</header>
          <div className="link link-hover">About us</div>
          <div className="link link-hover">Contact</div>
          <div className="link link-hover">Jobs</div>
          <div className="link link-hover">Press kit</div>
        </nav>
        <nav>
          <header className="text-slate-600 text-lg">Legal</header>
          <div className="link link-hover">Terms of use</div>
          <div className="link link-hover">Privacy policy</div>
          <div className="link link-hover">Cookie policy</div>
        </nav>
      </footer>
      <footer className="footer items-center p-4  text-slate-600 justify-center">
        <aside className="items-center grid-flow-col w-full">
          <div className=" flex ">
            <p>Copyright © 2024 - All right reserved</p>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
