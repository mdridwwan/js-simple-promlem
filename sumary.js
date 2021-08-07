const selected = [];
for (var i = 0; i < 5; i++) {
    const output = Math.random() * 100;
    const picked = Math.ceil(output);
    if (selected.indexOf(picked) == -1) {
        selected.push(picked);
    } else {
        // console.log(selected, picked)
    }
}
console.log(selected);