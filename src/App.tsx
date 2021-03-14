import React from 'react';
import * as Ideas from './core'


function App() {
  return (
    <div>
     <Ideas.Asylum.Provider creds="my creds for asylum controller"><Ideas.Asylum.Controller /></Ideas.Asylum.Provider>
     
     <Ideas.AccountController />
     <Ideas.PolicyController />
     <Ideas.BankAccountController />
     <Ideas.ShiftController />
    </div>
  );
}

export default App;
