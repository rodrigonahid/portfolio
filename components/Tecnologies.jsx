export function Tecnologies() {
  const List = {
    0: {
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      name: 'Javascript'
    },
    1:{
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      name: 'Typescript'
    },
    2:{
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      name: 'React'
    },
    3: {
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      name: 'Express'
    },
    4: {
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      name: 'Sass'
    },
    5: {
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
      name: 'Wordpress'
    },
    6:{
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      name: 'Firebase'
    },
    7:{
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg',
      name: 'Yarn'
    }
  }

  return(
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="relative text-2xl md:text-4xl font-bold mb-4">Minhas tecnologias</h2>
        <span className="w-32 h-1 bg-blue-500 rounded -bottom-2"></span>
      </div>
      <div className="container mx-auto py-16">
        <div className="flex overflow-x-auto md:flex-wrap md:justify-center md:max-w-4xl md:m-auto">
          {Object.values(List).map((element, index) => {
            return (<TecnologyBlock key={index} image={element.img} name={element.name} />)
          })}
        </div>
      </div>
    </div>
  )
}

function TecnologyBlock({ image, name }){
  const BlockStyle = {
    width: '16rem',
    height: '16rem',
    minWidth: '16rem'
  }

  return(
    <div style={BlockStyle} className="p-8 m-4 shadow hover:shadow-lg transition inline-flex flex-col justify-center items-center bg-gray-50 rounded-md">
      <span className="block h-16 w-16">
        <img src={image} alt={name} />
      </span>
      <h3 className="mt-8 text-2xl font-medium">{name}</h3>
    </div>
  )
}