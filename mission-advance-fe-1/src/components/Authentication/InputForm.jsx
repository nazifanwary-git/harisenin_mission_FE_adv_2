import { useState } from "react";
import PhoneSelector from "./PhoneSelector";
import ToggleVisibility from "./ToggleVisibility";

export default function InputForm({
    className = "",
    inputType = "text",
    label,
    name,
    id,
    required = false,
    placeholder,
    ...props
}) {

    const inputId = id || name;

    const types = {
        text: "text",
        email: "email",
        phone: "tel",
        password: "password"
    };

    const [isVisible, setIsVisible] = useState(false);

    let resolveType;

    if (inputType === "password") {
        resolveType = isVisible ? "text" : "password";
    } else {
        resolveType = types[inputType] || "text"
    };

    const isPhone = inputType === "phone";

    return (
        <div className="flex flex-col w-full items-start gap-1">
            {label && (<label htmlFor={inputId} className="text-sm font-DMSans text-black/70 sm:text-base">
                {label} {required && (<span className="text-red-600 text-base font-normal">*</span>)}
            </label>)}

            {isPhone ? (
                <div className="flex gap-2 w-full">
                    <PhoneSelector />

                    <input
                        type={resolveType}
                        className={`flex-1 border border-black/20 rounded-md py-3 px-2.5 text-sm font-DMSans sm:text-base ${className}`}
                        placeholder={placeholder}
                        id={inputId}
                        name={name}
                        required={required}
                        {...props}
                    />
                </div>
            ) : (
                <div className="relative w-full">
                    <input
                        type={resolveType}
                        className={`w-full border border-black/20 rounded-md py-3 px-2.5 text-sm font-DMSans sm:text-base ${className}`}
                        placeholder={placeholder}
                        id={inputId}
                        name={name}
                        required={required}
                        {...props}
                    />

                    {inputType === "password" && (
                        <ToggleVisibility onToggle={setIsVisible} />
                    )}
                </div>
            )}
        </div>
    )
}