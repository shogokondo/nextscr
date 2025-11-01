"use client";
import { useForm } from "react-hook-form";



export default function PracticereactHookForm() {
    const {register,formState:{errors},handleSubmit,watch} = useForm();
    console.log(watch("example")) 
    return (<form onSubmit={handleSubmit((onSubmitData) => console.log(onSubmitData))}>
        <h1>登録フォーム</h1>
        <label htmlFor="example" className="block text-sm font-medium text-gray-700 mb-1">◼️名前を入力</label>
        <input id="example" type='text' {...register("example",{ required: true })} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        {errors.example && <span className="text-red-500 text-sm">This field is required</span>}
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">送信</button>
    </form>)
}