export const GETSUM = (str: string): number => {
    let temp: string = str
    let res: number = 0

    temp = temp.replace(/\D/g, '')

    for (const c of temp) res += parseInt(c)

    return res
}
