import { Projeto } from "@core";



export interface ProjetoProps {
    titulo: string
    lista: Projeto[]
}


export default function Projetos(props: ProjetoProps) {


    return(

        <div>

            <h3> {props.titulo}</h3>

        </div>


    )

}
