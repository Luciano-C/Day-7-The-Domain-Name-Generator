let pronouns = ["the","our", "your", "my"];
let adjectives = ["great", "big", "lucky", "happy"];
let nouns = ["jogger","racoon", "sloth", "bollo"];
let extensions = ["com", "cl", "net", "org"];





for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
        for (let noun of nouns) {
            // Domain hacks, usa las 2 últimas letras como extensión.
            console.log(`${pronoun}${adjective}${noun.slice(0,-2)}.${noun.slice(-2)}`);
            // Dominios completos
            for (let extension of extensions) {
                console.log(`${pronoun}${adjective}${noun}.${extension}`)
            }
        }
    }
}