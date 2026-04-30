import Buttons from "../Buttons";
import FormHeader from "./FormHeader";
import InputForm from "./InputForm";
import { useNavigate } from "react-router";
import { useState } from "react";


export default function RegisterForm() {

    const navigate = useNavigate();

    const [newData, setData] = useState({
        fullName: "",
        email: "",
        phoneNum: "",
        password: "",
        rePassword: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }))
    };

    function handleRegister(e) {
        e.preventDefault();

        const cleanedData = {
            fullName: newData.fullName.trim(),
            email: newData.email.trim(),
            phoneNum: newData.phoneNum.trim(),
            password: newData.password.trim(),
            rePassword: newData.rePassword.trim()
        };

        const storedProfile = JSON.parse(localStorage.getItem("profiles")) || [];

        if (Object.values(cleanedData).some(val => !val)) {
            alert("Semua data harus diisi");
            return;
        }

        if (cleanedData.password !== cleanedData.rePassword) {
            alert("Password tidak sama");
            return;
        };

        const isEmailExist = storedProfile.some(
            (profile) => profile.email === cleanedData.email
        );

        if (isEmailExist) {
            alert("Email sudah terdaftar");
            return;
        }

        const newProfile = {
            id: crypto.randomUUID(),
            fullName: cleanedData.fullName,
            email: cleanedData.email,
            phoneNum: cleanedData.phoneNum,
            password: cleanedData.password
        };


        localStorage.setItem("profiles", JSON.stringify([...storedProfile, newProfile]));

        alert("Pengguna berhasil mendaftar");

        navigate("/")
    }

    return (
        <main className="flex justify-center items-center px-5 py-7">
            <form className="flex flex-col gap-5 bg-white rounded-lg border-[#F1F1F1] border items-center
                    justify-center text-center p-5 w-full max-w-147.5 sm:p-9"
                onSubmit={handleRegister}>
                <FormHeader
                    formTitle="Pendaftaran Akun"
                    formDesc="Yuk, mulai daftarkan akunmu sekarang juga!"
                />

                <div className="w-full flex flex-col gap-3 sm:gap-4">
                    <InputForm
                        label="Nama Lengkap"
                        required
                        name="fullName"
                        inputType="text"
                        value={newData.fullName}
                        onChange={handleChange}
                    />

                    <InputForm
                        label="E-Mail"
                        required
                        name="email"
                        inputType="email"
                        value={newData.email}
                        onChange={handleChange}
                    />

                    <InputForm
                        label="No. Hp"
                        required
                        name="phoneNum"
                        inputType="phone"
                        value={newData.phoneNum}
                        onChange={handleChange}
                    />

                    <InputForm
                        label="Kata Sandi"
                        required
                        name="password"
                        inputType="password"
                        value={newData.password}
                        onChange={handleChange}
                    />

                    <InputForm
                        label="Konfirmasi Kata Sandi"
                        required
                        name="rePassword"
                        inputType="password"
                        value={newData.rePassword}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full flex flex-col gap-5 sm:gap-6">
                    <div className="w-full flex flex-col gap-4">
                        <Buttons
                            btnStyle="primary"
                            type="button"
                            className="hover:cursor-pointer"
                            onClick={() => navigate("/")}
                        >
                            Masuk
                        </Buttons>

                        <Buttons
                            btnStyle="secondary"
                            className="hover:cursor-pointer"
                            type="submit"
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