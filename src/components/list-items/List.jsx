import '../../App.css'
import Listitem from './Listitem' 



const List = ({todos}) => {
    return(
        <div className='todo'>
            <ul className='todo-list'>
                {
                    todos.map((el) => {
                        return <Listitem text={el.text} id={el.key}/>
                    })
                }
            </ul>
        </div>
    )
}

export default List;