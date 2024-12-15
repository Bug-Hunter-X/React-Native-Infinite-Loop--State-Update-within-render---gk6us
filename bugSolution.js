import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    setCount2(count1 * 2); // Update count2 after count1 changes
  }, [count1]); // Only run the effect when count1 changes

  return (
    <View>
      <Text>Count 1: {count1}</Text>
      <Text>Count 2: {count2}</Text>
      <Button title="Increment Count 1" onPress={() => setCount1(count1 + 1)} />
    </View>
  );
};

export default MyComponent;