import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm, Link } from "@inertiajs/inertia-react";
import Button from "@/Components/Button";

export default function Index(props) {
    const { delete: destroy } = useForm();
    const handleDelete = (id) => {
        console.log('削除ボタンが押されました');
        destroy(route("post.destroy", id), {
            preserveScroll: true,
        });
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Post/Index.js
                </h2>
            }
        >
            <Head title="Post" />

            <section className="text-gray-600 body-font ">
                <div className="container max-w-7xl mx-auto sm:px-6 lg:px-8 py-6 flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        {/* the content of profile */}
                        <div className="p-4 lg:w-1/3 w-full">
                            <div className="flex rounded-lg border-gray-200 p-8 flex-col bg-white shadow-sm text-center items-center">
                                <div className="w-20 h-20 sm:mb-3 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-xl title-font font-medium">
                                        {props.auth.user.name}
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                        {props.auth.user.email}
                                    </p>
                                    <p className="leading-relaxed text-base mb-5">
                                        投稿：○件
                                    </p>
                                    <Button>
                                        <a className="text-white inline-flex items-center">
                                            プロフィールを編集する
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* the list of posts */}
                        <div className="p-4 lg:w-2/3 w-full">
                            {props.posts.map((post) => {
                                return (
                                    <div
                                        className="md:w-full mb-3"
                                        key={post.id}
                                    >
                                        <div className="flex rounded-lg border-gray-200 p-8 sm:flex-row flex-col bg-white shadow-sm">
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-start">
                                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                                        {post.title}
                                                    </h2>
                                                    <div>
                                                        {/* 編集ボタン */}
                                                        <Link
                                                            href={route(
                                                                "post.edit",
                                                                post.id
                                                            )}
                                                        >
                                                            <button
                                                                className="hover:bg-blue-400 bg-blue-500 active:bg-blue-600 px-1 py-1 rounded "
                                                            >
                                                                <svg className="h-4 w-4 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg>
                                                            </button>
                                                        </Link>
                                                        {/* 削除ボタン */}
                                                        <button
                                                            className="hover:bg-red-400 bg-red-500 active:bg-red-600 px-1 py-1 rounded ml-1"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    post.id
                                                                )
                                                            }
                                                        >
                                                            <svg
                                                                className="h-4 w-4 text-white"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                    <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                    />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    {/* <Button
                                                        className="hover:bg-red-400 bg-red-500 active:bg-red-700 px-1 py-1"
                                                        onClick={() => handleDelete(post.id)}
                                                    >
                                                        <svg
                                                            className="h-4 w-4 text-white-500"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                                <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                />
                                                        </svg>
                                                    </Button> */}
                                                </div>

                                                <p className="leading-relaxed text-base">
                                                    {post.content}
                                                </p>
                                                <div className="flex justify-between">
                                                    <a className="mt-3 text-green-500 inline-flex items-center">
                                                        Learn More
                                                        <svg
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            className="w-4 h-4 ml-2"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                    <p className="mt-3 text-gray-400 inline-flex items-center">
                                                        {post.created_at}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </Authenticated>
    );
}
