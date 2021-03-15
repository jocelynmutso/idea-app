import React from 'react';
import * as Ideas from './core'


function App() {
  return (
    <div>
     <Ideas.Asylum.Provider creds="my creds for asylum controller"><Ideas.Asylum.Controller /></Ideas.Asylum.Provider>
     <Ideas.Account.Provider creds="creds for account controller"><Ideas.Account.Controller /></Ideas.Account.Provider>
     
     <Ideas.Policy.Provider creds="my creds for policy controller"><Ideas.Policy.Controller /></Ideas.Policy.Provider>
     <Ideas.BankAccountController />
     <Ideas.ShiftController />
    </div>
  );
}

export default App;
