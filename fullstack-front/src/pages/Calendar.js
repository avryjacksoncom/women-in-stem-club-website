import React from 'react'

export default function Calendar() {

    return (
        <div className="App">
                {/* Calendar Section */}
                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                        <p className="text-xl font-semibold pb-5">Event Calendar</p>
                        <iframe
                            title="Furry Events Calendar"
                            src="https://calendar.google.com/calendar/u/0/embed?src=morernos355@gmail.com&ctz=America/Los_Angeles"
                            
                            className="w-full h-96 border"
                            style={{ height: '700px', width: '100%' }}
                            frameBorder="0"
                        ></iframe>
                    </div>
        </div>
    );
}

