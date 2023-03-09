import React from 'react'

const LogoInicial = () => {
    return (
        <div className="hidden xl:flex flex-col min-h-screen">
        <a href="" className="-intro-x flex items-center pt-5">                     
            <span className="text-white text-lg ml-3"> GSAN 4.0 </span> 
        </a>
        <div className="my-auto">
            <img alt="Logotipo Consenso" className="-intro-x w-1/2 -mt-16" src="images/consenso-logo.svg"/>
            <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                Consenso Tecnologia     
            </div>                      
        </div>
    </div>
    )
}

export default LogoInicial