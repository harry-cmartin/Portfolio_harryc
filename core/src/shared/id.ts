export default class Id {
    static gerar(): string {
        const p1 = Math.random().toString(36).substring(2)
        const p2 = Math.random().toString(36).substring(2)
        const p3 = Math.random().toString(36).substring(2)

        return `${p1}-${p2}-${p3}`
    }
}

console.log(Id.gerar())
console.log(Id.gerar())
