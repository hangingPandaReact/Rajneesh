import React from "react";
import ListItem from "./listitem";


const List = (props) => {

    return (
        <>
            <div className="row justify-content-center  ">
                <div className="col-sm-4 bg-secondary pb-3 shadow-lg rounded py-4">
                    {
                        props.todo.map((item) => {
                            const handleDeleteOn = () => { props.onDelete(item.id) }
                            const filterValue = props.filterValue;
                            const todoName = item.todo;
                            //const ser = () => item.sort();
                            if ((!filterValue) || (todoName.toLowerCase().search(filterValue.toLowerCase()) !== -1)) {
                                return <ListItem
                                    item={item.todo}
                                    key={item.id}
                                    handleDelete={handleDeleteOn}
                                    handleEdit={props.onEdit}
                                    id={item.id}

                                />
                            }
                        })
                    }
                </div>
            </div>
        </>
    );
}


export default List;