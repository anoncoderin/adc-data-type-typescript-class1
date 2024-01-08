type Color = "red" | "green" | "blue"

type Coordinates = [number, number];

interface Price {
    beforeTax: number,
    afterTax: number
}

interface Person {
    firstName: string,
    lastName?: string
}