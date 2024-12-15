import CSS from './TransactionHistory.module.css';

const TransactionHistory  = ({ items }) => {
    console.log(items);

    return <table className={CSS.table}>
            <thead classname={CSS.thead}>
                <tr className ={CSS.tr}>
                    <th className={CSS.th}>Type</th>
                    <th className={CSS.th}>Amount</th>
                    <th className={CSS.th}>Currency</th>
                </tr>

            </thead>
            <tbody className={CSS.tbody}>
                {items.map(({ id, type, amount, currency }) => (<tr key={id} className={CSS.tr}>
                    <td className={CSS.td}>{type}</td>
                    <td className={CSS.td}>{amount}</td>
                    <td className={CSS.td}>{currency}</td>
                    </tr>))}
                
            </tbody>
        </table>
}

export default TransactionHistory;