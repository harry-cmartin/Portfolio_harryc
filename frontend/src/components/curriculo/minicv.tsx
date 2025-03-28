import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl p-20  px-0   ">
			<div className="relative min-w-72 h-64 xl:self-end flex justify-center items-center ">
				<Image src="/new.png" alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-7 self-center py-6 items-center  md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                            bg-gradient-to-r from-green-500 via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
					>
						Harryson C Martins
					</span>
					<span>Engenheiro de Software / Dev</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
				Olá, sou Harryson Campos, um engenheiro de software com experiência diversificada em habilidades e tecnologias como Java, SQL, SCRUM, XP, Python, modelagem de dados, testes automatizados, entre outras. Atualmente, resido em Brasília e estou concluindo meu bacharelado em Engenharia de Software na Universidade de Brasília.
				</p>
			</div>
		</div>
	)
}