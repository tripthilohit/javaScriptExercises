// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// s = '12:01:00PM'
// Return '12:01:00'.

// s = '12:01:00AM'
// Return '00:01:00'.

function millitaryClockConversion(time){
  
    var arr = time.split(':')
      
    if(arr[0] === '12' && time.includes('AM'))
      arr[0] = '00'
      if(time.includes('PM')){
        
        if(arr[0] != '12'){
         var num = parseInt(arr[0])
        num = num + 12
        arr[0] = num
         }}
      
      var output = arr.join(':').slice(0, -2 )
      return output
    }
    
    console.log(millitaryClockConversion('12:05:45AM'))