let baseBoard = [[[[5, 3, -1], [6, -1, -1], [-1, 9, 8]], [[-1, 7, -1], [1, 9, 5], [-1, -1, -1]], [[-1, -1, -1], [-1, -1, -1], [-1, 6, -1]]], [[[8, -1, -1], [4, -1, -1], [7, -1, -1]], [[-1, 6, -1], [8, -1, 3], [-1, 2, -1]], [[-1, -1, 3], [-1, -1, 1], [-1, -1, 6]]], [[[-1, 6, -1], [-1, -1, -1], [-1, -1, -1]], [[-1, -1, -1], [4, 1, 9], [-1, 8, -1]], [[2, 8, -1], [-1, -1, 5], [-1, 7, 9]]]];
let board = [[[[5, 3, -1], [6, -1, -1], [-1, 9, 8]], [[-1, 7, -1], [1, 9, 5], [-1, -1, -1]], [[-1, -1, -1], [-1, -1, -1], [-1, 6, -1]]], [[[8, -1, -1], [4, -1, -1], [7, -1, -1]], [[-1, 6, -1], [8, -1, 3], [-1, 2, -1]], [[-1, -1, 3], [-1, -1, 1], [-1, -1, 6]]], [[[-1, 6, -1], [-1, -1, -1], [-1, -1, -1]], [[-1, -1, -1], [4, 1, 9], [-1, 8, -1]], [[2, 8, -1], [-1, -1, 5], [-1, 7, 9]]]];

let values = [];
console.log("Debug 1")
function sectionCheck(){
    console.log("Section check ran")
    for(let mrf = 0; mrf < 3; mrf ++){
        for(let sf = 0; sf < 3; sf ++){
            for(let srf = 0; srf < 3; srf ++){
                for(let valf = 0; valf < 3; valf ++){
                    values.push(board[mrf][sf][srf][valf]);
                }
            }
            for(let i = 1; i < 10; i++){
                if(values.count(i) > 1){
                    values.clear();
                    return(false);
                }
            }
            values.clear()
        }
    }
    return(true);
}
function verticalCheck(){
    for(let sf = 0; sf < 3; sf ++){
        for(let valf = 0; valf < 3; valf ++){
            for(let mrf = 0; mrf < 3; mrf ++){
                for(let srf = 0; srf < 3; srf ++){
                    values.push(board[mrf][sf][srf][valf]);
                }
            }
            for(let i = 1; i < 10; i++){
                if (values.count(i) > 1){
                    values.clear();
                    return(false);
                }
            }
            values.clear();
        }
    }
    return(true);
}
function horizontalCheck(){
    for(let mrf = 0; mrf < 3; mrf ++){
        for(let srf = 0; srf < 3; srf ++){
            for(let sf = 0; sf < 3; sf ++){
                for(let valf = 0; valf < 3; valf ++){
                    values.push(board[mrf][sf][srf][valf]);
                }
            }
            for(let i = 1; i < 10; i++){
                if(values.count(i) > 1){
                    values.clear();
                    return(false);
                }
            }
            values.clear();
        }
    }
    return(true);
}
function check(){
    console.log("Ran function check");
    if(verticalCheck() && horizontalCheck() && sectionCheck()){
        return(true);
    }
    return(false);
}
check();

function updateBoard(){
    for(let mrf = 0; mrf < 3; mrf ++){
        for(let sf = 0; sf < 3; sf ++){
            for(let srf = 0; srf < 3; srf ++){
                for(let valf = 0; valf < 3; valf ++){
                    document.getElementById(String(mrf) + "," + String(sf) + "," + String(srf) + "," + String(valf)).innerText = board[mrf][sf][srf][valf];
                }
            }
        }
    }
}


