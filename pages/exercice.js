import Head from 'next/head';
import Script from 'next/script'
import React, { useState, useEffect } from 'react'
import { GeorgiaScript } from '../utils/georgia';
export default function Exercice() {

    const [showChat, setShowChat] = useState(false)

    useEffect(() => {
        setShowChat(process.env.NEXT_PUBLIC_GORGIAS === '' ||
            process.env.NEXT_PUBLIC_GORGIA === "false"
            ? false : true)
    }, []);

    // Explication:
    // I load the script with lazyOnload strategy.
    // At this way, the script will load after all the resources load.
    // I prefer this stategy because this chat it's not a priority for the client.
    // The page load time of the other dom elements will not be affected.

    return (
        <React.Fragment>

            {showChat &&
                <Script
                    dangerouslySetInnerHTML={{
                        __html: GeorgiaScript()
                    }}
                    strategy="lazyOnload"
                />
            }


        </React.Fragment>
    );

}