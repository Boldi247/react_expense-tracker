import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

//you can use 'props', but you can destructure it as well.
//if you use props, then access 'date' for example as: props.date
function ExpenseItem(/*props*/{ date, title, amount }) {
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={date}></ExpenseDate>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;