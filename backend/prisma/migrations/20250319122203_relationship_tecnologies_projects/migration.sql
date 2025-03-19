-- CreateTable
CREATE TABLE "_ProjetoTotecnologias" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjetoTotecnologias_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjetoTotecnologias_B_index" ON "_ProjetoTotecnologias"("B");

-- AddForeignKey
ALTER TABLE "_ProjetoTotecnologias" ADD CONSTRAINT "_ProjetoTotecnologias_A_fkey" FOREIGN KEY ("A") REFERENCES "projetos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetoTotecnologias" ADD CONSTRAINT "_ProjetoTotecnologias_B_fkey" FOREIGN KEY ("B") REFERENCES "tecnologias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
