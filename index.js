// code your solution here
function saturdayFun(activity = "swim"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}


function wrapAdjective(something ="*"){
    return function(name = "special"){
        return `You are ${something}${name}${something}!`;
    }
}
