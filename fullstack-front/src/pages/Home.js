import React from 'react';
import dog from './dog.webp';
import cat from './cat.jpg'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container mx-auto">
            
            {/* Header Section */}
            <header className="w-full">
                <div className="flex flex-col items-center py-12">
                    <a
                        href="#"
                        className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
                    >
                        Women's in Stem at 
                    </a>
                    <p className="text-lg text-gray-600">
                        Information for Women's stem Club
                    </p>
                </div>
            </header>

            {/* Topic Navigation */}
            <nav className="w-full py-4 border-t border-b bg-gray-100">
                <div className="flex flex-wrap items-center justify-center text-sm font-bold uppercase">

                    <Link to="/calendar" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                        Calendar
                    </Link>

                    <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                        Resources
                    </a>
                    <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                        Community
                    </a>
                    <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                        Internships
                    </a>
                    <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                        Events
                    </a>
                    <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                        About us
                    </a>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto flex flex-wrap py-6">

                {/* Posts Section */}
                <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                    {/* Example Event Post */}
                    <article className="flex flex-col shadow my-4">
                        <a href="#" className="hover:opacity-75">

                        </a>
                        <div className="bg-white flex flex-col justify-start p-6">
                            <a
                                href="#"
                                className="text-blue-700 text-sm font-bold uppercase pb-4"
                            >
                                News
                            </a>
                            <a
                                href="#"
                                className="text-3xl font-bold hover:text-gray-700 pb-4"
                            >
                                Dog
                            </a>
                                <img src={cat} alt="Featured Event" className="small-image" />;
                            <p className="text-sm pb-3">
                                By <a href="#" className="font-semibold hover:text-gray-800">Srudent</a>, Scheduled on Tuesday 11th, 2024
                            </p>
                            <p className="pb-6">
                                Dog
                            </p>
                            <a
                                href="#"
                                className="uppercase text-gray-800 hover:text-black"
                            >
                                Learn More <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </article>

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
                </section>

                {/* Sidebar Section */}
                <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                    {/* About Section */}
                    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                        <p className="text-xl font-semibold pb-5">About Us</p>
                        <p>
                            We are a community-driven website.
                        </p>
                        <a
                            href="#"
                            className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
                        >
                            Get to know us
                        </a>
                    </div>

                    {/* Featured Artists */}
                    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                        <p className="text-xl font-semibold pb-5">Featured Student</p>
                        <div className="grid grid-cols-3 gap-3">
                            <img
                                className="hover:opacity-75"
                                src="https://source.unsplash.com/150x150/?art,illustration"
                                alt=" Student 1"
                            />
                            <img
                                className="hover:opacity-75"
                                src="https://source.unsplash.com/150x150/?digital,art"
                                alt=" Student 2"
                            />
                            <img
                                className="hover:opacity-75"
                                src="https://source.unsplash.com/150x150/?furry,art"
                                alt="Student 3"
                            />
                        </div>
                        <a
                            href="#"
                            className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
                        >
                            Learn More
                        </a>
                    </div>
                </aside>
            </div>
            
        </div>
    );
}
