import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm, Link } from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import SideBar from "@/Components/Sidebar";
import Avator from "@/Components/Avator";
import ProfileInformation from "@/Components/ProfileInfomation";
import IconButton from "@/Components/IconButton";
import PostDate from "@/Components/PostDate";
import PostTitle from "@/Components/PostTitle";
import PostContent from "@/Components/PostContent";

export default function Index(props) {
    const { delete: destroy } = useForm();
    const handleDelete = (id) => {
        destroy(route("post.destroy", id), {
            preserveScroll: true,
        });
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Post/Index.js</h2>
            }
        >
            <Head title="Post" />

            <section className="text-gray-600 body-font ">
                <div className="container max-w-7xl mx-auto sm:px-6 lg:px-8 py-6 flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        {/* the content of profile */}
                        <SideBar>
                            <Avator />
                            <ProfileInformation
                                name={props.auth.user.name}
                                email={props.auth.user.email}
                                countPost={props.countPost}
                            />
                            <Button>
                                <a className="text-white inline-flex items-center">
                                    プロフィールを編集する
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </Button>
                        </SideBar>
                        {/* the list of posts */}
                        <div className="p-4 lg:w-2/3 w-full">
                            {props.posts.map((post) => {
                                return (
                                    <div className="md:w-full mb-3" key={post.id}>
                                        <div className="flex rounded-lg border-gray-200 p-8 sm:flex-row flex-col bg-white shadow-sm">
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-start">
                                                    <PostTitle title={post.title}/>
                                                    <div>
                                                        {/* 編集ボタン */}
                                                        <Link href={route("post.edit", post.id)}>
                                                            <IconButton className="hover:bg-blue-400 bg-blue-500 active:bg-blue-600">
                                                                <svg className="h-4 w-4 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>
                                                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                                </svg>
                                                            </IconButton>
                                                        </Link>
                                                        {/* 削除ボタン */}
                                                        <IconButton className="hover:bg-red-400 bg-red-500 active:bg-red-600" onClick={() => handleDelete(post.id)}>
                                                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </IconButton>
                                                    </div>
                                                </div>
                                                <PostContent content={post.content}/>
                                                <div className="flex justify-between">
                                                    <Link className="mt-3 text-green-500 hover:text-green-400 active:text-green-600 inline-flex items-center" href={route("post.index")}>
                                                        Learn More
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                                        </svg>
                                                    </Link>
                                                    <PostDate date={post.created_at} />
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
