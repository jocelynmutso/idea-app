import React from 'react';
import * as Ideas from './core'


function App() {
  return (
    <div>
     <Ideas.AsylumController />
     <Ideas.AccountController />
     <Ideas.PolicyController />
     <Ideas.BankAccountController />
     <Ideas.ShiftController />
    </div>
  );
}

export default App;
