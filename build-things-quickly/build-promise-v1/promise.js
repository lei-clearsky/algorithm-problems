class PromiseSimple {
  constructor(executionFunc) {
    this.chains = [];
    this.handleError = () => { console.log('err!'); };
    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);
    executionFunc(this.onResolve, this.onReject);
  }

  then(nextFunc) {
    this.chains.push(nextFunc);
    return this;
  }

  catch(errFunc) {
    this.handleError = errFunc;
    return this;
  }

  onResolve(value)  {
    let storedValue = value;

    try {
      this.chains.forEach((nextFunc) => {
        storedValue = nextFunc(storedValue);
      });
    } catch(error) {
      this.chains = [];
      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

fakeApiBackend = () => {
  const user = {
    username: 'treyhuffine',
    favoriteNumber: 42,
    profile: 'https://gitconnected.com/treyhuffine'
  };

  // Introduce a randomizer to simulate the
  // the probability of encountering an error
  if (Math.random() > .05) {
    return { 
      data: user, 
      statusCode: 200,
    };
  } else {
    const error = {
      statusCode: 404,
      message: 'Could not find user',
      error: 'Not Found',
    };
    
    return error;
  }
};

// Assume this is your AJAX library. Almost all newer
// ones return a Promise Object
const makeApiCall = () => {
  return new PromiseSimple((resolve, reject) => {
    setTimeout(() => {
      const apiResponse = fakeApiBackend();

      if (apiResponse.statusCode >= 400) {
        reject(apiResponse);
      } else {
        resolve(apiResponse.data);
      }
    }, 5000);
  });
};

makeApiCall()
  .then((user) => {
    console.log('In the first .then()');
  
    return user;
  })
  .then((user) => {
    console.log(`User ${user.username}'s favorite number is ${user.favoriteNumber}`);
  
    return user;
  })
  .then((user) => {
    console.log('The previous .then() told you the favoriteNumber')
  
    return user.profile;
  })
  .then((profile) => {
    console.log(`The profile URL is ${profile}`);
  })
  .then(() => {
    console.log('This is the last then()');
  })
  .catch((error) => {
    console.log(error.message);
  });
