import Image from "next/image";
import Link from "next/link";

export function Banner(){
  return(
    <section>
      <div className="bg-blue-400 home-banner">
        <div className="container relative mx-auto px-4 pt-14 max-w-5xl flex items-center flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-white text-2xl md:text-4xl sm:mb-12 font-bold">Oi, eu sou o Rodrigo,<br/> desenvolvedor front-end!</h1>
            <span className="to-the-bottom absolute bottom-4 z-10 sm:relative" >
              <p className="mt-4 text-white text-xl md:text-2xl font-medium">Bem-vindo ao meu portfolio.</p>
              <Link href="https://github.com/rodrigonahid" >
                <a target="_blank" className="inline-flex bg-blue-500 hover:shadow-lg focus:bg-blue-600 py-3 px-6 mt-2 md:mt-8 rounded-md transition shadow-md">
                  <svg enableBackground="new 0 0 28 28" height="28" viewBox="0 0 24 24" fill="#FFF" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m.184 10.462c-.779 4.906 1.401 10.823 8.123 13.006.12.022.231.032.335.032.782 0 1.32-.582 1.32-1.3-.097-.523.383-2.642-.92-2.357-2.519.536-2.821-.871-3.205-1.607 1.086 1.394 2.718 1.359 3.949.819.683-.3.326-1.064.65-1.343.496-.426.244-1.243-.407-1.314-2.314-.255-4.457-1.001-4.457-4.702 0-2.168 1.505-2.362 1.09-3.269-.015-.033-.333-.754-.045-1.849 1.419.262 2.072 1.28 2.753 1.097 1.687-.46 3.544-.46 5.23 0 .704.189 1.207-.801 2.738-1.103.441 1.654-.473 2.058.103 2.677.632.68.953 1.503.953 2.447 0 5.564-4.717 3.957-5.101 5.22-.088.288.005.599.235.792.61.513.53 1.83.465 2.889-.067 1.098-.125 2.045.482 2.579.214.19.595.393 1.284.253 6.634-2.131 8.83-8.022 8.063-12.917-2.096-13.368-21.526-13.352-23.638-.05zm8.27 10.978.004.505c-.523-.181-1.015-.39-1.475-.623.425.109.913.156 1.471.118zm.37-3.7c-.005.026-.01.053-.015.08-.853.252-1.509.001-1.957-.752 0-.001 0-.001-.001-.002.68.364 1.381.56 1.973.674zm3.176-15.74c11.833 0 14.502 16.267 3.469 19.941-.038-.297-.003-.857.021-1.252.058-.951.126-2.059-.213-2.985 5.088-1.059 5.513-6.646 3.554-9.135.243-.952.145-3.189-.729-3.463-.206-.065-1.305-.304-3.437 1.037-1.741-.416-3.62-.417-5.361 0-1.064-.667-3.462-1.752-3.922-.6-.534 1.342-.407 2.427-.248 3.03-1.739 2.204-1.218 5.894.534 7.626-.993-.475-2.361-.637-2.656.314-.323 1.037.912.911 1.679 2.804.073.236.208.513.415.788-6.811-5.565-3.525-18.105 6.894-18.105z"></path></svg>
                  <span className="text-white text-lg font-medium ml-4">Follow me!</span>
                </a>
              </Link>
            </span>
          </div>
          <div className="flex-1 flex justify-center mt-2 max-h-96  md:max-h-full md:max-w-full mb-36 md:m-0">
            <span className="max-w-full w-48 h-40 md:w-96 md:h-96 ">
              <Image src={"/avatar.png"} width={400} height={400} alt="avatar" objectFit="contain" layout="responsive" />
            </span>
          </div>
        </div>
      </div>
      <svg className="relative -top-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#60A5FA" fillOpacity="1" d="M0,64L26.7,58.7C53.3,53,107,43,160,37.3C213.3,32,267,32,320,53.3C373.3,75,427,117,480,117.3C533.3,117,587,75,640,53.3C693.3,32,747,32,800,42.7C853.3,53,907,75,960,69.3C1013.3,64,1067,32,1120,37.3C1173.3,43,1227,85,1280,106.7C1333.3,128,1387,128,1413,128L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
      </svg>
    </section>
  ) 
}