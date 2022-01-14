import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Me({data}){
  
  return(
    <>
      <svg className="relative -bottom-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#60a5fa" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="relative flex flex-col items-center bg-blue-400 py-8">
        <h2 className="text-2xl md:text-4xl text-white font-bold mb-4">Sobre mim</h2>
        <span className="w-32 h-1 bg-white rounded -bottom-2"></span>
        <section className="max-w-4xl mx-4 bg-gray-50 my-8 p-6 rounded-md flex flex-col md:mx-auto md:flex-row shadow-2xl">
          <div className="flex-1 pr-8 flex flex-col justify-center">
            <h3 className="text-4xl text-gray-700 font-semibold mb-4">Rodrigo Nahid</h3>
            <p className="text-lg font-medium">
              Desenvolvedor web há alguns anos. Venho desenvolvendo aplicações web desde então. Me apaixonei pelo front-end quando conheci o CSS, pintar telas é meu hobbie.
              Nesse site mostro um pouco do meu trabalho. <br/>
              Essa página está desatualizada, uma nova versão está em construção: <br/>
              <Link href="https://portfolio-v2-vercel.vercel.app/" target="_blank">
                <a>Clique aqui para acessar!</a>
              </Link>
            </p>
            <div className="mt-8">
              <Link href="https://wa.me/5524981125127">
                <a target="_blank" className="inline bg-blue-500 text-white text-lg px-6 py-2 rounded font-bold shadow hover:shadow-lg transition">
                  Fale comigo!
                </a>
              </Link>
            </div>
          </div>
          <div className="flex-none flex items-center justify-center rounded-md mt-8 md:shadow-md md:m-0">
            <Image className="rounded-md" src={data.avatar_url} alt={data.login} height={300} width={300} />
          </div>
        </section>
      </div>
      <svg className="relative -top-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#60a5fa" fillOpacity="1" d="M0,32L48,58.7C96,85,192,139,288,133.3C384,128,480,64,576,58.7C672,53,768,107,864,117.3C960,128,1056,96,1152,112C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </>
  )
}
