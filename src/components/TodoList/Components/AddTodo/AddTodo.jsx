import { useDispatch } from 'react-redux'
import { addTodo, editTodo } from '../../../../store/actions';
import s from './AddTodo.module.css'
function AddTodo ({title,desc,setTitle, setDesc,setItem, item, setArr}) {
    console.log(title);
    const dispatch = useDispatch()
    const addTitle = () => {
        if(title.trim() !== '' && desc.trim() !== '') {
          
          if (item) {
            dispatch(editTodo({title, desc, id: item.id}))
            
            setItem(null);
            setTitle('');
            setDesc('');
        } else {
            dispatch(addTodo({title, desc, id: Math.random()}))
            setTitle('');
            setDesc('');
        }  
        }  
    }
   return (
        <>
            <div className={s.inp}>
                <label>
                    <span>заголовок</span>
                    <br />
                    <input value={title} onChange={(e) => setTitle(e.target.value )} type="text" />
                </label>
                <label>
                    <span>Описание</span>
                    <br />
                    <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" />
                </label>
                <br />
                <button onClick={addTitle}>click</button>
            </div>
        </>
   )
}
export default AddTodo