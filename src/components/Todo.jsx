import React from "react";

const Todo = ({ key, id, description, onDelete }) => (
    <div>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <button onClick={() => onDelete(id)} type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            {description}
        </div>
    </div>
);

export default Todo;
