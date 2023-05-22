import react from "react";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w py-26 sm:py-22 lg:py-39 bg-gray-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Estudio contable Gagnolo
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mail: benjamingagnolo@gmail.com
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
