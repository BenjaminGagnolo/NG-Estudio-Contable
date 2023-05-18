import NavBar from "../NavBar/NavBar";
import Logo from "../../../public/UNRC.png";
import Footer from "../Footer/Footer";
import React, { useEffect } from 'react';


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <NavBar />
      <div className="  overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Un poco sobre nosotros
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-900">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet Lorem ipsum dolor sit
              amet,adipisicing elit. Asperiores, placeat numquam facilis odio
              esse, officia architecto perferendisnt inventore illo accusantium
              facere! Lorem ipsum dolor sit amet, adipisicing elit. Asperiores,
              placeat numquam facilis odio esse, officia architecto
              perferendisnt inventore illo accusantium facere! adipisicing elit.
              Asperiores, placeat numquam facilis odio esse, officia architecto
              perferendisnt inventore illo accusantium facere!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white sm:py-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Titular
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Nicolas Gagnolo
            </p>
          </div>
          <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs"></div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 ">
                  <a href="https://www.unrc.edu.ar/ " target="_blank" > 
                    Universidad Nacional de Rio Cuarto
                  </a>
                </h3>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={Logo}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />{" "}
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900"></p>
                </div>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs"></div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 ">
                  <p>
                    Si quiere agregar algo 
                  </p>
                </h3>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={Logo}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />{" "}
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900"></p>
                </div>
              </div>
            </article>
          </div>
          
        </div>
        
      </div>
      <br />
      <Footer />
    </>
  );
};

export default About;
