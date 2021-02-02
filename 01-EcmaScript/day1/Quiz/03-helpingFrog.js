function helpTheFrog(f1stPost,finalPost,frogJump) {
    let jumpValue = f1stPost
    let counter = 0
    do{
        jumpValue += frogJump
        counter++
    }while(jumpValue<finalPost)

    return counter
}

console.log(helpTheFrog(10,85,30));