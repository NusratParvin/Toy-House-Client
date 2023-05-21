import React from 'react';
import useTitle from '../../hook/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <div class="w-4/5 my-24 px-6 mx-auto">

                <section class="mb-32 text-gray-800">
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="mb-6 md:mb-0">
                            <h2 class="text-4xl font-bold mb-6 text-center">Our Blog</h2>
                        </div>

                        <div class="mb-6 md:mb-0">
                            <p class="font-bold mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?
</p>
                            <p class="text-gray-500 mb-12">
                                Access token helps authenticating the user for their requested data and refresh token is used to re-issue a new access token when the previous one is expired.
                                We can store token in browser storage but better to keep in HTTP cookies.
                            </p>

                            <p class="font-bold mb-4">Compare SQL and NoSQL databases?
</p>
                            <p class="text-gray-500 mb-12">
                                SQL database are vertically scalable where NoSQL is horizontally scalable.
                                SQL are table base and NoSQL is key-value pairs,document/json based.
                                for huge amount off changing data set NoSQL works well but for highly relational Database SQL is used.
                            </p>

                            <p class="font-bold mb-4">What is MongoDB aggregate and how does it work?

</p>
                            <p class="text-gray-500 mb-12">
                                Aggregation is a way of processing huge data in a collection through many stages which altogether calls pipeline. A pipeline can filter sort,group or modify data to organize them in structured way.
                            </p>

                            <p class="font-bold mb-4">
                            What is express js? What is Nest JS?
                            </p>
                            <p class="text-gray-500 mb-12">
                                Both are frameworks where EXpressJS is Node.js based web application framework and NextJS is react based framework .
                            </p>
                        </div>
                    </div>
                </section>
                

            </div>
        </div>
    );
};

export default Blog;