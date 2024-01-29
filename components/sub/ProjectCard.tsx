import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
    src: string;
    title: string;
    description: string;
    url: string
}

const ProjectCard = ({ src, title, description,url }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full h-full">
            
            <Link href={url} target="_blank" className="w-full h-full absolute z-50"></Link>
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-contain"
            />
            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;