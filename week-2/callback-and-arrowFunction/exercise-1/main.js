const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }

  const pushPull = function (callback) {
      callback(); 
  }
  
  pushPull(push) 
  pushPull(pull) 