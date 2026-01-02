

export default function ProductCard({ product }) {
    return (
        <div className="flex flex-col p-4 bg-white gap-2 sm:rounded-xl sm:overflow-hidden sm:max-w-[384px] sm:gap-4 sm:p-5">
            {/* card container */}
            <div className="flex gap-3 items-center sm:flex-col">
                {/* product image & desc */}
                <img src={product.image} alt="product image"
                    className="w-20.5 h-20.5 rounded-md sm:w-full sm:h-48.25 sm:object-cover sm:rounded-xl" />

                <div className="flex flex-col gap-2 sm:gap-4">
                    <div className="flex flex-col gap-2">
                        <h5 className="text-base font-semibold font-poppins sm:text-lg">
                            {product.productName}
                        </h5>

                        <p className="hidden sm:inline-block text-base font-medium text-gray-500 font-dm-sans line-clamp-2">
                            {product.productDesc}
                        </p>
                    </div>

                    <div className="flex gap-2 sm:gap-2.5">
                        {/* teacher image & info */}
                        <img src={product.teacherImage} alt="teacher image" className="w-9 h-9 object-contain rounded-md sm:w-10 sm:h-10" />

                        <div className="flex flex-col">
                            <p className="text-sm font-medium font-dm-sans sm:text-base">{product.teacherName}</p>
                            <p className="text-xs text-gray-400 sm:text-sm">{product.teacherExp}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center">
                {/* product rating & price */}
                <div className="flex items-center">
                    <img src={product.ratingImage} alt="product rating" className="h-4.5 sm:h-4.5" />
                    <p className="
                            text-xs
                            font-medium
                            font-dm-sans
                            underline decoration-1
                            text-gray-500
                            sm:text-base
                            ">{product.rating} ({product.reviewerCount})
                    </p>
                </div>

                <p className="
                        text-xl
                        font-poppins
                        font-semibold
                        text-green-500
                        sm:text-2xl
                        ">
                    Rp {product.productPrice}
                </p>
            </div>
        </div>
    )
}