var setStateResults = function(state){
  if(politicianA.electionResults[state] > politicianB.electionResults[state]){
    theStates[state].winner = politicianA;
  }
  else if (politicianB.electionResults[state] > politicianA.electionResults[state])
  {
      theStates[state].winner = politicianB;
  }
  var stateWinner =  theStates[state].winner;
  if(stateWinner != null){
    theStates[state].rgbColor = stateWinner.partyColor;
  }
  else{
    theStates[state].rgbColor =[64, 64, 64];
  }

  
  stateName.innerText = theStates[state].nameFull;
  stateAbb.innerText = theStates[state].nameAbbrev;
  name1.innerText = politicianA.name;
  results1.innerText = politicianA.electionResults[state];
  name2.innerText = politicianB.name;
  results2.innerText = politicianB.electionResults[state];
  if(politicianA.electionResults[state] == politicianB.electionResults[state]){
    winnerName.innerText = "Tie";
  }
  else{
      winnerName.innerText = stateWinner.name;
  }
};
var createPolitician = function(name, partyColor){
  var politician = {};
    politician.name = name;
    politician.electionResults = null
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
  
     politician.addResults = function(){
       this.totalVotes = 0;
       for(var i = 0; i < this.electionResults.length; i++){
         this.totalVotes = this.totalVotes + this.electionResults[i];
         //console.log(this.totalVotes);
       }
     };
  
    return politician;
};

var politicianA = createPolitician("Hulxey", [132, 17, 11]);
var politicianB = createPolitician("Orwell", [45, 45, 179]);

// console.log(politicianA.name);
// console.log(politicianB.name);

politicianA.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
politicianB.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

politicianA.electionResults[9]= 1;
politicianA.electionResults[4]= 17;
politicianA.electionResults[43]= 11;

politicianB.electionResults[9]= 28;
politicianB.electionResults[4]= 38;
politicianB.electionResults[43]= 27;

politicianA.addResults();
console.log(politicianA.totalVotes);

politicianB.addResults();
console.log(politicianB.totalVotes);

var winner;

if(politicianA.totalVotes > politicianB.totalVotes){
  winner = politicianA.name;
}
else{
  winner = politicianB.name;
}

console.log(winner);

console.log(politicianB.partyColor);


var staticTable = document.getElementById("countryResults");
staticTable.children[0].children[0].children[0].innerText = politicianA.name;
staticTable.children[0].children[0].children[1].innerText = politicianA.totalVotes;
staticTable.children[0].children[0].children[2].innerText = politicianB.name;
staticTable.children[0].children[0].children[3].innerText = politicianB.totalVotes;
staticTable.children[0].children[0].children[4].innerText = "Winner";
staticTable.children[0].children[0].children[5].innerText = winner;

var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0].children[0];
var tbody = stateInfoTable.children[1];
var stateName = header.children[0];
var stateAbb = header.children[1];
var name1 = tbody.children[0].children[0];
var results1 = tbody.children[0].children[1];
var name2 = tbody.children[1].children[0];
var results2 = tbody.children[1].children[1];
var winner = tbody.children[2].children[0];
var winnerName = tbody.children[2].children[1];








