function writeCards(names,event){
    let new_arr=[]
    for (let i=0; i < names.length; i++){
        new_arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return new_arr
}

function countDown(num){
    while (num >= 0) {
        console.log(num)
        num--
    }   
}