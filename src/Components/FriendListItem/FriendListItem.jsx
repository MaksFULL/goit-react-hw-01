import css from './FriendListItem.module.css'
import clsx from 'clsx'

const FriendListItem = ({ image, name, status }) => {
    return <div className={CSS.content}>
        <img src={image} alt="Avatar" width="48" className={CSS.img} />
        <p className={CSS.name}>{name}</p>
        <p className={clsx({
            [css.online]: status,
            [css.offline]: !status,
        })}>{status ? 'Online' : 'Offline'}</p>
        </div>
}

export default FriendListItem