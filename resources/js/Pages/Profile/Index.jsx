import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';


export default function Index(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile/Index.js</h2>}
        >
            <Head title="Profile" />

            <section className="text-gray-600 body-font ">
                <div className="container max-w-7xl mx-auto sm:px-6 lg:px-8 py-6 flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/3 w-full">
                            <div className="flex rounded-lg border-gray-200 p-8 flex-col bg-white shadow-sm text-center items-center">
                                <div className="w-20 h-20 sm:mb-3 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-xl title-font font-medium">{props.auth.user.name}</h2>
                                    <p className="leading-relaxed text-base">{props.auth.user.email}</p>
                                    <p className="leading-relaxed text-base mb-5">投稿：○件</p>
                                    <Button
                                        className='hover:bg-gray-400'
                                    >
                                        <Link
                                            href="/"
                                            className="text-white inline-flex items-center"
                                        >
                                            プロフィールを編集する
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-2/3 md:w-full">
                            <div className="flex rounded-lg border-gray-200 p-8 sm:flex-row flex-col bg-white shadow-sm">
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">記事のタイトルが入ります</h2>
                                    <p className="leading-relaxed text-base">記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。</p>
                                    <div className="flex justify-between">
                                        <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                        </a>
                                        <p className="mt-3 text-gray-400 inline-flex items-center">2022/06/22</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Authenticated>
    );
}
