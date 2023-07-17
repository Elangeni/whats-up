import React from 'react'

const Locator = () => {
    return (
        <main className="locator-component">
            <p className="copy">
                Ready to know what's up? Enter your location and let me elevate your perspective!
            </p>
            <label for="locator">Location: </label>
            <input type="text" id="locator" name="locator"/>
        </main>
    )
}

export default Locator