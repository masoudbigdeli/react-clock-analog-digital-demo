
export function wordWithSpacesToCamelcaseConvertor(input: string): string {
    return input
        .split(' ') 
        .map((word, index) => {
            if (index === 0) {
                return word 
            }
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join('') 
}

