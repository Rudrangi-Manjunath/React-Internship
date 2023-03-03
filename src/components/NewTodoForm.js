import React, {useState} from 'react';
function NewTodoForm(props){

    const [Description,setDescription] = useState('');
    const [Assigned,setAssigned] = useState('');
    // const DescriptionchangeHandler = (event) => {
    //     console.log(event.target.value);
    // }
    // const AssignedchangeHandler = (event) => {
    //     console.log(event.target.value);
    // }
    const SubmitTodo = () => {
       if(Description.length > 0 && Assigned.length > 0){
        props.addtodo(Description,Assigned);
        setDescription('');
        setAssigned('');
       }
    }
    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" required 
                    onChange={event => setDescription(event.target.value)}
                    value = {Description}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required
                     onChange={event => setAssigned(event.target.value)}
                     value = {Assigned}
                     />
                </div>
            </form>
            <button 
            className="btn btn-primary"
            onClick={SubmitTodo}
            >
            Add Todo
            </button> 
        </div>
    );
}

export default NewTodoForm;