import React from 'react'

const Youtube = ({ src, width, maxWidth }) => {
    return (
        <div style={{ width: `${width ? maxWidth : '600px'}`, marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
            }}>
                <iframe
                    title='youtube'
                    src={src}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0,
                    }}></iframe>
            </div>
        </div>
    )
}

export default Youtube