export const API_URL4 = 'https://api.themoviedb.org/4'
export const API_URL3 = 'https://api.themoviedb.org/3'
const api_key = process.env.REACT_APP_API_KEY

export function LIST_GET() {
    const id_list = 7104242
    return {
        url: API_URL4 + `/list/${id_list}?api_key=${api_key}&language=pt-BR`,
    }
}

export function CONFIG_GET() {
    return {
        url: API_URL3 + `/configuration?api_key=${api_key}`
    }
}
