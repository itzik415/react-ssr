import React from 'react';

const Home = () => {
    return (
        <div>
            <div>I'm the very best component</div>
            <button onClick={() => console.log('Hi there!')}>press me</button>
        </div>
    );
};

export default Home;