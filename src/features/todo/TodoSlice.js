import { createSlice, nanoid } from "@reduxjs/toolkit";

//ab humko ye dekhna he ki store staring me kese dikhega, kuch value to hine chahoye na, to uske liye, initialstate ki method bana rahe he jiske andr object he.

const initialState = { 

    todos: [
        {
            id: 1,
            text: "Hello World"
        }
    ]

}

//ab Slice Create krni he

export const todoSlice = createSlice({

    //properties bht important he
    name: 'todo',
    //har ek slice ka initialstate hota he
    initialState, //upr declare kr diya he.
    //now reate reducer
    //isme aati he properties aur functions
    
    reducers: {
        
        //jb bhi humaddTodo karege, HAMESHA 2 chizo ka access milega, (state ,action), this is syntax
        //bcz initial state jo he wo wesa ka wesa to rahega nahi, change hoga.
        //remove todo me bhi id chahiye hogi, to uska kaam action karega.
        //-> State me humko Updated Value in the Store milti he.
        addTodo: (state, action) => {

            const todo = { //object

                id: nanoid(),
                text: action.payload //payload apne aap me ek object he.

            }
            state.todos.push(todo) //push(add) kr diya todo

        },

        //state ke andr current state milta he.
        //ation ke andr jo bhi data pass ho raha he.
        removeTodo: (state, action) => {

            //action me ek id to bheja hi bheja hoga.
            //to filter laga dete he, to jo id match nahi hoga usko le lete he baaki sb ko nahi lete he.
            //overwrite kr rahe he todos ko.
            //filter me har ek values ka access milega.
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload )

        },


    }

    //yaha se change he context se, context me hum sirf decalaration krte the.
    //reduxtoolkit me hum declaation ke saath defination bhi likhege.
})

// reducers access krne ka alag tarika he.

export const {addTodo, removeTodo} = todoSlice.actions

//individual functionality export kari he bcz hamare components me hume kaam aaega.

//ab store ko bhi awareness chahiye ki mujhe values mile, ese hi update nahi hoga.

                    //ye wala reducer keyword.
export default todoSlice.reducer

//agr aur slice method banage he, aur reducers banate ho to sbko ese invidually export krna padega.