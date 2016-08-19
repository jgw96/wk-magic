function magic() {
    // test for indexeddb
    if (window.indexedDB && window.ApplePaySession) {
        // wkwebview
        alert('You are on wkwebview in cordova, safari, ios 10');
    } else if (window.indexedDB && window.ApplePaySession === undefined) {
        // broken wkwebview
        alert('You are on a pwa on ios 10 added to homescreen with broken scroll')
    }
    else {
        // no wkwebview
        alert('You are on ios 9 cordova or ios 8 anything');
    }
}

magic();