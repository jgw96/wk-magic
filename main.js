function magic() {
    // test for indexeddb
    if (window.indexedDB) {
        // wkwebview
        alert ('You are on ios 10: pwa in safari, cordova etc');
        if (window.ApplePaySession === undefined) {
            alert ('You are on a pwa added to homescreen')
        }
    } else {
        // no wkwebview
        alert ('You are on ios 9 cordova or ios 8 anything');
    }
}

magic();