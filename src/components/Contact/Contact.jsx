import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


export default function Contact() {
  return (
    <>
      <NavBar />

        <div className="px-12  sm:px-12 sm:pt-32">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Información de contacto
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Dejanos tus dudas o consultas.
          </p>
        </div>
        <div className="mt-6 px-12 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Horarios de atención: 
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Lunes a Viernes (8:30 - 12:30) (14:00 - 18:00)
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Whatsapp:{" "}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                (358) 4240031
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Mail:{" "}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              nico_gag9@hotmail.com
              </dd>
            </div>

          </dl>
        </div>    
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
