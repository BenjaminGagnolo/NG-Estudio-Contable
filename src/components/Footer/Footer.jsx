
import Logo from "../../../public/LOGO1.png";
const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w py-26  sm:py-22 lg:py-39 bg-wite-200">
        <div className="flex justify-center items-center">
          
            <img src={Logo} alt="logo" className="w-12" />
          
          <div className="border-t border-gray-300 w-200"></div>{" "}
          {/* Línea divisoria */}
          <div className="mt-10 flex justify-center">
          </div>
          <div className="text-left mt-6">
            <p className="text-gray-600 text-xs">
              &copy; 2023 NG-EstudioContable. Todos los derechos reservados.
            </p>
            <br></br>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto max-w py-26 sm:py-22 lg:py-39 bg-gray-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Estudio contable Gagnolo
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mail: benjamingagnolo@gmail.com
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6"></div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