let curVal = 1;
let mr = 0;
let sr = 0;
let s = 0;
let val = 0;
let boardValid = true;
let increase = true;
while(mr < 3){
    while(sr < 3){
        while(s < 3){
            while(val < 3){
                console.log("Loop");
                if(board[mr][s][sr][val] != baseBoard[mr][s][sr][val]) {
                    console.log("Choice 1");
                    while (true) {
                        if (board[mr][s][sr][val] < 9) {
                            curVal = board[mr][s][sr][val] + 1;
                            board[mr][s][sr][val] = curVal;
                            boardValid = check();
                            if (!boardValid && curVal <= 8) {
                                curVal++;
                            }
                            else if (!boardValid && curVal == 9) {
                                increase = false;
                                board[mr][s][sr][val] = -1
                                if (val != 0){
                                    val--;
                                }
                                else if (s != 0) {
                                    s--;
                                    val = 2;
                                }
                                else if (sr != 0) {
                                    sr--;
                                    s = 2;
                                    val = 2;
                                }
                                else if (mr != 0) {
                                    mr--;
                                    val = 2;
                                    s = 2;
                                    sr = 2;
                                }
                                else {
                                    throw new Error("Not solvable");
                                }
                                break;
                            }
                            else if (true){
                                increase = true;
                                break;
                            }
                            else {
                                increase = false;
                                board[mr][s][sr][val] = -1;
                                if (val != 0){
                                    val--;
                                }
                                else if (s != 0) {
                                    s--;
                                    val = 2;
                                }
                                else if (sr != 0) {
                                    sr--;
                                    s = 2;
                                    val = 2;
                                }
                                else if (mr != 0) {
                                    mr--;
                                    val = 2;
                                    s = 2;
                                    sr = 2;
                                }
                                else {
                                    throw new Error("Not solvable");
                                }
                                break;
                            }
                        }
                    }
                }
                else if(board[mr][s][sr][val] == -1){
                    console.log("Choice 2");
                    while(true){
                        board[mr][s][sr][val] = curVal;
                        boardValid = check;
                        if(!boardValid && curVal <= 8){
                            curVal++;
                        }
                        else if(!boardValid && curVal == 9){
                            increase = false;
                            board[mr][s][sr][val] = -1
                            if(val != 0){
                                val --;
                            }
                            else if(s != 0){
                                s --;
                                val = 2;
                            }
                            else if(sr != 0){
                                sr -= 1;
                                s = 2;
                                val = 2;
                            }
                            else if(mr != 0){
                                mr --;
                                val = 2;
                                s = 2;
                                sr = 2;
                            }
                            else{
                                throw new Error("Not solvable");
                            }
                            break;
                        }
                        else{
                            increase = true;
                            break;
                        }
                    }

                }
                else if(board[mr][s][sr][val] == -1){
                    console.log("Choice 3");
                    while(true){
                        board[mr][s][sr][val] = curVal;
                        boardValid = check();
                        if(!boardValid && curVal <= 8){
                            curVal ++;
                        }
                        else if(!boardValid && curVal == 9){
                            increase = false;
                            board[mr][s][sr][val] = -1;
                            if(val != 0){
                                val --;
                            }
                            else if(s != 0){
                                s--;
                                val = 2;
                            }
                            else if(sr != 0) {
                                sr--;
                                s = 2;
                                val = 2;
                            }
                            else if(mr != 0){
                                mr --;
                                val = 2;
                                s = 2;
                                sr = 2;
                            }
                            else{
                                throw new Error("Not solvable");
                            }
                            break;
                        }
                        else{
                            increase = true;
                            break;
                        }
                    }
                }
                else if(board[mr][s][sr][val] == baseBoard[mr][s][sr][val]){
                    console.log("Choice 4");
                    if(!increase){
                        if(val != 0){
                            val --;
                        }
                        else if(s != 0){
                            s --;
                            val = 2;
                        }
                        else if(sr != 0){
                            sr --;
                            s = 2;
                            val = 2;
                        }
                        else if(mr != 0){
                            mr --;
                            val = 2;
                            s = 2;
                            sr = 2;
                        }
                        else{
                            throw new Error("Not solvable");
                        }
                    }
                }
                curVal = 1;
                if(increase){
                    val++;
                }
            }
            if(increase){
                val = 0;
                s++;
            }
        }
        if(increase){
            s = 0;
            sr++;
        }
    }
    if(increase){
        sr = 0;
        mr++;
    }
}
updateBoard();
