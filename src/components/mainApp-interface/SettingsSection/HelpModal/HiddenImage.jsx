import React from 'react';

export function HiddenImage({ src, alt }) {
    const [show, setShow] = React.useState(false);
    return (
        <div>
            <abbr
                className="text-primary"
                title="attribute"
                onClick={() => setShow(!show)}
            >
                {show ? 'скрыть' : 'показать'} cкриншот
            </abbr>
            {show ? (
                <img
                    className="mw-100 border rounded"
                    src={src}
                    alt={alt}
                />
            ) : null}
        </div>
    );
}
