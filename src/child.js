import React, { usecontext } from 'react';

import { TransactionContext } from './transcontext';

function Child() {
    let transactions = useContext(TransactionContext);
    console.log(transactions)
       
        
    

    
  return (
    <div className='Container'>
      <h1 className='text-centre'>Expense Tracker App by jAWERIA</h1>
      <h3> Your Balance < br />$150.00 </h3>

      <div className='income-and-expense'>

      
            <h3> Your income < br />$230.00 </h3>
            <h3> Your expense < br />$120.00 </h3>
      </div>
            <h3>HISTORY</h3>
            <hr />

            <ul classname='transaction-list'>
                {transactions.map((transObj, ind)=>{
                    return(<li>
                        <span>
                        {transObj.desc}
                        </span>
                        <span>{transObj.amount}</span>
                    </li>
        )                                       
                })} 

            </ul> 

            
            <h3> Add new Trasaction</h3>
            <hr />

            <form className='transaction-form'>
                <label>
                    Enter Description <br />
                    <input type="text"required />
                </label>
                <br />

                <label>
                    Enter Amount <br />
                    <input type="number"required/>
                </label>
                <br />

                <input type="submit" value="Add Transaction"/>        
            </form>
                         
    </div>
  );

}

export default child
