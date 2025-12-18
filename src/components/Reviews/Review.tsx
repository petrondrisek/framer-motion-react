export default function Review({ content, width }: { content: any, width: number }) {
    return <div 
        className={`border-2 rounded-sm p-4 border-gray-300 h-[200px] max-w-full my-16 text-black`}
        style={{ minWidth: width }}
    >
        {content.description} (#{content.name})
    </div>
}