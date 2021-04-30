Summary:


1. data location:
    - only used in one component: save data in its internal state
    - used by diff components: save data in their parent component's internal state


2. data communication:
    - parent to child: use props to pass data from parent to child
    - child to parent: use props to pass a function from parent to child
    - child to child:
        a. child to parent
        b. parent to child

3. where there is state, there is method to handle that state