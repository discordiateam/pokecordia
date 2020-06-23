const typeMap = new Map<string, string>();
typeMap.set('normal', '#969696');
typeMap.set('fire', '#ff7400');
typeMap.set('water', '#05cbff');
typeMap.set('electric', '#fff005');
typeMap.set('grass', '#79ff05');
typeMap.set('flying', '#f7f7f7')
typeMap.set('ghost', '#5d05ff');
typeMap.set('fighting', '#f29e43');
typeMap.set('poison', '#ad03ff');
typeMap.set('ground', '#745126');
typeMap.set('rock', '#655a48');
typeMap.set('bug', '#12480e');
typeMap.set('steel', '#346255');
typeMap.set('psychic', '#ba2da5');
typeMap.set('dragon', '#299186');
typeMap.set('ice', '#16f1e2');
typeMap.set('dark', '#38303c');
typeMap.set('fairy', '#ff0080');

export default function mapColours(pokemonType: string) {
    const res = typeMap.get(pokemonType);

    return res === undefined ? '#969696' : res;
}