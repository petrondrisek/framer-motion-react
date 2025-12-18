import { Product } from "@/types/SliderProduct"
import styles from "@/components/Slider/slider.module.css"

interface SliderComponentSlideProps {
    product: Product,
    className: string
}

export default function SliderComponentSlide({ product, className }: SliderComponentSlideProps) {
    return (
        <div className={`${className} ${styles.sliderItem}`}>
            <img
                src={product.image}
                alt={product.name}
            />
        </div>
    )
}