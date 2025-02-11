"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeatureProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "./product";
import { Card, CardContent } from "./card";

const FeaturedProducts = () => {
    const { result, loading }: ResponseType = useGetFeaturedProducts();

    console.log(result);

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:ml-4">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {result && result.map((product: ProductType) => {
                        if (!product) return null; // add this line to skip null or undefined products
                        const { attributes, id } = product;
                        if (!attributes) return null; // add this line to skip products without attributes
                        const { slug, images, productName, taste, origin } = attributes;
                        return (
                            <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                <div className="p-1">
                                    <Card className="py-4 border border-gray-200 shadow-none">
                                        <CardContent className="relative flex items-center justify-center px-6 py-2">
                                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`} alt="Image featured" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;
