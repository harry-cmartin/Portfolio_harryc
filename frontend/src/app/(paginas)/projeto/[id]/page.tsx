import { obterProjeto } from "@/functions/projetos"
import Cabecalho from "@/components/shared/Cabecalho"
import CarrosselImagens from "@/components/shared/CarroselImagens"
import Container from "@/components/shared/Container"
import Tecnologias from "@/components/tecnologias/tecnologias"
import { obterReadme } from "@/functions/github"
import ConteudoMD from "@/components/shared/ConteudoMD"


// export const revalidate = 3600

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	const projeto = await obterProjeto(id)
   

	if (!projeto) return null
    const readme = await obterReadme(projeto.repositorio)

	return (
		<div className="bg-black">
			<Cabecalho />
			<Container classnames="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
				<CarrosselImagens imagens={projeto.imagens.slice(1)} />
				<Tecnologias valores ={projeto.tecnologias} tamanhoMenor />
                <ConteudoMD markdown={readme} />
			</Container>
		</div>
	)
}