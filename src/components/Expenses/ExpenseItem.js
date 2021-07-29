

    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 297.87;

   


    import React from 'react';   //use state is removed

    import ExpenseDate from './ExpenseDate';
    import Card from '../UI/Card';
    import './ExpenseItem.css';
// import { useState } from 'react';
    
    const ExpenseItem = (props) => {
      // const [title, setTitle] = useState(props.title);

      // let title = props.title;

      // const clickHandler = () => {
      //   // title = 'Updated!';
      //   setTitle('Updated');
      //   console.log(title);
      // }

      return (
        <li>
        <Card className='expense-item'>
          <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
          </div>
          {/* <button onClick = {clickHandler}>Click Here</button> */}
        </Card>
          </li>
      );
    }
    
    export default ExpenseItem;