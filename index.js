function main(){
    let count = parseInt($("input").val());
    let characters = `1-=!@#$2%^&*()3_+qwert4yuiop[]\\{}7|asdfgh6jkl;'":z8xcvbnm,./9<>?QWERTYUI0OP[]\\{}|ASDFGHJKL;'":ZXCVBNM,./<>?~\``;
    let array = characters.split('');
    let length = array.length;
    let present = new Array(length);
    let result = new Array(count);
    if(count > length){
        throw new RangeError("Input out of limits");
    }

    while(count !== 0){
        let n = Math.floor(Math.random() * length);
        if(n in present){
            result[n] = array[present[n]];
        }
        else{
            result[n] = array[n];
        }

        --length;
        if(length in present){
            present[n] = present[length];
        }
        else{
            present[n] = array[length];
        }
        count--;
    }
    let value = result.join('');
    $(".screen").html(`<h3>${value}</h3>`);
}