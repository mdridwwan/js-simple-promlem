function largest(buissnes, minister, army) {
    if (buissnes > minister && buissnes > army) {
        return buissnes;
    } else if (minister > buissnes && minister > army) {
        return minister;
    } else {
        return army;
    }
}

function larges(buissnes, minister, army) {
    switch (true) {
        case (buissnes > minister && buissnes > army):
            console.log('Sobar che Bese Taka Ace Buisness', buissnes);
            break;
        case (minister > buissnes && minister > army):
            console.log('Sobar che Bese Taka Ace Minister', minister);
            break;
        case (army > buissnes && minister < army):
            console.log('Sobar che Bese Taka Ace Army', army);
            break;
    }
}

let buissnes = 100;
let minister = 800;
let army = 70000;
const mat = larges(buissnes, minister, army);
const max = largest(buissnes, minister, army);
// const max = Math.max(buissnes, minister, army);
console.log('largset number: ', max);