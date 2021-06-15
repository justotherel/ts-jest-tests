export const RLE = (str: string): string => {
    let res: string = ''
    let dict = new Map()

    if (!str.match('[A-Z]'))
        throw new RangeError(
            'Invalid string format, string sould contain only capital latin letters'
        )

    for (const c of str) {
        if (dict.has(c)) dict.set(c, dict.get(c) + 1)
        else dict.set(c, 1)
    }

    function returnMapElement(value: number, key: string): void {
        res += `${key}${value > 1 ? value : ''}`
    }

    dict.forEach(returnMapElement)

    return res
}

