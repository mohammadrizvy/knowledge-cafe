import React from 'react';

const Questions = () => {
    return (
      <div>
        <h1 className="text-xl font-semibold">1.Props vs state?</h1>
        <p className=" mb-4 text-lg">
          Ans: A React component is a reusable component which can be used over
          and over again in the UI, but not always we are going to render the
          same component with same data. Sometimes we have to change the data or
          content inside a component. That is why props are introduced in React.
          Let's take a look how we can use props in react. And State is referred
          to the local state of the component which cannot be accessed and
          modified outside of the component and only can be used & modified
          inside the component.
        </p>
        <h1 className="text-xl font-semibold">2.How does useState work?</h1>
        <p className=" mb-4 text-lg">
          Ans: useState is a React Hook, which allows us to have state variables
          in the JSX functional component. we pass an initial value to this
          function, and it returns a variable with a new state based on
          functional logic.
        </p>
        <h1 className="text-xl font-semibold">
          3.Purpose of useEffect other than fetching data.
        </h1>
        <p className=" mb-4 text-lg">
          Ans: The useEffect in react js allows you to perform side effects in
          your components. The react useEffect examples of side effects include
          retrieving data, direct DOM updates, and timers. The second argument
          is optional
        </p>
        <h1 className="text-xl font-semibold">4.How Does React work?</h1>
        <p className=" mb-4 text-lg">
          Ans: The main objective of ReactJS is to develop User Interfaces UI
          that improves the speed of the apps. It uses virtual DOM JavaScript
          object, which improves the performance of the app. The JavaScript
          virtual DOM is faster than the regular DOM.
        </p>
      </div>
    );
};

export default Questions;
