import EventItem from "./event-item";
import classes from './event-list.module.css';

export default function EventList(props) {
    const { items } = props;

    return <ul className={classes.list}>
        {items.map(event => <EventItem 
                                id={event.id}
                                title={event.title}
                                location={event.location}
                                data={event.date}
                                image={event.image}
                                key={event.id} /> )}
    </ul>
}
