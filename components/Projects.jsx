import React from "react";
import Image from "next/image";
import Link from "next/link";
import ExternalImg from "/public/external.svg";

export function Projects({data}){

  return(
    <section>
      <div className="flex flex-col items-center">
        <h2 className="relative text-2xl md:text-4xl font-bold mb-4">Side Projects</h2>
        <span className="w-32 h-1 bg-blue-500 rounded -bottom-2"></span>
      </div>
      <div className="container mt-8 md:mx-auto">
        <ul>
          {data.map((item, index)=>{
            return <ProjectItem key={index} repo={item.repo} content={item.description} link={item.link} language={item.language} languageColor={item.languageColor} />
          })}
        </ul>
      </div>
    </section>
  )
}

function ProjectItem({content, repo, link, language, languageColor}){

  return(
    <li className="shadow m-2 rounded-md bg-gray-50 md:flex md:my-8">
      <div className="flex-1 flex flex-col justify-between p-6">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            {repo}
          </h3>
          <p className="text-lg font-semibold text-gray-600">
            {content}
          </p>
        </div>
        <div>
          <span style={{backgroundColor: languageColor}} className="inline-flex hover:shadow-lg mt-4 py-2 px-4 rounded-full transition shadow-md text-sm text-gray-700 font-medium">
            {language}
          </span>
          <span>

          </span>
        </div>
      </div>
      <div className="flex-1 p-6">
        <Link href={link}>
          <a target="_blank">
            <div className="relative">
              <Image className="absolute rounded-md hover:bg-gray-400" src={`https://raw.githubusercontent.com/rodrigonahid/${repo}/master/thumbnail.png`} width={1920} height={1080} objectFit="cover" />
              <span style={{height: '98%'}} className="opacity-0 transition rounded-md bg-gray-800 hover:opacity-100 hover:bg-opacity-90 absolute top-0 left-0 w-full z-10 flex items-center justify-center">
                <Image src={ExternalImg} height={144} width={144} />
              </span>
            </div>
          </a>
        </Link>
      </div>
    </li>
  )
}