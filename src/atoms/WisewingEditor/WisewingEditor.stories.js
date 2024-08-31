// src/components/WisewingEditor.stories.js
import React, { useState } from 'react';
import WisewingEditor from './WisewingEditor';

export default {
    title: 'WisewingEditor',
    component: WisewingEditor,
};

export const Default = () => <WisewingEditor />;

export const WithInitialContent = () => {
    const [content, setContent] = useState('<p>This is an editable area with initial content.</p>');

    return (
        <div>
            <WisewingEditor initialContent={content} />
        </div>
    );
};
