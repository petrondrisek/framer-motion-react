'use server';

import AboutComponent from "@/components/About/AboutComponent";
import GalleryExample from "@/components/Gallery/GalleryExample";
import { GlowCard } from "@/components/GlowCard/GlowCard";
import GlowCardExample from "@/components/GlowCard/GlowCardExample";
import ReviewsComponent from "@/components/Reviews/ReviewsComponent";
import SliderComponent from "@/components/Slider/SliderComponent";

const products = [
  { id: 1, name: "Product 1", image: "/assets/images/mug.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." },
  { id: 2, name: "Product 2", image: "/assets/images/ipod.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." },
  { id: 3, name: "Product 3", image: "/assets/images/marketing.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." },
];

const reviews = [
    { id: 1, name: "Review 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." },
    { id: 2, name: "Review 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." },
    { id: 3, name: "Review 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." },
    { id: 4, name: "Review 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." },
];

export default function Home() {
  return (<>
    <SliderComponent products={products} />
    <AboutComponent />
    <ReviewsComponent id="review1" reviews={reviews} />
    <ReviewsComponent id="review2" reviews={reviews} direction="right" gap={0} reviewWidth={600} duration={1} />

    <GlowCardExample />
    <GalleryExample />
  </>);
}
