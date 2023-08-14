import './Card.css';

export default function Card(props) {

    const classes = 'card ' + props.className; //to apply all classes

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}