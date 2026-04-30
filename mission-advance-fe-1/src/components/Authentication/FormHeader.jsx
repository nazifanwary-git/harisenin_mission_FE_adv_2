

export default function FormHeader({ formTitle, formDesc }) {
    return (
        <div className="flex flex-col gap-2.5 w-full">
            <h1 className="text-2xl font-semibold font-poppins sm:text-[32px]">
                {formTitle}
            </h1>
            <span className="text-sm font-normal font-DMSans sm:text-base">
                {formDesc}
            </span>
        </div>
    )
}