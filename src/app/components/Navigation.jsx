import Link from "next/link";

export default function Navigation() {

    const phone = "01511762807"; // your number
    const message = encodeURIComponent(
        "Hey, I viewed your profile and wanted to discuss a topic with you (formally)."
    );


    return (
        <div className="mt-6 flex justify-center gap-4">
            <Link href={'/'} className="border hover:opacity-75 text-sm border-gray-600 rounded-lg p-1 px-4">
                Home
            </Link>
            <Link href={'/explore'} className="border hover:opacity-75 text-sm border-gray-600 rounded-lg p-1 px-4">
                Gallery
            </Link>
            <Link href={'/projects'} className="border hover:opacity-75 text-sm border-gray-600 rounded-lg p-1 px-4">
                Projects
            </Link>
            <Link
                href={`https://wa.me/88${phone}?text=${message}`}
                target="_blank"
                className="border hover:opacity-80 text-sm border-gray-600 rounded-lg p-1 px-4 flex items-center gap-2 text-green-400 hover:text-green-300 transition"
            >
                <span className="hidden sm:inline-block">Quick Connect </span>WhatsApp
            </Link>

        </div>
    )
}