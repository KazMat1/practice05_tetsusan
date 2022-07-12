import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";


export default function Create(props) {

    const { data, setData, post, processing, errors } = useForm({
        title: "",
        tag_name: "",
        content: "",
    });

    const handleChange = (event) => {
        console.log(`${event.target.name}の内容が${event.target.value}に変わりました`);
        setData(event.target.name, event.target.value);
    };
    const submit = (e) => {
        e.preventDefault();

        post(route('post.store'));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Post/Create.jsx
                </h2>
            }
        >
            <Head title="Create" />
            {/* 投稿フォーム */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <ValidationErrors
                                errors={props.errors}
                            />
                            <section className="text-gray-600 body-font relative">
                                <div className="mb-4 w-full">
                                    <p className="text-xl text-gray-900">投稿の新規作成</p>
                                </div>
                                <form onSubmit={submit}>
                                    <div className="flex flex-wrap -m-2">
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <Label
                                                    forInput="title"
                                                    value="Title"
                                                    className="leading-7 text-sm text-gray-600"
                                                />
                                                <Input
                                                    type="text"
                                                    id="title"
                                                    name="title"
                                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    value={data.title}
                                                    isFocused={true}
                                                    handleChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <Label
                                                        forInput="tag_names"
                                                        value="Tag ※ハッシュタグ（#）をつけて入力してください"
                                                        className="leading-7 text-sm text-gray-600"
                                                />
                                                <Input
                                                    type="text"
                                                    id="tag_names"
                                                    name="tag_names"
                                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    value={data.tag}
                                                    handleChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <Label
                                                    forInput="content"
                                                    value="Content"
                                                    className="leading-7 text-sm text-gray-600"
                                                />
                                                <TextArea
                                                    id="content"
                                                    type="text"
                                                    name="content"
                                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                    value={data.content}
                                                    handleChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="p-2 w-full text-end">
                                            <Button
                                                className="text-white bg-indigo-500 py-3 px-6 hover:bg-indigo-400 active:bg-indigo-700 text-lg"
                                                processing={processing}
                                            >
                                                作成する
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
