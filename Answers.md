# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a Javascript library. It allows us to code what renders in a browser in a reusable way with much less boiler plate than Vanilla Javascript. With Javascript, you have to describe how the browser should create components with lots of redundant code, but with React we're able to create components in a much more concise, efficient way. It also allows us to load and manipulate new data without reloading a web page, which is faster. 

2. What does it mean to think in react?

It involves thinking about how smaller, individual pieces of code can be pieced together to create more complex, larger applications. I would also describe it as being able to comprehend how different data is passed between the different components since it might not always be in the same fashion the components are created. 

3. Describe state.

State is essentially data in an application. It's called state because it is the determining factor for when the DOM is updated. When the state changes, the DOM is re-rendered appropriately.  

4. Describe props.

Props are the way we share state between different components within our app. We can assign props to a component, and those props can be passed down to other child components. 

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed. For example, the side effect we have interacted with most this week is fetching data from various APIs. To sync side effects, we use useEffect, which helps React understand when state changes so that we can execute a certain bit of code. 
