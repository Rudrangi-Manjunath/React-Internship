function TodoRowItem(){
    const rowNumber = 1;
    const rowDescription = 'Learn React';
    const rowAssigned = 'Me';
    return(
        <tr>
        <th scope='row'>{rowNumber}</th>
        <td>{rowDescription}</td>
        <td>{rowAssigned}</td>
      </tr>
    )
}

export default TodoRowItem;