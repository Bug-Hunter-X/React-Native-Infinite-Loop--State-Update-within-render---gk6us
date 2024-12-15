# React Native Infinite Loop: State Update within render()

This repository demonstrates a common error in React Native applications: an infinite loop caused by updating a state variable within the render method when that state variable depends on another state variable also being updated within the render method.  The solution utilizes the useEffect hook to prevent this recursive update cycle.

## Problem
The `bug.js` file shows how updating a state variable (`count2`) dependent on another state variable (`count1`) within the `render` method leads to an infinite render loop.

## Solution
The `bugSolution.js` file demonstrates how to fix this issue using the `useEffect` hook. The `useEffect` hook allows you to perform side effects (such as state updates) after the component has rendered, but only when certain values change.  This prevents the infinite loop by ensuring state updates happen outside of the render cycle.