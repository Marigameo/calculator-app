import React from 'react'

export default function ClearHistoryButton({ historyButtonState, clearHistory }) {
    if (historyButtonState) {
        return (
            <div className="history-button-wrapper">
                <button className="history-button" onClick={clearHistory}>Clear history</button>
            </div>
        )
    }
    else {
        return <div></div>
    }
}
