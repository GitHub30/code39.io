import * as functions from 'firebase-functions';
import * as bwipjs from 'bwip-js';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const generate = functions.https.onRequest((request, response) => {
    console.info(request.path);
    const text = unescape(request.path.slice(1, -4));
    bwipjs(request, response, {
        bcid: 'code39',
        text: text,
        includetext: true,
        paddingwidth: 8,
        paddingheight: 8,
        backgroundcolor: 'FFFFFF'
    });
});
