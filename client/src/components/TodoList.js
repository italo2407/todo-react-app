import React, { memo } from "react";
import { List, Paper, Grid } from "@material-ui/core";

import TodoListItem from "./TodoListItem";

const TodoList = memo(props => (
  <>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: "scroll" }}>
          {props.items.map((item, idx) => (
            <TodoListItem
              {...item}
              key={`TodoItem.${idx}`}
              divider={idx !== props.items.length - 1}
              onRemoveButtonClick={() => props.onItemRemove(item._id)}
              onCheckBoxToggle={() => props.onItemCheck(item._id)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));

export default TodoList;
