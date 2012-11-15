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
  
 