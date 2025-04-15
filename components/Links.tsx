export default function Links () {
    const linkStyles = "!text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#7f8ced] after:transform after:scale-x-0 after:origin-bottom-right hover:!text-[var(--link-color)] hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300 after:ease-out transition-colors duration-300"

    return (
        <div className="flex justify-center sm:justify-start gap-4 mt-6">
            <a href="/experience" className={linkStyles}>experiences</a>
            <a href="/projects" className={linkStyles}>projects</a>
            <a href="/resume" className={linkStyles}>resume</a>
        </div>
    )
}