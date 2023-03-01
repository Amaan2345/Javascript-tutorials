
function printTable(a) {
    let table;
    for(let i= 1; i < 11; i++){
        let number = a;
        table = a * i;
        console.log(`${a} x ${i} =`, table);
    }
    return table;
}

printTable(16)
