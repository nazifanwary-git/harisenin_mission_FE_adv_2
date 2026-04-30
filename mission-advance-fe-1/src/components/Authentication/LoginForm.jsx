import { useNavigate } from "react-router";
import Buttons from "../Buttons";
import FormHeader from "./FormHeader";
import InputForm from "./InputForm";
import { useState } from "react";


export default function LoginForm() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setLoginData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    function handleLogin(e) {
        e.preventDefault();

        const cleanedData = {
            email: loginData.email.trim(),
            password: loginData.password.trim()
        }

        if (!cleanedData.email || !cleanedData.password) {
            alert("Email dan Kata Sandi harus diisi");
            return;
        }

        const storedProfile = JSON.parse(localStorage.getItem("profiles")) || [];

        const userProfile = storedProfile.find(profile =>
            profile.email === cleanedData.email && profile.password === cleanedData.password);

        if (!userProfile) {
            alert("Email atau Kata Sandi yang dimasukkan salah");
            return;
        };

        localStorage.setItem("authUser", JSON.stringify(userProfile));

        alert("Login berhasil");

        navigate("/dashboard");
    }

    return (
        <main className="flex justify-center items-center px-5 py-7">
            <form className="flex flex-col gap-5 bg-white rounded-lg border-[#F1F1F1] border items-center
            justify-center text-center p-5 w-full max-w-147.5 sm:p-9"
                onSubmit={handleLogin}>
                <FormHeader
                    formTitle="Masuk ke Akun"
                    formDesc="Yuk, lanjutin belajarmu di videobelajar."
                />

                <div className="w-full flex flex-col gap-3 sm:gap-4">
                    <InputForm
                        label="E-Mail"
                        required
                        name="email"
                        inputType="email"
                        value={loginData.email}
                        onChange={handleChange}
                    />

                    <InputForm
                        label="Kata Sandi"
                        required
                        name="password"
                        inputType="password"
                        value={loginData.password}
                        onChange={handleChange}
                    />

                    <button className="text-sm sm:text-base font-DMSans font-medium
                    text-[#4A505C] hover:text-[#788196] self-end">
                        Lupa Password?
                    </button>
                </div>

                <div className="w-full flex flex-col gap-5 sm:gap-6">
                    <div className="w-full flex flex-col gap-4">
                        <Buttons
                            btnStyle="primary"
                            type="submit"
                            className="hover:cursor-pointer"
                        >
                            Masuk
                        </Buttons>

                        <Buttons
                            btnStyle="secondary"
                            className="hover:cursor-pointer w-full"
                            type="button"
                            onClick={() => navigate("/register")}
                        >
                            Daftar
                        </Buttons>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="text-gray-500 font-medium font-dm-sans">atau</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    <Buttons btnStyle="google"></Buttons>
                </div>
            </form>
        </main>
    )
}