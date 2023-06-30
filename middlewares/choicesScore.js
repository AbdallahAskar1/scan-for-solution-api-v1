const {PythonShell}= require('python-shell')



async function choiceScore(choice,ans) {
    
try {
    const score= await PythonShell.run('./python/cosine-sim.py',{args:[choice,ans]})
    return score;
} catch (error) {
    console.log(error)
}
}
// choiceScore("the lazy dog is jumped over by the quick brown fox","he lazy dog is jumped brown fox")

module.exports=choiceScore;