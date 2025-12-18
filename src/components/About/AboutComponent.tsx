"use client";
import { motion } from "framer-motion";
import Image from "./Image";
import ParagraphWord from "./ParagraphWord";
import ParagraphChar from "./ParagraphChar";

export default function AboutComponent() {
    return (
        <motion.section 
            className="bg-white text-black relative z-10 py-16 px-4"
            initial={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }}
        >
            <div className="max-w-[1366px] mx-auto flex gap-4 flex-wrap justify-between flex-col lg:flex-row items-center">
                <motion.div className="max-w-full lg:max-w-1/2">
                    <h1 className="text-6xl font-bold p-2 uppercase whitespace-nowrap">
                        <ParagraphChar id="about-header" text="About" />
                    </h1>
                    <ParagraphWord 
                        id="text1_"
                        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a nibh felis. Maecenas quis vehicula neque. Duis non posuere nisi, sit amet fringilla tellus. Duis tincidunt viverra erat. Cras a nibh libero. Ut non erat rutrum, ultricies est ut, pellentesque est. Phasellus nibh arcu, semper in odio eget, varius ornare tellus. Aliquam faucibus, tellus vel efficitur efficitur, tellus ex convallis enim, non euismod purus ex id sem. Nam sagittis varius tincidunt. Donec tortor dui, euismod vitae tellus at, hendrerit commodo lorem. Praesent eget aliquet ipsum. Etiam porttitor erat turpis, id dignissim quam ornare in. In hac habitasse platea dictumst. Maecenas et tellus vehicula, auctor libero vitae, eleifend massa. Nulla feugiat tincidunt nibh ac vestibulum.`}
                    />
                    <ParagraphWord 
                        id="text2_"
                        text={`Mauris sollicitudin eu nibh at pellentesque. Ut iaculis sit amet mi ut cursus. Phasellus eleifend justo dolor, ut viverra elit consectetur id. Fusce at sed nisl efficitur fermentum. Proin sodales at nisi ut convallis. Ut in tellus quis augue consequat tin in lacinia orci. Donec odio augue, cursus pellentesque blandit id, sollicitudin ut augue.`}
                    />
                </motion.div>
                <Image />
            </div>
        </motion.section>
    )
}