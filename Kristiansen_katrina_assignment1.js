var Library = function() {
  var changeSeperator = function( string, seperator1, seperator2 ){
    
    return string.replace( seperator1, seperator2, "g" );
   },
   
  cellPhoneNo = function ( string ) {
      var repn = new RegExp( '^[0-9]{3}[\-][0-9]{3}[\-][0-9]{4}$' );
      return repn.test( string );
  },
  gothEmail = function( string ) {
      var gothicEmail = new RegExp( '^[A-z0-9\.\_\-]{3,}@[A-z\.\-]+(\.[a-z]{2,3})+$' );
      return gothicEmail.test( string );
  },
  
  vampWeb = function( string ) {
    var vampUrl = new RegExp( "^[(http|https):\/\/]?(www\.)?[a-z0-9\.\-\/]+(\.[a-z]{2,3})+");
    return vampUrl.test( string );
  },
  
  caseTitle = function( string ) {
    var letters = string.split( " " ); 
    for( var i = 0; i < letters.length; i++ ) {
      var cs = letters[ i ].charAt(0); 
      cs = cs.toUpperCase(); 
      letters[ i ] = cs; 
    };
    return letters.join( " " );
  },
  
  listedKey = function( list, sortKey ) {
    key = sortKey;
    return list.sort(listedKeyRecall);
  },
  listedKeyRecall = function( thing1, thing2 ) {
    if( thing1[ key ] < thing2[ key ]) { 
      return -1; 
    }
    else if( thing1[ key ] === thing2[ key ]) { 
      return 0; 
    };
    return 1; 
  }, // missing data types assignment project 2
  
  formatDecimal = function( string, precision ) {
    if( isNaN( string )) {
      return "Error: " + string + " is not a number.";
    }
    return parseFloat( string ).toFixed( precision );
  }, // boolean output assignment project 1
  
  matchThatFuzz = function( foundation, test, percentage ) {
var high = foundation + ( foundation * percentage ), 
low = foundation - ( foundation * percentage ); 
if( test > foundation && high > test ) {
return "above"; 
}
else if( test < foundation && low < test ) {
return "below"; 
};
return "out of range"; 
}, // encapsulation assignment project 3

anArray = function( list ) {
var sum = 0; 
for( var i = 0; i < list.length; i++ ) { 
if( typeof( list[ i ]) === typeof( sum )) { 
sum += list[ i ]; 
};

};
return sum;
}, // make up boolean logic assignment project 2

christmasToBirthday = function( dom, dom1 ) {
var miliSeconds, seconds, mins, hours, days;
dom = dom.getTime(); 
dom1 = dom1.getTime();
miliSeconds = dom - dom1;
seconds = miliSeconds / 1000; 
mins = seconds / 60; 
days = hours / 24; 

return [ Math.floor( hours ), Math.floor( days )];
}, // make up string variable assignment project 2

smallToLarge = function( list, num ) {
var lessThanToGreat;
for( var i = 0; i < list.length; i++ ){
if( list[ i ] > num && (list[ i ] < lessThanToGreat || lessThanToGreat === undefined )) { 
lessThanToGreat = list[ i ];
};
};
return lessThanToGreat; // make up number variable assignment project 2
}


return {

"changeSeperator": changeSeperator,
"cellPhoneNo": cellPhoneNo,
"gothEmail" : gothEmail,
"vampWeb" : vampWeb,
"caseTitle": caseTitle,
"listedKey": listedKey,
"formatDecimal": formatDecimal,
"matchThatFuzz": matchThatFuzz,
"anArray": anArray,
"christmasToBirthday": christmasToBirthday,
"smallToLarge": smallToLarge

};
},

lib = new Library(),
change = {
"string": "Happy Thanksgiving Mr.Lewis",
"seperator": ", ",
"joiner": " "

};

cellularPhone = { "string": "920-539-2914" },
theGothEmail = {"string" : "gothichuskykatrina@hotmail.com"},
vampFreak = { "string": "http://www.vampirefreaks.com" },
caseSens = { "string": "marilyn manson is hot and my hero!!!" },
keyedList = { "list": [ { "T": 30 }, { "T": 35 }, { "T": 100} ], "key": "T" },
deciForm = { "string": "4151983.81403", "precision": 15 },
fuzzyPerc = { "foundation": 29, "test": 35.5, "range": 1.99 },
arrayList = { "list": [ 20, "1", 40,60, "f", 80,90,100, "thirty", 30, 45, 105 ] },
mmsmhd = { "list": [ new Date( 1912, 04,15 ), new Date(2014,04,15)] };
tinyToHuge = { "list": [ 1, 5, 9, 13, 17, 21, 25, 29 ]},

console.log( change.string + ": " + lib.changeSeperator( change.string, change.seperator, change.joiner ));
console.log( cellularPhone.string + ": " + lib.cellPhoneNo( cellularPhone.string ));
console.log( theGothEmail.string + ": " + lib.gothEmail( theGothEmail.string ));
console.log( vampFreak.string + ": " + lib.vampWeb( vampFreak.string ));
console.log( caseSens.string + ": " + lib.caseTitle( caseSens.string ));
console.log( lib.listedKey( keyedList.list, keyedList.key ));
console.log( deciForm.string + ", " + deciForm.precision + ": " + lib.formatDecimal( deciForm.string, deciForm.precision ));
console.log( "foundation=" + fuzzyPerc.foundation + ", test=" + fuzzyPerc.test + ", range=" + fuzzyPerc.range + ": " +
lib.matchThatFuzz( fuzzyPerc.foundation, fuzzyPerc.test, fuzzyPerc.range ) + " " + fuzzyPerc.foundation + " within " + ((fuzzyPerc.range + "" ).substring(( fuzzyPerc.range + "" ).indexOf( "." ) + 1 ) + "%." ));
console.log( lib.anArray( arrayList.list ));
console.log( "There are " + lib.christmasToBirthday( mmsmhd.list[ 0 ], mmsmhd.list[ 1 ], false).join( " hours, or: " ) + " days total. between " +
mmsmhd.list[ 0 ] + " and " + mmsmhd.list[ 1 ]);
console.log( tinyToHuge.list + ", target=" + tinyToHuge.target + ": " + lib.smallToLarge( tinyToHuge.list, tinyToHuge.target ));


 