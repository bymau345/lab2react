export const createBoard =(card) => {
    if (card % 2 != 0) {
        throw new Error ("Es necesario un numero par de elementos");
    }
    let listBoard=[];
    let count=0;
    for (let i = 0; i < card / 2; i++) {
       let symbols = String.fromCharCode(65 + count);
       let item1 = { 
        backend: "??", 
        fronted: symbols, 
        state: false, 
        done: false,
        key: `card_${i}`,
    };

    let item2 = {...item1 };
    listBoard = [...listBoard, item1, item2];
    count++;
    }
    return listBoard;
};