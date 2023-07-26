import React, { useEffect } from 'react';

interface AdsComponentProps {
    dataAdSlot: string;
}

const AdsComponent: React.FC<AdsComponentProps> = (props) => {
    const { dataAdSlot } = props;  

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            // Handle error
        }
    }, []);

    return (
        <>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
                data-ad-slot={dataAdSlot}
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>
    );
};

export default AdsComponent;
