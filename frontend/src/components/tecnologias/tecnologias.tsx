import { Tecnologia } from "@core"
import Image from 'next/image'

export interface TecnologiasProps {
    valores: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasProps) {
    return props.valores ? (
        <div className="flex justify-center gap-4 flex-wrap w-4/5">
            {props.valores.map((tecnologia) => (
                <div key={tecnologia.id} className="flex flex-col items-center gap-1">   
                    <span className="relative h-11 w-11 sm:h-16 sm:w-16 rounded-xl overflow-hidden">
                        <Image src = {tecnologia.imagem} 
                        alt={tecnologia.nome} 
                        fill className="conteudo-objeto"/>

                    </span>
                    <span className="text-[10px] text-zinc-50"> {tecnologia.nome}</span>
                </div>
            ))}
            
        </div>
    ) : null
}