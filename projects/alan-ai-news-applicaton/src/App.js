import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
// import { command } from 'yargs';

const alanKey = '57e952c6341522f760e5370876780ac12e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines'){
                    console.log(articles);
                }
            }
        })
    }, [])
    return (
        <div>
            Alan Ai News Application
        </div>
    );
}

export default App;
