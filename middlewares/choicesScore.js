const stringSimilarity = require('string-similarity');
 
function choiceScore(choice,ans) {
 
    const similarity =  stringSimilarity.compareTwoStrings(choice, ans);
    return similarity
}
// console.log(choiceScore("JavaScript","JavaScript"))
module.exports=choiceScore;