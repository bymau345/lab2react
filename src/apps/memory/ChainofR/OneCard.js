import LogicGame from "./LogicGame";

class OneCard extends LogicGame {
    process (twice, item, stateBoard, setStateBoard) {
        if (twice.length == 0) {
            twice.push(item);
        } else {
            this.next.proccess(twice, item,stateBoard, setStateBoard);
        }
    }
}

export default OneCard;