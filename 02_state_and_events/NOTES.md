# State and Events 

## What is a stateless component ?
- a component that doesn't need change
- static 
- use props only 
- not interactive 
- not using user's input data 

## Why is it important to understand state and event together?
- events will trigger some change in our component
- state will determine when a component will re-render 

## What is state?
- Private/ dynamic data owned by a component 
- State controls how the component behaves
- to initialize, utilize 'useState' hook

//array destructuring
const [ variable, setVariable ] = useState(initialVal)
const [ data, setData ] = useState("apple")

## What is the difference between props and state:
- props are immutable, which means they can not be changed. They are read only.
- State can be changed and updated