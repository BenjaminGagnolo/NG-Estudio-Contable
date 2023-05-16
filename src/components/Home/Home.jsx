
import  NavBar from "../NavBar/NavBar";
const features = [
  { name: 'Impositivos', description: 'Brindar asesoramiento para cumplir obligaciones fiscales, presentar declaraciones de impuestos y aprovechar las oportunidades de planificación fiscal para minimizar la carga tributaria.' },
  { name: 'Contables', description: 'Mantener registros financieros precisos, registrar transacciones, conciliar cuentas y preparar estados financieros para evaluar la salud financiera de una empresa.' },
  { name: 'Liquidacion de sueldos', description: 'Calcular los salarios, deducciones, retenciones de impuestos y otros beneficios para los empleados, garantizando el cumplimiento de las leyes laborales y fiscales.' },
  { name: 'Societarios', description: 'Creación, organización y mantenimiento de entidades legales, como sociedades, asesorando sobre los aspectos contables y legales relacionados con la estructura societaria.' },
  { name: 'Asesoramiento fiscal', description: 'Asesoramiento especializado sobre cuestiones fiscales, interpretación de leyes tributarias, planificación fiscal estratégica y optimización de beneficios y deducciones fiscales.' },
  { name: 'Planificacion financiera', description: 'Establecer metas financieras, elaborar presupuestos, realizar análisis de flujo de efectivo y desarrollar estrategias para alcanzar la estabilidad y el crecimiento financiero a largo plazo.' },
  { name: 'Gestion de nomina', description: 'Administrar y procesar la nómina de una empresa, calcular los salarios, retener y pagar los impuestos correspondientes, mantener los registros de los empleados y cumplir con las obligaciones legales y reglamentarias.' },
  { name: 'Asesoramiento de finanzas empresariales', description: 'Asesoramiento en áreas como la inversión de capital, financiamiento de proyectos, adquisiciones, fusiones y valoración de empresas, evaluando los riesgos financieros y proporcionando recomendaciones para optimizar la gestión financiera.' },
]

function Home() {
  return (
    <>
    <NavBar />
    <div className="mx-auto max-w-2xl py-26 sm:py-21 lg:py-39 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">     
              Bienvenidos a estudio contable Gagnolo
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Somos un Estudio dedicado a brindar asesoramiento integral y personalizado a nuestros clientes en materia impositiva, contable, laboral y societaria.
            Ademas brindamos servicios de outsourcing, consultoría, asesoramiento a empleados en relación de dependencia y servicios para consorcios
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            </div>
          </div>
    </div>
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros servicios</h2>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi tempore impedit itaque, velit molestias nihil quod veniam facilis unde aspernatur, iure, incidunt aperiam error sint suscipit fuga dignissimos asperiores.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:gap-1 lg:gap-1" >
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          /> 
        </div>
      </div>
    </div>
  <footer>
        <div className="mx-auto max-w py-26 sm:py-22 lg:py-39 bg-gray-200">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Footer Footer Footer Footer 
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Info contact, logo, ....
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            </div>
          </div>
    </div>
  </footer>

    </>
  )
}


export default Home;