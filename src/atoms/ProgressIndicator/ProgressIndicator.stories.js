// src/components/ProgressIndicator.stories.js
import React, { useState } from 'react';
import ProgressIndicator from './ProgressIndicator';

export default {
    title: 'ProgressIndicator',
    component: ProgressIndicator,
};

export const Default = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <button onClick={() => setLoading(true)}>Start Loading</button>
            <button onClick={() => setLoading(false)}>Stop Loading</button>
            <ProgressIndicator isLoading={loading} />
        </div>
    );
};

export const CustomColorAndDuration = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <button onClick={() => setLoading(true)}>Start Loading</button>
            <button onClick={() => setLoading(false)}>Stop Loading</button>
            <ProgressIndicator isLoading={loading} color="#00ff00" duration={4} />
        </div>
    );
};
