const Header = ({props}) => {


console.log('Header');



return (
    <div>
        <h3>props.author</h3>
        <p>{props.isOnline ? 'Online' : 'Offline'}</p>
        <p>{props.message}</p>
    </div>
)
};