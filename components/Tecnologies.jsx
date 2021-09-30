export function Tecnologies() {
  
  return(
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="relative text-4xl font-bold mb-4">Minhas tecnologias</h2>
        <span className="w-48 h-1 bg-blue-600 rounded absolute -bottom-2"></span>
      </div>
      <div className="container mx-auto py-16">
        <div className="-m-4 flex flex-wrap justify-center">
          <TecnologyBlock />
          <TecnologyBlock />
          <TecnologyBlock />
          <TecnologyBlock />
          <TecnologyBlock />
        </div>
      </div>
    </div>
  )
}

function TecnologyBlock(){

  return(
    <div className="p-8 m-4 w-80 h-80 shadow hover:shadow-lg transition inline-flex flex-col justify-center items-center bg-gray-50 rounded-md">
      <span className="block h-16 w-16">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
      </span>
      <h3 className="mt-8 text-2xl font-medium">Tecnologia</h3>
    </div>
  )
}